import { h } from 'hyperapp'

export default (props) =>
    <div class="identity-essential col-md-6 col-sm-6 col-xs-6">
        <h4>{props.name}</h4>
        <div class="identity-sub-essential">
            <p>{props.fullName}</p>
            <p>{props.aliases}</p>
        </div>
    </div>

