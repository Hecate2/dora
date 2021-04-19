import React, { createContext, useState } from 'react'

export type MonitorContent = {
  showMessage: boolean
  message: string
  stopUpdateData: boolean
  setShowMessage: React.Dispatch<React.SetStateAction<boolean>>
  setMessage: React.Dispatch<React.SetStateAction<string>>
  setStopUpdateData: React.Dispatch<React.SetStateAction<boolean>>
}

export const MonitorContext = createContext({} as MonitorContent)

export const MonitorProvider: React.FC = ({ children }) => {
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState('')
  const [stopUpdateData, setStopUpdateData] = useState(false)

  return (
    <MonitorContext.Provider
      value={{ message, showMessage, stopUpdateData, setMessage, setShowMessage, setStopUpdateData }}
    >
      {children}
    </MonitorContext.Provider>
  )
}
