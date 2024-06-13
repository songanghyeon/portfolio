const data = {
  labels:  [
   '2019','2020','2021','2022',
],
  datasets: [{
    label: '매출액',
    data: [7349656, 6860318, 6622001, 5944667],
    backgroundColor: [
      'rgba(3, 78, 162, 0.8)',
    ],
  },
  {
    label: '자산총계',
    data: [13600084, 12922171, 12138596, 14491698],
    backgroundColor: [
      'rgba(3, 78, 162, 0.6)'
    ],
  },
  {
    label: '부채총계',
    data: [8351156, 9203939, 8041329, 10919761],
    backgroundColor: [
      'rgba(3, 78, 162, 0.4)'
    ],
  }
]
};
      
const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};


const myChart = new Chart(
      document.getElementById('myChart'),
      config
);

