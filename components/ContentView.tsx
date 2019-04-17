import * as React from 'react'
import MissionSubmit from './Missions/Submit'

interface ContentViewProps {
  selected: string
}

const views: Record<string, React.FunctionComponent | null> = {
  1: null,
  2.1: null,
  2.2: MissionSubmit
}

const ContentView: React.FunctionComponent<ContentViewProps> = ({ selected }): JSX.Element => {
  const Component: React.FunctionComponent<any> = views[selected]

  return (
    <div style={{ margin: '1em' }}>
      <Component />
    </div>
  )
}

export default ContentView
