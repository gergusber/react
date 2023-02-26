import React from 'react'
import Todo from '../../models/Todo'
import TodosItem from '../TodosItem/TodosItem';
import classes from './Todos.module.css'

const Todos: React.FC<{ items: Todo[] }> = (props) => {

  return (<ul className={classes.list}>
    {props.items.map((item) => (
      <TodosItem id={item.id} text={item.text} />
    ))}
  </ul>)
}
export default Todos;