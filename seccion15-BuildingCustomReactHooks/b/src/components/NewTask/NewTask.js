import { useState, useEffect } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http'

const NewTask = (props) => {
  const { isLoading, error, sendRequest } = useHttp();
  
  const applyDataHandler = (taskText, task) => {
    const generatedId = task.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  }

  const enterTaskHandler = async (taskText) => {
    const objRequest = { 
      url: 'https://react-http-6b4a6.firebaseio.com/tasks.json',
      method: 'POST',
      body: { text: taskText },
      headers: {
        'Content-Type': 'application/json'
      }
    }   

    sendRequest(objRequest, applyDataHandler.bind(null, taskText));
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
