async function generateChart(labels, values) {
    var ctx = document.getElementById('lineChart');
    var lineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    labels: "data",
                    data: values,
                    fill: false,
                    borderColor: "rgb(75, 192, 192)",
                    borderWidth: 3
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                  display: false
                }
            },
            responsive: false
        }

    })
}

async function back() {
    window.location.href = "/home";
}