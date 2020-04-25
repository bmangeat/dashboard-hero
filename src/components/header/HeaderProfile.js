import { h } from 'hyperapp'

export default (props) =>
    <div class="header-profile">
        <p>Bienvenue, <strong style={'color:'+props.color+';'}>{props.name}</strong></p>
    </div>

