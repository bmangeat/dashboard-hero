import { h } from 'hyperapp'
import TodoList from '../todo/TodoList'
import TodoItemInput from '../todo/TodoItemInput'
import TodoProgressBar from './TodoProgressBar'

export default (props) =>
    <div class="comp comp-2 comp-todo">
        <div class="comp-header">Todolist</div>
        <div class="comp-body">
            <div class="todo-top">
                <TodoList
                    items= {props.items}
                    onToggleDone= {props.onToggleDone}
                    onDelete= {props.onDelete}
                    color= {props.color}
                />
                <div class="todo-progressbar">
                    <TodoProgressBar
                        color= {props.color}
                        animation= {props.animation}
                    />
                </div>
            </div>
            <TodoItemInput
                text= {props.text}
                onInputChange= {props.onInputChange}
                onAdd= {props.onAdd}
            />
        </div>
    </div>
