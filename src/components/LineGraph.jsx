import React from 'react'
import {Line} from 'react-chartjs-2'

const LineGraph = (props) => {
    return (<>
       <div className='row container-fluid'>
       <div className='col-md-10 mx-auto mt-5'>
       <Line data={{
            labels: props.label.map(l=>l.substr(0,10)),
            datasets: [
                {
                    label: 'Covid-19 Report',
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: props.yaxis
                }
            ]
        }} />
        </div>
       </div>
    </>)
}
export default LineGraph