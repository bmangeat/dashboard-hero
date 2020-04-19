import { h } from 'hyperapp'

export default (props) =>
    <div class='col-md-1 col-sm-1  col-xs-2 full-height vertical-align'>
        <div class='img-hero full-height full-width' style={'background-image: url("' + props.photo + '");'}></div>
    </div>
