import React from 'react'
import Todo from '../../models/Todo'

const TodosItem: React.FC<Todo> = (props) => {
  return <li key={props.id}>{props.text}</li>
}
export default TodosItem;