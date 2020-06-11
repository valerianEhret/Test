import React from 'react';

type MessagePropsType = {
  text: string
}


export const Message = (props: MessagePropsType) => {
  return (
    <div>
      <ul>
        <li> {props.text}</li>
      </ul>
    </div>
  )
}