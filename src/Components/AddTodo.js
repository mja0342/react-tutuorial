import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Id: "",
            Title: "",
            Status: "Pending"
        };
    }

    handleIdChange = (event) => {
        this.setState({
            Id: event.target.value
        })
    }

    handleTitleChange = (event) => {
        this.setState({
            Title: event.target.value
        })
    }

    handleStatusChange = (event) => {
        this.setState({
            Status: event.target.value
        })
    }

    handleToDoSubmit = (event) => {
        event.preventDefault();
        this.props.onAddTodo({
            Id: this.state.Id,
            Title: this.state.Title,
            Status: this.state.Status
        });
        this.setState({
            Id: "",
            Title: "",
            Status: "Pending"
        })
    }

    render() {
        return(
            <div>
                <h3>Add ToDo</h3>

                <form onSubmit={this.handleToDoSubmit}>
                    <div className='form-group'>
                        <input
                            value={this.state.Id}
                            className="form-control"
                            placeholder="Enter Id"
                            onChange={this.handleIdChange}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            value={this.state.Title}
                            className="form-control"
                            placeholder="Enter Title"
                            onChange={this.handleTitleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <select
                            value={this.state.Status}
                            className="form-control"
                            onChange={this.handleStatusChange}>
                            <option value="Done">Done</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </div>
                    <button type="submit" className="form-control btn btn-primary">Add Todo</button>
                </form>
            </div>
        );
    }
}

export default AddTodo;