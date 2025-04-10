const ctx = document.getElementById('grafico-barra');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'
        ],
        datasets: [{
            label: 'Umidade Média (%)',
            data: [90, 89, 93, 87, 88, 82],
            borderWidth: 1,
            backgroundColor: 'navy'
        },
        {
            label: 'Temperatura Média (°C)',
            data: [22, 24, 27, 23, 20, 18],
            backgroundColor: 'orange',
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'x',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctz = document.getElementById('chart-line');
new Chart(ctz, {
    type: 'line',
    data: {
        labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
        ],
        datasets: [{
            label: 'Temperatura (Cº)',
            data: [30, 29, 28, 25, 22, 23],
            borderWidth: 1,
            borderColor: 'orange',
            backgroundColor: 'orange'
        },
        {
            label: 'Umidade (%)',
            data: [80, 82, 80, 85, 80, 83],
            borderWidth: 1,
            borderColor: 'navy',
            backgroundColor: 'navy'
        }
    ]
    },
    options: {
        indexAxis: 'x',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});