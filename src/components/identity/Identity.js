import { h } from 'hyperapp'

import Avatar from './IdentityAvatar'
import Essential from './IdentityEssential'
import Carac from './IdentityCarac'
import Biography from './IdentityBio'

export default (props) =>
    <section class="comp comp-1 comp-identity">
        <div class="comp-header">Identité</div>
        <div class="comp-body">
            <div class="identity-main row middle-md">
                <Avatar
                    gender={props.hero.appearance.gender}
                    eye={props.hero.appearance.eyeColor}
                    hair={props.hero.appearance.hairColor}
                />
                <Essential
                    name={props.hero.name}
                    fullName={props.hero.biography.fullName}
                    aliases={props.hero.biography.aliases}
                />
            </div>
            <Carac
                appearance={props.hero.appearance}
                color={props.color}
            />
            <Biography
                work={props.hero.work}
                connections={props.hero.connections}
                birth={props.hero.biography.placeOfBirth}
                color={props.color}
            />
        </div>
    </section>