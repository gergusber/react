import React from 'react'


type Tipo = {
  items: string[]
}
const Todo: React.FC<Tipo> = (props) => {

  return (<ul>
    {props.items.map((item) => (<li key={item}>{item}</li>))}
  </ul>)
}
export default Todo;