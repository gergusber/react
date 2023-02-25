import React from 'react'
import Todo from '../../models/Todo'
import TodosItem from '../TodosItem/TodosItem';


const Todos: React.FC<{ items: Todo[] }> = (props) => {

  return (<ul>
    {props.items.map((item) => (
      <TodosItem id={item.id} text={item.text} />
    ))}
  </ul>)
}
export default Todos;