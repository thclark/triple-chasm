import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import React, { useEffect, useRef, useState } from 'react'
import { Chart } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
)

function createGradient(ctx, area) {
  const colorStart = '#FE6B8B'
  const colorMid = '#FF7D6F'
  const colorEnd = '#FF8E53'

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top)

  gradient.addColorStop(0, colorStart)
  gradient.addColorStop(0.5, colorMid)
  gradient.addColorStop(1, colorEnd)

  return gradient
}

export const options = {
  indexAxis: 'y',
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        padding: 34,
        font: {
          size: 14,
          family: 'Mukta, sans-serif',
        },
      },
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      ticks: {
        font: {
          size: 14,
          family: 'Mukta, sans-serif',
        },
      },
    },
  },
}

// const labels = [
//   'Market Spaces',
//   'Proposition Framing',
//   'Customer Definition',
//   'Distribution, Marketing and Sales',
//   'Technology Development and Contingent Deployment',
//   'IP Management',
//   'Product & Service Definition and Synthesis',
//   'Manufacturing and Deployment',
//   'Talent, Leadership and Culture',
//   'Funding and Investment',
//   'Strategic Positioning',
//   'Business Models',
// ]

const shortLabels = [
  'Market Spaces',
  'Proposition Framing',
  'Customer Definition',
  'Marketing and Sales',
  'Tech Development',
  'IP Management',
  'Offering Definition',
  'Manufacturing',
  'Talent & Culture',
  'Funding & Investment',
  'Strategic Positioning',
  'Business Models',
]

export const data = {
  labels: shortLabels,
  datasets: [
    {
      label: 'Cohort average',
      type: 'line',
      data: [68, 68, 54, 35, 78, 72, 68, 34, 72, 91, 80, 69],
      borderColor: '#318DAD',
      backgroundColor: '#30cfd0',
    },
    {
      label: `Where we're at`,
      type: 'bar',
      data: [94, 93, 80, 28, 93, 87, 68, 86, 80, 67, 86, 86],
      backgroundColor: '#FF7D6F',
    },
  ],
}

// TODO fetch this data from live instead of having static

const ChasmChart = ({ children, ...rest }) => {
  const ref = useRef()
  const [chartData, setChartData] = useState(data)

  // Graident has to be applied after chart creation because it needs dimensions of the plot
  useEffect(() => {
    const chart = ref.current
    if (!chart) {
      return
    }
    const chartData = {
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        backgroundColor: createGradient(chart.ctx, chart.chartArea),
      })),
    }

    setChartData(chartData)
  }, [])

  return (
    <Chart
      type="bar"
      ref={ref}
      data={chartData}
      options={options}
      width={400}
      height={400}
    />
  )
}

export default ChasmChart
