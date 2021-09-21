<template>
  <DoughnutChart :chartData="chartData" :options="chartOptions" class="h-full w-full" />
</template>

<script setup>
import { DoughnutChart } from 'vue-chart-3';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend, Title } from 'chart.js';
Chart.register(DoughnutController, ArcElement, Tooltip, Legend, Title);

const isDark = inject('isDark')

const chartData = {
  labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
  datasets: [
    {
      data: [30, 40, 60, 70, 5],
      backgroundColor: ['#E53E3E', '#3182CE', '#38A169', '#DD6B20', '#6B46C1',],
    },
  ],
}

const chartOptions = computed(() => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'left',
        labels: {
          color: isDark.value ? 'white' : 'black',
          font: {
            size: 16,
            family: '"BlinkMacSystemFont", "ui-sans-serif", "system-ui"',
          }
        }
      },
      title: {
        display: true,
        text: 'Chart.js Example',
        font: {
          size: 16,
          family: '"BlinkMacSystemFont", "ui-sans-serif", "system-ui"',
        },
        color: isDark.value ? 'white' : 'black'
      }
    }
  }
})

</script>