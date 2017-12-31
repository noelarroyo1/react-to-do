import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
     super(props);
     this.state = {
       toDos: [
         { description: 'Walk the Cat', isCompleted: true },
         { description: 'Throw the dishes away', isCompleted: false },
         { description: 'Buy new dishes', isCompleted: false }
       ],
       newToDoDescription: ''
     };
   }

   handleChange(e) {
     this.setState({ newToDoDescription: e.target.value})
   }

   handleSubmit(e) {
     e.preventDefault();
     if (!this.state.newToDoDescription) { return }
     const newToDo = { description: this.state.newToDoDescription, isCompleted: false };
     this.setState({ toDos: [...this.state.toDos, newToDo], newToDoDescription: '' });
   }

   toggleComplete(index) {
     const toDos = this.state.toDos.slice();
     const toDo = toDos [index];
     toDo.isCompleted = toDo.isCompleted ? false : true;
     this.setState({ toDos: toDos });
   }

  render() {
    return (
      <div className="App">
       <ul>
         { this.state.toDos.map( (toDo, index) =>
           <ToDo key={ index } description={ toDo.description } isCompleted={ toDo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } />
         )}
       </ul>
       <form onSubmit={ (e) => this.handleSubmit(e) }>
         <input type="text" value={ this.state.newToDoDescription } onChange={ (e) => this.handleChange(e) } />
         <input type="submit" />
       </form>
      </div>
    );
  }
}

export default App;
