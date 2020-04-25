import { h } from 'hyperapp'

export default (props) =>
    <div class="identity-section">
        <h3>Occupations et Biographie</h3>
        <div class="row middle-md identity-subinformation" style={'border-bottom-color:'+props.color+';'}>
            <div class="col-md-6 col-sm-6 col-xs-6 identity-section-key">Base</div>
            <div class="col-md-6 col-sm-6 col-xs-6 identity-section-value">{props.work.base.replace(/,.*/, '')}</div>
        </div>
        <div class="row middle-md identity-subinformation" style={'border-bottom-color:'+props.color+';'}>
            <div class="col-md-6 col-sm-6 col-xs-6 identity-section-key">Occupation</div>
            <div class="col-md-6 col-sm-6 col-xs-6 identity-section-value">{props.work.occupation}</div>
        </div>
        <div class="row middle-md identity-subinformation" style={'border-bottom-color:'+props.color+';'}>
            <div class="col-md-6 col-sm-6 col-xs-6 identity-section-key">Group</div>
            <div class="col-md-6 col-sm-6 col-xs-6 identity-section-value">{props.connections.groupAffiliation}</div>
        </div>
        <div class="row middle-md identity-subinformation" style={'border-bottom-color:'+props.color+';'}>
            <div class="col-md-6 col-sm-6 col-xs-6 identity-section-key">Close relation</div>
            <div class="col-md-6 col-sm-6 col-xs-6 identity-section-value">{props.connections.relatives}</div>
        </div>
        <div class="row middle-md identity-subinformation" style={'border-bottom-color:'+props.color+';'}>
            <div class="col-md-6 col-sm-6 col-xs-6 identity-section-key">Place of birth</div>
            <div class="col-md-6 col-sm-6 col-xs-6 identity-section-value">{props.birth}</div>
        </div>
    </div>


