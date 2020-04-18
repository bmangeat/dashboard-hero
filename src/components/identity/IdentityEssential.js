import {h} from 'hyperapp'

export default (props) =>
    h('div', {class: 'identity-essential col-md-6'}, [
        h('h4', {}, [props.name]),
        h('div', {class:'identity-sub-essential'}, [
            h('p', {}, [props.fullName]),
            h('p', {}, [props.aliases])
        ])
    ])
