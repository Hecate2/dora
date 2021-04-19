import React, { createContext, useState } from 'react'
import {ParsedNodes} from '../pages/monitor/Monitor'
export type MonitorContent = {
  showMessage: boolean
  message: string
  stopUpdateData: boolean
  dataList: ParsedNodes[]
  setShowMessage: React.Dispatch<React.SetStateAction<boolean>>
  setMessage: React.Dispatch<React.SetStateAction<string>>
  setStopUpdateData: React.Dispatch<React.SetStateAction<boolean>>
  setDataList: React.Dispatch<React.SetStateAction<ParsedNodes[]>>
}

export const MonitorContext = createContext({} as MonitorContent)

export const MonitorProvider: React.FC = ({ children }) => {
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState('')
  const [stopUpdateData, setStopUpdateData] = useState(false)
  const [dataList, setDataList] = useState<Array<ParsedNodes>>([])

  return (
    <MonitorContext.Provider
      value={{ message, showMessage, stopUpdateData, dataList, setMessage, setShowMessage, setStopUpdateData, setDataList }}
    >
      {children}
    </MonitorContext.Provider>
  )
}
