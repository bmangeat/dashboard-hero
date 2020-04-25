import { h } from 'hyperapp'

import HeaderSelect from './HeaderSelect'
import HeaderProfile from './HeaderProfile'
import HeaderImg from './HeaderImg'
import HeaderLogo from './HeaderLogo'

export default (props) =>
    <header class="row">
        <div class="header-logoselect col-sm-8 col-xs-9">
            <HeaderLogo/>
            <HeaderSelect
                selectHero={props.selectHero}
            />
        </div>
        <div class="header-profileimg col-sm-4 col-xs-3">
            <HeaderProfile
                name={props.name}
                color={props.color}
            />
            <HeaderImg
                photo={props.photo}
            />
        </div>
    </header>

