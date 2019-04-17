import * as React from 'react'
import { Input, Select, Icon } from 'antd'

const { Option } = Select

const islandMappings: Record<string, string> = {}

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
  const [island, setIsland] = React.useState('')
  const [server, setServer] = React.useState('primary')
  const [author, setAuthor] = React.useState(null)
  const [version, setVersion] = React.useState(props.mission.version)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '2em'
      }}
    >
      <Input
        name="name"
        placeholder="Mission Name"
        value={name}
        onChange={event => setName(event.target.value)}
      />
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
      <Select value={jip} defaultValue={jip} onChange={value => setJIP(value)}>
        <Option value="walk">Walk - Walk to your squad</Option>
        <Option value="transport">Transport - Player provided transport to squad</Option>
        <Option value="teleport">Teleport - Teleport to your squad</Option>
        <Option value="none">No JIP</Option>
      </Select>
      <Select value={respawn} defaultValue={respawn} onChange={value => setRespawn(value)}>
        <Option value="none">No Respawn / Only One Life</Option>
        <Option value="unlimited">Unlimited Respawn</Option>
        <Option value="ticketed">Ticketed Respawn</Option>
        <Option value="wave">Wave Respawn</Option>
        <Option value="revive">Revive</Option>
        <Option value="revive-limited">Revive with Limited Lives</Option>
      </Select>
      <Select value={type} defaultValue={type} onChange={value => setType(value)}>
        <Option value="co">COOP</Option>
        <Option value="tvt">TVT / COTVT</Option>
        <Option value="lol">LOL</Option>
        <Option value="other">Other</Option>
      </Select>
      <Select value={island} defaultValue={island} onChange={value => setIsland(value)}>
        <Option value="" />
        <Option value="" />
        <Option value="" />
        <Option value="" />
        <Option value="" />
        <Option value="" />
        <Option value="" />
        <Option value="" />
        <Option value="" />
        <Option value="" />
        <Option value="" />
        <Option value="" />
        <Option value="" />
      </Select>
      <Select value={server} defaultValue={server} onChange={value => setServer(value)}>
        <Option value="primary">Primary</Option>
        <Option value="alternate">Alternate</Option>
        <Option value="training">Training</Option>
        <Option value="none">Not on a server</Option>
      </Select>
      <Input
        name="version"
        placeholder="Version Number"
        value={version}
        onChange={event => setVersion(event.target.value)}
      />
      <Input
        name="author"
        placeholder="Author"
        value={author}
        onChange={event => setAuthor(event.target.value)}
      />
    </div>
  )
}

export default Details
