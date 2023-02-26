
Hooks básicos

what are hooks:
>  a feature introduced in React version 16.8 that allow developers to use state and other React features without writing a class component. Hooks are functions that allow developers to use React features such as state, context, and lifecycle methods within functional components.

### There are several built-in hooks in React, including:

- useState: Allows functional components to have state.
```
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable called "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

```
> We declare a new state variable called "count" and initialize it to 0 using useState(0). We also declare a function called setCount that allows us to update the value of "count".
>
> We then use the count variable within our JSX to display the current value of the state variable. When the button is clicked, we call the setCount function to update the value of count by adding 1 to it. This triggers a re-render of the component, causing the updated count value to be displayed on the page.
------------------------------------
- useEffect: Allows functional components to handle side effects such as fetching data or updating the DOM.
```
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // The effect function will be called after every re-render of the component
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

```
> We pass a function to useEffect that sets the title of the document to the current count value.
>
> The useEffect hook is triggered after every re-render of the component, which allows us to perform side effects such as fetching data or updating the DOM. In this case, we use it to update the title of the document based on the current count value.
>
> Note that we're not passing any dependencies to useEffect, which means it will be called after every re-render of the component regardless of whether count has changed. If we wanted to limit the effect to only run when count changes, we would pass [count] as the second argument to useEffect.

------------------------------------
- useContext: Allows functional components to access data from a context provider.
( seccion 17 EXPLAINED)
```
  import React, { useContext } from 'react';

// Create a context to share data between components
const MyContext = React.createContext();

// A component that provides data to its children via context
function Parent() {
  const data = { name: 'John', age: 30 };

  return (
    <MyContext.Provider value={data}>
      <Child />
    </MyContext.Provider>
  );
}

or we can provide a provider obj that interacts as hoc ( higher object component)

// A component that provides data to its children via context
function Parent() {
  const data = { name: 'John', age: 30 };

 const MyContextContext = {
    items: cartState.items,                   // data
    totalAmount: cartState.totalAmount,       // data
    addItem: addItemToCartHandler,            // functions
    removeItem: removeItemFromCartHandler,    // functions
    clearCart: clearCartHandler               // functions
  };

  return (
    <MyContext.Provider value={MyContextContext}>
      {props.children}
    </MyContext.Provider>
  );
}
```

```
// A component that consumes data from its parent via context
import { useContext } from 'react';


function Child() {
  const data = useContext(MyContext);

  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
    </div>
  );
}

```
------------------------------------
- useReducer: Allows for more complex state management than useState.

```
import React, { useReducer } from 'react';

// Define a reducer function that takes a state and an action, and returns a new state
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Example() {
  // Call useReducer with the reducer function and an initial state object
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        Click me to increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        Click me to decrement
      </button>
    </div>
  );
}

```
 useReducer returns a dispatcher and a state. this is bc, we dont have the ability to update the state, the only way to update this state is from the dispatch actions. as "reducer" we need to pass the actions and the proper implementation of it, aswell as the initial state.

> In this example, we import the useReducer hook from the react library and call it within our functional component. We define a reducer function that takes a state and an action, and returns a new state object based on the action type.
>
> We then call useReducer with the reducer function and an initial state object containing a count property set to 0. useReducer returns an array with the current state object and a dispatch function that we can use to update the state by dispatching actions.
>
> We use the state.count value within our JSX to display the current count value. When the increment or decrement button is clicked, we call dispatch with an action object containing a type property of either 'increment' or 'decrement'. This triggers the reducer function to update the state based on the action type, which causes a re-render of the component and updates the count value displayed on the page.
------------------------------------


- useRef: Allows functional components to reference DOM elements or values across renders.


```
import React, { useRef } from 'react';

function Example() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus input</button>
    </div>
  );
}

```

> In this example, we import the useRef hook from the react library and call it within our functional component. We initialize a inputRef variable to the value returned by useRef(null). This creates a ref object that we can attach to an HTML element using the ref attribute.
>
> We attach the inputRef object to an input element using the ref attribute, which allows us to access the input element's properties and methods. We define a handleClick function that uses the inputRef.current.focus() method to set focus to the input element when the button is clicked.
> 
> Note that we're passing null as the initial value to useRef, which means the inputRef.current property will initially be null. However, once the component has mounted and the input element has been rendered, the inputRef.current property will contain a reference to the input element. This allows us to access the input element's properties and methods even though they are not part of the component's state.

------------------------------------

react-router-dom:

- useEffect
useContext
useSubmit()=> Hook to submit 
The imperative version of <Form> that let's you, the programmer, submit a form instead of the user.

- useSearchParams:
  usamos este hook para obtener desde los query params los props que vamos a utilizar 
  para obtener el value de una prop,  utilizamos el hook :
    const [searchParams, setSearchParams] = useSearchParams()
  setSearchParams=> Funcion para setear una property en el query param
  searchParams=> prop para obtener el parametro de la siguiente forma:  searchParams.get('mode') 
    http://localhost:3000/auth?mode=signup de aca vendria a ser  searchParams.get('mode')  = signup