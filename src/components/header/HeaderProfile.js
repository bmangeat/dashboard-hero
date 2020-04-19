import { h } from 'hyperapp'

export default (props) =>
    <div class='col-md-offset-4 col-md-3 col-sm-offset-4 col-sm-3 header-profile full-height vertical-align'>
        <p>Bienvenue <strong>{props.name}</strong></p>
    </div>

