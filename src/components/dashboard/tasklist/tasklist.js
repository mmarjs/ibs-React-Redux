import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    ListGroup,
    ListGroupItem
} from 'reactstrap';

class TaskList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {
                    id: 1,
                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    completed: false
                },
                {
                    id: 2,
                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    completed: false
                },
                {
                    id: 3,
                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    completed: false
                }
            ]
        }
    }

    toggleComplete = todoId => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === todoId) todo.completed = !todo.completed;
                return todo;
            })
        });
    }

    deleteTodo = todoId => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== todoId)
        });
    }

    render() {
        return (
            <Card>
                <CardBody>
                    <CardTitle>Task List</CardTitle>
                    <div className="todo-widget">
                        <ListGroup className="list-task todo-list list-group m-b-0" data-role="tasklist">
                            {this.state.todos.map(todo => (
                                <ListGroupItem className={"list-group-item todo-item border-0 " + ((todo.completed) ? 'completed' : '')} key={todo.id}>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" checked={todo.completed} id={todo.id} className="custom-control-input" data-toggle="checkbox" onClick={() => this.toggleComplete(todo.id)} />
                                        <label className="custom-control-label todo-label" htmlFor={todo.id}>
                                            <span className="todo-desc">{todo.content}</span>
                                        </label>
                                    </div>
                                    <span onClick={() => this.deleteTodo(todo.id)}>&times;</span>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </div>
                </CardBody>
            </Card>
        );
    }
}

export default TaskList;
