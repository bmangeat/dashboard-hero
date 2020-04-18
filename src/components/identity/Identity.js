import {h} from 'hyperapp'
import Biography from './/IdentityBio'
import Carac from './/IdentityCarac'
import Avatar from './/IdentityAvatar'
import Essential from './/IdentityEssential'

export default (props) =>
    h('section', {class: 'comp-identity col-md-4 col-sm-12 col-xd-12'}, [
        h('div', {class: 'comp-header'}, ['Identité']),
        h('div', {class: 'identity-body'}, [

            h('div', {class: 'identity-main row middle-md'}, [
                Avatar({
                    gender: props.hero.appearance.gender,
                    eye: props.hero.appearance.eyeColor,
                    hair: props.hero.appearance.hairColor
                }),
                Essential({
                    name: props.hero.name,
                    fullName: props.hero.biography.fullName,
                    aliases: props.hero.biography.aliases
                })
            ]),
            Carac({
                appearance: props.hero.appearance
            }),
            Biography({
                work: props.hero.work,
                connections: props.hero.connections,
                birth: props.hero.biography.placeOfBirth
            })
        ])
    ])
