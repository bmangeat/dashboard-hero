import {h} from 'hyperapp'
import Biography from '../info/IdentityBio'
import Carac from '../info/IdentityCarac'
import Avatar from '../info/IdentityAvatar'
import Essential from '../info/IdentityEssential'

export default (props) =>
    h('section', {class: 'comp-identity col-md-4 col-sm-12 col-xd-12'}, [
        h('div', {class: 'comp-header'}, ['Identité']),
        h('div', {class: 'identity-body'}, [

            h('div', {class: 'identity-main row middle-md'}, [
                Avatar(props),
                Essential(props)
            ]),
            Carac(props),
            Biography(props)
        ])
    ])
