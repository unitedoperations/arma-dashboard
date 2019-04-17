import * as React from 'react'
import { PageHeader, Steps, Icon, Card } from 'antd'
import FileUploader from './FileUploader'
import Details from './Details'

const { Step } = Steps

const MissionSubmit: React.FunctionComponent = (): JSX.Element => {
  const [current, setCurrent] = React.useState(0)
  const [missionInfo, setMissionInfo] = React.useState(null)

  const stepList = [
    {
      title: 'Upload File',
      icon: 'cloud-upload'
    },
    {
      title: 'Details',
      icon: 'tags'
    },
    {
      title: 'Verfiy',
      icon: 'lock'
    }
  ]

  return (
    <div>
      <PageHeader title="New Mission" subTitle="Create a mission entry for review and upload" />
      <br />
      <Card>
        <Steps current={current}>
          {stepList.map((s, i) => (
            <Step
              key={i}
              title={s.title}
              icon={
                <Icon
                  type={current > i ? 'check-circle' : s.icon}
                  theme={current > i ? 'filled' : 'outlined'}
                />
              }
            />
          ))}
        </Steps>
        {current === 0 && (
          <FileUploader
            onComplete={data => {
              setMissionInfo(data)
              setCurrent(1)
            }}
          />
        )}
        {current === 1 && (
          <Details
            mission={missionInfo}
            onComplete={_info => {
              setCurrent(2)
            }}
          />
        )}
      </Card>
    </div>
  )
}

export default MissionSubmit
