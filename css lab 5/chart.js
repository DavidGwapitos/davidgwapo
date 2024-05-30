const sampleData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [{
    label: 'Sample Data',
    data: [100, 59, 80, 81, 56, 55, 68, 23, 10, 100, 60, 90],
    backgroundColor: 'rgb(0, 255, 0, 0.2)',
    borderColor: 'rgba(0, 124, 0)',
    borderWidth: 1
  }]
};




const ctx = document.getElementById('myChart').getContext('2d');
let currentChart;

function renderChart(type) {
  if (currentChart) {
    currentChart.destroy();
  }
  
  currentChart = new Chart(ctx, {
    type: type,
    data: sampleData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function changeChartType(type) {
  renderChart(type);
}

renderChart('bar');