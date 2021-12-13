import React from 'react'
import ChartBar from './chartbar/ChartBar'
import './Chart.css'
const Chart = props => {
    const datapointValues = props.dataPoints.map(x => x.value);
    const totalMax = Math.max(...datapointValues);
    return (
        <div className='chart'>
            {props.dataPoints.map((datapoint) => {
                <ChartBar
                    key={datapoint.label}
                    value={datapoint.value}
                    max={totalMax}
                    label={datapoint.label} />;
            })}
        </div>
    )
}


export default Chart
