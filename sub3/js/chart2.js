
const data = {
  labels: [
    '삼성전자',
    '삼성생명보험',
    '삼성전기',
    '삼성SDI',
    '삼성물산'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [15.23, 2.92, 2.06, 0.36, 0.11],
    backgroundColor: [
      'rgb(6, 46, 130)',
      'rgb(90, 174, 255)',
      'rgb(180, 255, 255)',
      'rgb(134, 229, 127)',
      'rgb(225, 193, 158)'
    ],
    hoverOffset: 30
  }]
};
            
const config = {
  type: 'doughnut',
  data: data,
};

const myChart = new Chart(
      document.getElementById('myChart'),
      config
);

