require('dotenv').config()
import * as next from 'next'
import * as express from 'express'

const server: express.Application = express()
server.set('port', process.env.PORT || 8080)

const app: next.Server = next({ dev: process.env.NODE_ENV !== 'production' })
const nextHandler = app.getRequestHandler()

const missionNameRegex: RegExp = /(CO|TVT|COTVT|LOL)(\d{1,3})_([_a-zA-Z0-9]+)_(?:v|V)([0-9\._]+)\.([a-zA-Z0-9_]+)\.pbo/g

app
  .prepare()
  .then(() => {
    server.post('/api/mission', (_req: express.Request, res: express.Response) => {
      res.status(200).end()
    })

    server.get('/api/mission/details', (req: express.Request, res: express.Response) => {
      const { name } = req.query
      const groups: RegExpExecArray = missionNameRegex.exec(decodeURIComponent(name))
      res.status(200).json({
        file: name,
        type: groups[1],
        max: groups[2],
        name: groups[3].replace(/_/g, ' '),
        version: groups[4],
        island: groups[5]
      })
    })

    server.get('*', (req: express.Request, res: express.Response) => {
      nextHandler(req, res)
    })

    server.listen(server.get('port'), () => {
      console.log(`🚀 Listening on :${server.get('port')}`)
    })
  })
  .catch(console.error)
