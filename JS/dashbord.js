$(".counter-up").counterUp({
    delay: 10,
    time: 1000
});

let dateArr = ['Oct 1','Oct 2','Oct 3','Oct 4','Oct 5','Oct 6','Oct 7','Oct 8','Oct 9','Oct 10','Oct 11'];
let orderCountArr = [7, 5, 6, 4, 6, 4,8,6,8,9,10];
let viewerCountArr = [13,12,15,14,20,17,19,16,23,33,16];

var ctx = document.getElementById('ov').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dateArr,
        datasets: [{
            label: 'Order Counts',
            data: orderCountArr,
            backgroundColor: '#007bff30',
            borderColor: '#007bff30',
            borderWidth: 1,
            tension: 0
        },
        {
            label: 'Viewer count',
            data: viewerCountArr,
            backgroundColor: '#28a74530',
            borderColor: '#28a74530',
            borderWidth: 1,
            tension: 0
        }
    ]
    },
    options: {
        scales: {
            yAxes: [
                {
                display: false,
                    ticks: {
                    beginAtZero: true,
                display: false,
                }, 

            }
        ],
            xAxes: [
                {
                display: false,
                girdline: false 
            }
        ]
        },
        legend:{
            display: true,
            position: 'top',
            labels:{
                fontColor: '#333',
            }
        }

    }
});


let orderFromPlace = [5,15,4,9,7];
let places = ["YGN","MDY","NPY","SHAN","MGW"];

let op = document.getElementById('op').getContext('2d');
let opChart = new Chart(op, {
    type: 'doughnut',
    data: {
        labels: ["YGN","MDY","NPY","SHAN","MGW"],
        datasets: [{
            label: 'Date by rate',
            data: orderFromPlace,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [
                {
                    display:false
                }
            ],
            legend:{
                display: true,
                shape:"circle",
                position: 'top',
                labels: {
                    fontColor: '#333',
                    usePointStyle:true
                }
            }
        }
    }
});
