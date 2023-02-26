import React from 'react'
import Todo from '../../models/Todo'
import classes from './TodosItem.module.css'

const TodosItem: React.FC<{ Todo: Todo, onRemove(id: string): void }> = (props) => {
  const onRemoveHandler = () => {
    props.onRemove(props.Todo.id)
  }

  return <li
    className={classes.item}
    key={props.Todo.id}
    onClick={onRemoveHandler}>
    {props.Todo.text}
  </li>
}
export default TodosItem;