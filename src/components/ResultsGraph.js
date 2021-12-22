import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};
export default function ResultsGraph(props) {

const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"]
if (!props.surveyData){
  return null
}

console.log(props.surveyData)




const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: props.surveyData.Results,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};


  return <Bar options={options} data={data} />;
}
