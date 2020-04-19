import { h } from 'hyperapp'

export default (props) =>
    <div class="identity-section">
        <h3>Caractéristiques</h3>
        <div class="row middle-md identity-subinformation">
            <div class="col-md-6 col-sm-6 col-xs-6 identity-section-key">Genre</div>
            <div class="col-md-6 col-sm-6 col-xs-6 identity-section-value">{props.appearance.gender}</div>
        </div>
        <div class="row middle-md identity-subinformation">
            <div class="col-md-6 col-sm-6 col-xs-6 identity-section-key">Race</div>
            <div class="col-md-6 col-sm-6 col-xs-6 identity-section-value">{props.appearance.race}</div>
        </div>
        <div class="row middle-md identity-subinformation">
            <div class="col-md-6 col-sm-6 col-xs-6 identity-section-key">Taille</div>
            <div class="col-md-6 col-sm-6 col-xs-6 identity-section-value">{props.appearance.height}</div>
        </div>
        <div class="row middle-md identity-subinformation">
            <div class="col-md-6 col-sm-6 col-xs-6 identity-section-key">Poids</div>
            <div class="col-md-6 col-sm-6 col-xs-6 identity-section-value">{props.appearance.weight}</div>
        </div>
    </div>


