import React from 'react'

const MyParagraph = (props) => {
  console.log('MyParagraph Running')
  return (
    <div>{props.children}</div>
  )
}

export default MyParagraph;