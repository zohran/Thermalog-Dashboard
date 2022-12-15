import React from 'react';
import Utils from 'Utils'; 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { red } from '@mui/material/colors';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {

        responsive: true,
        legend: {
            position: 'bottom',
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    }
                }],
            yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: true,
                        steps: 10,
                        stepValue: 5,
                        max: 100
                    }
                }]
        },
};


export const data = {
 labels:['January','February','March','April','May','June','July','August','September','October','November','December'],
  datasets: [
    {
        label: 'My First Dataset',
        data: [1,6,3,8,4,4,66,7],
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4,
      

    },
  ],
};

const areaChart=()=> {
  return <Line options={options} data={data} />;
}

export default areaChart;
