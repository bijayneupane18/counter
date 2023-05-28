import React from 'react'

const MyButton = (props) => {
  return (
    <div>
      <button onClick={props.handler}>
        {props.children}
      </button>
    </div>
  )
}

export default MyButton
