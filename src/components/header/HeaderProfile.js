import { h } from 'hyperapp'

export default (props) =>
    <div class="header-profile">
        <p>Welcome, <strong style={'color:'+props.color+';'}>{props.name}</strong></p>
    </div>

