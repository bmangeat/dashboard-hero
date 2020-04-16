import {h} from 'hyperapp'
import Biography from '../info/IdentityBio'
import Carac from '../info/IdentityCarac'
import Avatar from '../info/IdentityAvatar'
import Essential from '../info/IdentityEssential'

export default (props) =>
    h('section',{},[
        h('div', {class: 'component-title'}, ['Identité']),
        h('div', {class: 'row'}, [
            //Avatar(props),
            Essential(props)
        ]),
        Carac(props),
        Biography(props)
    ])
