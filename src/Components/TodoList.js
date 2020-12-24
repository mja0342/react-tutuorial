import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AddTodo from "./AddTodo";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { Id: '1', Title: 'Push your code to github', Status: 'Done' },
                { Id: '2', Title: 'Email to your manager', Status: 'Pending' }
            ]
        }
    }

    addToDo = (todo) => {
        this.setState({
            todos: [...this.state.todos, todo]
        });
    };

    deleteToDo = (todo) => {
        const filteredItems = this.state.todos.filter(x => x.Id !== todo.Id);
        this.setState({
            todos: filteredItems
        });
    };

    editToDo = (x) => {
        this.setState(state => ({
            todos: state.todos.map(todo => {
                if (todo.Id === x.Id) {
                    return {
                        ...todo,
                        Status: todo.Status === "Done" ? "Pending" : "Done"
                    };
                } else {
                    return todo;
                }
            })
        }));
    };

    render() {
        return (
            <div>
                <AddTodo onAddTodo={this.addToDo}/>
                <h1>TodoList </h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(x => {
                                return(
                                    <tr key={x.Id}>
                                        <td> {x.Id} </td>
                                        <td> {x.Title} </td>
                                        <td style={{ color: x.Status === "Done"? "green" : "red" }}> {x.Status} </td>
                                        <td>
                                            <button className="btn btn-primary m-1" onClick={() => this.deleteToDo(x)}>
                                                <span>
                                                    <FontAwesomeIcon icon={"trash"}/>
                                                </span>
                                            </button>
                                            <button className="btn btn-primary m-1" onClick={() => this.editToDo(x)}>
                                                <span>
                                                    <FontAwesomeIcon icon={"edit"}/>
                                                </span>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
            </div>
        );
    }
}

export default TodoList;
