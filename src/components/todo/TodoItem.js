import { h } from 'hyperapp'

export default (props) =>
    <div class="todo-item">
        <input type= "checkbox" checked= {props.done} onchange= {props.onToggleDone} id={'checkbox'+props.id}></input>
        <label for={'checkbox'+props.id} style={(props.done ? 'background-color:' + props.color : 'border: 1px solid #fff')}></label>
        <p null>{props.text}</p>
        <input type= "button" onclick= {props.onDelete}></input>
    </div>