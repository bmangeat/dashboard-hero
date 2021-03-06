import { h } from 'hyperapp'

export default (props) =>
    <div class="identity-section">
        <h2>characteristics</h2>
        <div class="row middle-md identity-subinformation" style={'border-bottom-color:'+props.color+';'}>
            <div class="col-md-6 col-sm-6 col-xs-6 identity-section-key">Gender</div>
            <div class="col-md-6 col-sm-6 col-xs-6 identity-section-value">{props.appearance.gender}</div>
        </div>
        <div class="row middle-md identity-subinformation" style={'border-bottom-color:'+props.color+';'}>
            <div class="col-md-6 col-sm-6 col-xs-6 identity-section-key">Race</div>
            <div class="col-md-6 col-sm-6 col-xs-6 identity-section-value">{props.appearance.race}</div>
        </div>
        <div class="row middle-md identity-subinformation" style={'border-bottom-color:'+props.color+';'}>
            <div class="col-md-6 col-sm-6 col-xs-6 identity-section-key">Height</div>
            <div class="col-md-6 col-sm-6 col-xs-6 identity-section-value">{props.appearance.height}</div>
        </div>
        <div class="row middle-md identity-subinformation" style={'border-bottom-color:'+props.color+';'}>
            <div class="col-md-6 col-sm-6 col-xs-6 identity-section-key">Weight</div>
            <div class="col-md-6 col-sm-6 col-xs-6 identity-section-value">{props.appearance.weight}</div>
        </div>
    </div>


