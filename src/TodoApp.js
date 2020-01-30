import React from 'react';
import { TodoList } from "./TodoList";


export class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
          text: '',
          priority:'',
          items: [
              {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23)},
              {text: "write TODO App", priority: 3, dueDate: new Date(2020, 1, 30)},
              { text: "Learn React", priority: 5, dueDate: new Date()}
            ]
        };
      this.handleChangeText = this.handleChangeText.bind(this);
      this.handleChangePriority = this.handleChangePriority.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>TODO</h3>
          <TodoList todoList={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label >
              Text:
            </label>
            <input
              id="new-text"
              onChange={this.handleChangeText}
              value={this.state.text}
            />
            <label >
              Priority:
            </label>
            <input
              id="new-priority"
              onChange={this.handleChangePriority}
              value={this.state.priority}
            />
            <button>
              Add the new todo 
            </button>
          </form>
        </div>
      );
    }
  
    handleChangeText(e) {
      this.setState({ text: e.target.value });
    }

    handleChangePriority(e) {
        this.setState({ priority: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length || !this.state.priority.length) {
        return;
      }
      const newItem = {
        priority: this.state.priority,  
        text: this.state.text,
        dueDate: new Date()
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: '',
        priority: ''   
      }));
    }
  }