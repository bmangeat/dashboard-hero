import { h } from 'hyperapp'

export default (props) =>
    <div class="header-profile col-md-offset-4 col-md-3 col-sm-offset-4 col-sm-3 full-height vertical-align">
        <p>Bienvenue, <strong style={'color:'+props.color+';'}>{props.name}</strong></p>
    </div>

