import { h } from 'hyperapp'

export default (props) =>
    <div class= "todo-item-input">
        <input
            type= "text"
            placeholder= "Add an item"
            value= {props.text}
            oninput= {props.onInputChange}
        ></input>
        <input
            type= "button"
            onclick={props.onAdd}
            value= "Valider"
        ></input>
    </div>