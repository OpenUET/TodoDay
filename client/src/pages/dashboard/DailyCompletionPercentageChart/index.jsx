import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  //maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      onClick: (e) => e.stopPropagation()
    },
    title: {
      display: false
    }
  },
  scales: {
    x: {
      border: {
        color: 'red'
      }
    },
    y: {
      beginAtZero: true,
      max: 100,
      ticks: {
        steps: 10,
        callback: function (value, index, ticks) {
          return value + '%'
        }
      }
    }
  }
}

const labels = ['1', '2', '3', '4', '5', '6', '7']

const data = {
  labels,
  datasets: [
    {
      label: 'My First dataset',
      borderWidth: 1,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
}

export default function DailyCompletionPercentageChart() {
  return <Line options={options} data={data} />
}
