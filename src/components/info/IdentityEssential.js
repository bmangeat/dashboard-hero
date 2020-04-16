import {h} from 'hyperapp'

export default (props) =>
    h('div', {class: 'col-md-6'},[
        h('h4', {},[props.hero.name]),
        h('p',{},[props.hero.biography.fullName]),
        h('p', {}, [props.hero.biography.aliases])
    ])
