import {h} from 'hyperapp'
import TodoList from '../todo/TodoList'
import TodoItemInput from '../todo/TodoItemInput'
import TodoProgressBar from './TodoProgressBar'

export default (props) => 
    h('div', { class: 'comp comp-2 comp-todo col-md-4 col-sm-12 col-xd-12' }, [
        h('div', { class: 'comp-header'}, ["Liste des tâches"]),
        h('div', { class: 'comp-body' }, [
            h('div', { class: 'todo-top'}, [
                TodoList({
                    items: props.items,
                    onToggleDone: props.onToggleDone,
                    onDelete: props.onDelete,
                    color: props.color
                }),
                
                h('div', { class: 'todo-progressbar'}, [
                    TodoProgressBar({
                        color: props.color,
                        ratioDone: props.ratioDone,
                        animation: props.animation
                    })
                ]),
            ]),                
            TodoItemInput({
                text: props.text,
                onInputChange: props.onInputChange,
                onAdd: props.onAdd,
            }),
        ])
        
        
        
    ])