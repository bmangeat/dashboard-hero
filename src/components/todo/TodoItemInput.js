import { h } from 'hyperapp'

export default (props) =>
    h('div', { class: 'todo-itemp-input__root' }, [
        h('input', {
            type: 'text',
            placeholder: 'Add an item',
            value: props.text,
            oninput: props.onInputChange
        }),
        h('input', {
            type: 'button',
            onclick:props.onAdd,
            value: 'Add'
        })
    ])