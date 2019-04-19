import * as React from 'react'
import { Upload, Icon, notification } from 'antd'
import fetch from 'node-fetch'

interface FileUploaderProps {
  onComplete: (file: string) => void
}

const FileUploader: React.FunctionComponent<FileUploaderProps> = (props): JSX.Element => {
  const handleChange = async (info: any) => {
    const { status } = info.file
    if (status === 'done' && info.file.name) {
      notification.success({
        message: info.file.name,
        description: 'Mission file was successfully uploaded!'
      })

      const res = await fetch(`/api/mission/details?name=${encodeURIComponent(info.file.name)}`)
      const resJson = await res.json()
      props.onComplete(resJson)
    } else if (status === 'error') {
      notification.error({
        message: info.file.name,
        description: 'An error occurred while uploading your mission file.'
      })
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2em' }}>
      <Upload.Dragger
        style={{ padding: '1em' }}
        multiple={false}
        onChange={handleChange}
        action="/api/mission"
      >
        <p className="ant-upload-drag-icon">
          <Icon type="file-protect" />
        </p>
        <p className="ant-upload-text">Click or drag mission file to this area to upload</p>
        <p className="ant-upload-hint">
          Details about the mission will be auto-populated based on the mission file name.
        </p>
      </Upload.Dragger>
    </div>
  )
}

export default FileUploader
