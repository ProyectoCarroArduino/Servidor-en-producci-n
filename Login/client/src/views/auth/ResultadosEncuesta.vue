<template>
  <div class="chart-container">
    <h2 class="title">Resultados de la Encuesta TAM</h2>

    <!-- Gráfico de barras por categoría -->
    <Bar v-if="dataReady" :data="chartData" :options="chartOptions" />

    <!-- Gráficas demográficas -->
    <div class="demographic-charts" v-if="dataReady">
      <div>
        <h3 class="subtitle">Distribución por Edad</h3>
        <Doughnut :data="edadData" />
      </div>
      <div>
        <h3 class="subtitle">Distribución por Género</h3>
        <Doughnut :data="generoData" />
      </div>
      <div>
        <h3 class="subtitle">Situación Laboral</h3>
        <Doughnut :data="empleoData" />
      </div>
    </div>

    <p v-else>Cargando datos...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Bar, Doughnut } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale);

const chartData = ref(null);
const edadData = ref(null);
const generoData = ref(null);
const empleoData = ref(null);
const dataReady = ref(false);

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Promedios por Categoría (Metodología TAM)'
    }
  },
  scales: {
    y: { beginAtZero: true, max: 5 }
  }
};

// Utilidad para convertir un objeto {clave: valor} en datos de gráfico
const buildPieData = (obj) => {
  const labels = Object.keys(obj);
  const values = Object.values(obj);
  return {
    labels,
    datasets: [{
      data: values,
      backgroundColor: [
        '#4dc9f6', '#f67019', '#f53794',
        '#537bc4', '#acc236', '#166a8f',
        '#00a950', '#58595b', '#8549ba'
      ]
    }]
  };
};

onMounted(async () => {
  try {
    const res = await fetch('https://servidor-de-produccion-oficial.onrender.com/api/encuesta/resumen');
    const data = await res.json();

    // Datos para gráfico de barras por categoría
    chartData.value = {
      labels: ['Utilidad percibida', 'Facilidad de uso', 'Actitud hacia la app', 'Intención de uso'],
      datasets: [{
        label: 'Promedio por categoría',
        data: [
          data.categorias.utilidad,
          data.categorias.facilidad,
          data.categorias.actitud,
          data.categorias.intencion
        ],
        backgroundColor: ['#4dc9f6', '#f67019', '#537bc4', '#00a950']
      }]
    };

    edadData.value = buildPieData(data.edad);
    generoData.value = buildPieData(data.genero);
    empleoData.value = buildPieData(data.empleo);

    dataReady.value = true;
  } catch (error) {
    console.error('Error al obtener los resultados:', error);
  }
});
</script>

<style scoped>
.chart-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.title {
  text-align: center;
  margin-bottom: 25px;
  font-size: 22px;
  color: #333;
}

.subtitle {
  margin: 20px 0 10px;
  text-align: center;
  font-size: 18px;
  color: #444;
}

.demographic-charts {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.demographic-charts canvas {
  max-width: 250px;
  max-height: 250px;
}
</style>
