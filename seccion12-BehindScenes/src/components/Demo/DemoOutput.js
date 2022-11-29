import React from 'react'

const DemoOutput = (props) => {
  console.log('DemoOutput Running')
  return (
    <div>{props.show ? 'this is new' : ''}</div>
  )
}

export default React.memo(DemoOutput);