import React, { Component } from "react";
import Transition from 'react-transition-group/Transition'
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBloc: false
  }

  showModal = () => {
    this.setState({ modalIsOpen: true })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>

        <button className="Button" onClick={() => {
          this.setState((prevState) => ({ showBloc: !prevState.showBloc }))
        }}>Toggle</button>
        <br />
        <br />

        {/* {this.state.showBloc ?  */}
        <Transition
          in={this.state.showBloc}
          timeout={1000}
          mountOnEnter
          unmountOnExit>
          {/*{state => <p>{state}</p>}  this transition provide a state with different states that heelps you to work on different stages of the render the component  */}
          {state =>
            <div style={{
              backgroundColor: 'red ',
              width: 100,
              height: 100,
              margin: 'auto',
              transition: 'opacity 1s ease-out',
              opacity: state === 'exited' ? 0 : 1
            }}> </div>

          }
          {/* : null} */}
        </Transition>
        <br />

        <Transition
          in={this.state.modalIsOpen}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {state => (
            <Modal show={state} closed={this.closeModal} />
          )}

        </Transition>


        {this.state.modalIsOpen ? <Backdrop show /> : null}
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
