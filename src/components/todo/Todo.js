import {h} from 'hyperapp'
import TodoList from '../todo/TodoList'
import TodoItemInput from '../todo/TodoItemInput'
import TodoProgressBar from './TodoProgressBar'
import TodoProgressBarAnim from './TodoProgressBarAnim'

export default (props) => 
    h('div', { class: 'comp-todo' }, [
        h('div', { class: 'comp-header'}, ["Liste de tâches"]),
        h('div', { class: 'comp-body' }, [
            h('div', { class: 'comp-todo-top'}, [
                TodoList({
                items: props.items,
                onToggleDone: props.onToggleDone,
                onDelete: props.onDelete
                }),
                
                h('div', { class: 'slider'}, [
                    TodoProgressBar({
                        color: props.color,
                        ratio: props.ratio,
                    })
                ]),
            ]),                
            TodoItemInput({
                text: props.text,
                onInputChange: props.onInputChange,
                onAdd: props.onAdd
            }),
        ])
        
        
        
    ])
    TodoProgressBarAnim({
        // ratio: props.ratio
    })