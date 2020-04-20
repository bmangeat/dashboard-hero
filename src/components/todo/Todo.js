import {h} from 'hyperapp'
import TodoList from '../todo/TodoList'
import TodoItemInput from '../todo/TodoItemInput'

export default (props) =>
    h('div', { class: 'comp-todo' }, [
        h('div', { class: 'comp-header'}, ["Liste de tâches"]),
        TodoList({
            items: props.items,
            onToggleDone: props.onToggleDone,
            onDelete: props.onDelete
        }),
        TodoItemInput({
            text: props.text,
            onInputChange: props.onInputChange,
            onAdd: props.onAdd
        })
    ])