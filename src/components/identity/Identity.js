import { h } from 'hyperapp'

import Avatar from './IdentityAvatar'
import Essential from './IdentityEssential'
import Carac from './IdentityCarac'
import Biography from './IdentityBio'

export default (props) =>
    <section class='comp-identity col-md-4 col-sm-12 col-xd-12'>
        <div class='comp-header'>Identité</div>
        <div class='identity-body'>
            <div class='identity-main row middle-md'>
                {Avatar({
                    gender: props.hero.appearance.gender,
                    eye: props.hero.appearance.eyeColor,
                    hair: props.hero.appearance.hairColor
                })}
                {Essential({
                    name: props.hero.name,
                    fullName: props.hero.biography.fullName,
                    aliases: props.hero.biography.aliases
                })}
            </div>
            {Carac({
                appearance: props.hero.appearance
            })}
            {Biography({
                work: props.hero.work,
                connections: props.hero.connections,
                birth: props.hero.biography.placeOfBirth
            })}
        </div>
    </section>