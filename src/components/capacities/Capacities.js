import { h } from 'hyperapp'

export default (props) =>
    <section class='comp-capacities col-md-4 col-sm-12 col-xd-12'>
        <div class='comp-header'>Capacitées</div>
        <div class='capacities-body'>
            <canvas oncreate={props.createCapacitiesChart}></canvas>
        </div>
    </section>