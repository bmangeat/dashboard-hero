import {h} from 'hyperapp'
import Biography from '../info/IdentityBio'

export default (props) =>
    h('section',{},[
        h('div', {class: 'component-title'}, ['Identité']),
        Biography(props)
    ])
