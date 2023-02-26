import { useRef } from 'react';
import classes from './NewTodo.module.css'


const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const textTodoRef = useRef<HTMLInputElement>(null);

  const onAddHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textTodoRef.current!.value.toString();
    if (enteredText.trim().length === 0) {
      // throw new Error("");
      return;
    }

    props.onAddTodo(enteredText)
  }

  return (
    <form onSubmit={onAddHandler} className={classes.form}>
      <label htmlFor='text'>Todo Text</label>
      <input type='text' id='text' ref={textTodoRef} />

      <button> Add Todo</button>
    </form>
  )
}
export default NewTodo;