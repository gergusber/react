import React from 'react'
import Todo from '../../models/Todo'
import classes from './TodosItem.module.css'

const TodosItem: React.FC<Todo> = (props) => {
  return <li className={classes.item} key={props.id}>{props.text}</li>
}
export default TodosItem;