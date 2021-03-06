import React from 'react'
import { Widget, send, open } from 'ixo-assistant'

interface Props {
  onMessageReceive: (text: any) => void
  customComponent?: (messageData: any) => JSX.Element
}

const Assistant: React.FunctionComponent<Props> = ({ onMessageReceive, customComponent }) => {
  const onSocketEvent = {
    bot_uttered: (utter: any): void => onMessageReceive(utter),
    connect: (): void => console.log('connected'),
    disconnect: (): void => localStorage.clear(),
  }
  return (
    <Widget
      socketUrl={process.env.REACT_APP_ASSISTANT_URL}
      socketPath={'/socket.io/'}
      title="IXO Assistant"
      onSocketEvent={onSocketEvent}
      storage="session"
      embedded={true}
      hideWhenNotConnected={false}
      connectOn="open"
      customComponent={customComponent}
    />
  )
}

export const startAssistant = (intent: string): void => {
  send(`/${intent}`)
  open()
  // console.log('chatbot open')
}

export default Assistant
