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
      onClick: (e) => e.stopPropagation(),
      labels: {
        font: { size: 17 }
      }
    },
    title: {
      display: false
    }
  },
  scales: {
    x: {
      border: {
        color: 'rgba(255, 151, 0, 0.8)',
        width: 0.5
      },
      ticks: {
        font: { size: 16 }
      }
    },
    y: {
      border: {
        color: 'rgba(255, 151, 0, 0.8)',
        width: 0.5
      },
      beginAtZero: true,
      max: 100,
      ticks: {
        steps: 10,
        callback: function (value, index, ticks) {
          return value + '%'
        },
        font: { size: 16 }
      }
    }
  }
}

const labels = ['1', '2', '3', '4', '5', '6', '7']

const data = {
  labels,
  datasets: [
    {
      label: 'Task Completion Rate',
      borderWidth: 4,
      borderColor: 'rgba(255, 151, 0, 1)',
      backgroundColor: 'rgba(255, 151, 0, 0.5)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
}

export default function DailyCompletionPercentageChart() {
  return <Line options={options} data={data} height={'220px'} />
}
