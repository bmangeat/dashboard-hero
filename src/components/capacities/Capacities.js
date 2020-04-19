import { h } from 'hyperapp'

export default (props) =>
    <section class="comp comp-2 comp-capacities col-md-4 col-sm-12 col-xd-12">
        <div class="comp-header">Capacitées</div>
        <div class="comp-body">
            <canvas oncreate={props.createCapacitiesChart}></canvas>
        </div>
    </section>