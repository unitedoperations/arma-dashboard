import * as React from 'react'
import { Input, Select, Row, Col } from 'antd'
import './details.less'

const { Option } = Select

interface MissionDetails {
  file: string
  type: string
  max: string
  name: string
  version: string
  island: string
}

interface DetailsProps {
  mission: MissionDetails
  onComplete: (info: Record<string, string | number>) => void
}

const Details: React.FunctionComponent<DetailsProps> = (props): JSX.Element => {
  const [name, setName] = React.useState(props.mission.file.split('.')[0].replace(/_/g, ' '))
  const [min, setMin] = React.useState(null)
  const [max, setMax] = React.useState(parseInt(props.mission.max))
  const [jip, setJIP] = React.useState('walk')
  const [respawn, setRespawn] = React.useState('none')
  const [type, setType] = React.useState(
    props.mission.type === 'COTVT' ? 'tvt' : props.mission.type.toLowerCase()
  )
  const [island, setIsland] = React.useState(props.mission.island)
  const [server, setServer] = React.useState('primary')
  const [author, setAuthor] = React.useState(null)
  const [version, setVersion] = React.useState(props.mission.version)
  const [description, setDescription] = React.useState('')

  return (
    <Row gutter={32}>
      <Col span={12}>
        <div
          className="form-fields__wrapper"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginTop: '2em'
          }}
        >
          <label htmlFor="name">Mission Name</label>
          <Input
            name="name"
            placeholder="Mission Name"
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <label htmlFor="min">Player Counts</label>
          <Input.Group compact>
            <Input
              name="min"
              placeholder="Minimum"
              maxLength={3}
              style={{ width: 100, textAlign: 'center' }}
              value={min}
              onChange={event => setMin(parseInt(event.target.value))}
            />
            <Input
              disabled
              placeholder="~"
              style={{
                width: 30,
                borderLeft: 0,
                pointerEvents: 'none',
                backgroundColor: '#fff'
              }}
            />
            <Input
              name="max"
              placeholder="Maximum"
              maxLength={3}
              style={{ width: 100, textAlign: 'center', borderLeft: 0 }}
              value={max}
              onChange={event => setMax(parseInt(event.target.value))}
            />
          </Input.Group>
          <label>Join In Progress</label>
          <Select value={jip} defaultValue={jip} onChange={value => setJIP(value)}>
            <Option value="walk">Walk - Walk to your squad</Option>
            <Option value="transport">Transport - Player provided transport to squad</Option>
            <Option value="teleport">Teleport - Teleport to your squad</Option>
            <Option value="none">No JIP</Option>
          </Select>
          <label>Respawn</label>
          <Select value={respawn} defaultValue={respawn} onChange={value => setRespawn(value)}>
            <Option value="none">No Respawn / Only One Life</Option>
            <Option value="unlimited">Unlimited Respawn</Option>
            <Option value="ticketed">Ticketed Respawn</Option>
            <Option value="wave">Wave Respawn</Option>
            <Option value="revive">Revive</Option>
            <Option value="revive-limited">Revive with Limited Lives</Option>
          </Select>
          <label>Mission Type</label>
          <Select value={type} defaultValue={type} onChange={value => setType(value)}>
            <Option value="co">COOP</Option>
            <Option value="tvt">TVT / COTVT</Option>
            <Option value="lol">LOL</Option>
            <Option value="other">Other</Option>
          </Select>
          <label>Island</label>
          <Select value={island} defaultValue={island} onChange={value => setIsland(value)}>
            <Option value="Atlis">Atlis</Option>
            <Option value="Stratis">Stratis</Option>
            <Option value="Aliabad Region">Aliabad Region</Option>
            <Option value="Chernarus">Chernarus</Option>
            <Option value="Chernarus Winter">Chernarus Winter</Option>
            <Option value="Chernarus Summer">Chernarus Summer</Option>
            <Option value="Desert">Desert</Option>
            <Option value="PR Fata">PR Fata</Option>
            <Option value="Podagorsk">Podagorsk</Option>
            <Option value="Proving Grounds">Proving Grounds</Option>
            <Option value="Shapur">Shapur</Option>
            <Option value="Rosche">Rosche</Option>
            <Option value="Takistan">Takistan</Option>
            <Option value="Utes">Utes</Option>
            <Option value="Zargabad">Zargabad</Option>
            <Option value="Porto">Porto</Option>
            <Option value="Virutal Reality">Virutal Reality</Option>
            <Option value="Suomi Finland">Suomi Finland</Option>
            <Option value="Kunduz Afghanistan">Kunduz Afghanistan</Option>
            <Option value="Diyala Iraq">Diyala Iraq</Option>
            <Option value="Tanoa">Tanoa</Option>
            <Option value="Kidal">Kidal</Option>
            <Option value="Sahrani">Sahrani</Option>
            <Option value="Ruha">Ruha</Option>
            <Option value="Prei Khmaoch Luong">Prei Khmaoch Luong</Option>
          </Select>
          <label>Target Server</label>
          <Select value={server} defaultValue={server} onChange={value => setServer(value)}>
            <Option value="primary">Primary</Option>
            <Option value="alternate">Alternate</Option>
            <Option value="training">Training</Option>
            <Option value="none">Not on a server</Option>
          </Select>
          <label htmlFor="version">Version Number</label>
          <Input
            name="version"
            placeholder="Version Number"
            value={version}
            onChange={event => setVersion(event.target.value)}
          />
          <label htmlFor="author">Author</label>
          <Input name="author" value={author} onChange={event => setAuthor(event.target.value)} />
          <label htmlFor="description">Mission Description</label>
          <Input.TextArea
            name="description"
            placeholder="Give a brief description of your mission here..."
            value={description}
            autosize={{ minRows: 2 }}
            onChange={event => setDescription(event.target.value)}
          />
        </div>
      </Col>
      <Col span={12}>
        <div className="form-fields__wrapper">Test</div>
      </Col>
    </Row>
  )
}

export default Details
