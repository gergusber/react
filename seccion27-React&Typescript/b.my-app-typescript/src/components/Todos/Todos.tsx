import React from 'react'
import Todo from '../../models/Todo'
import TodosItem from '../TodosItem/TodosItem';
import classes from './Todos.module.css'

const Todos: React.FC<{ items: Todo[], onRemove(id: string): void }> = (props) => {
  const onRemoveHandler = (itemId: string) => {
    props.onRemove(itemId)
  }

  return (<ul className={classes.list}>
    {props.items.map((item) => (
      <TodosItem Todo={item} onRemove={onRemoveHandler} />
    ))}
  </ul>)
}
export default Todos;