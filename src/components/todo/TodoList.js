import { h } from 'hyperapp'
import TodoItem from './TodoItem'

export default (props) =>
    h('div', { class: 'todo-list'}, [
        props.items
            //.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
            .map(item => h('div', {}, [
                TodoItem({
                    done: item.done,
                    text: item.text,
                    createdAt: item.createdAt,
                    onToggleDone: props.onToggleDone(item.id),
                    onDelete: props.onDelete(item.id),
                }),
                h('hr', {}),
            ])
        )
    ])