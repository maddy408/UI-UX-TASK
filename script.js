const ctxLine = document.getElementById('lineChart');
new Chart(ctxLine, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [{
      label: 'Appointments',
      data: [12, 19, 8, 17, 14, 10],
      borderColor: '#D35400',
      backgroundColor: 'rgba(211, 84, 0, 0.2)',
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    animation: {
      duration: 2000,
      easing: 'easeOutBounce'
    }
  }
});

const ctxBar = document.getElementById('barChart');
new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Patients',
      data: [30, 45, 28, 50, 35],
      backgroundColor: '#FFA07A'
    }]
  },
  options: {
    animation: {
      duration: 1500,
      easing: 'easeOutElastic'
    }
  }
});

const ctxPie = document.getElementById('pieChart');
new Chart(ctxPie, {
  type: 'pie',
  data: {
    labels: ['Male', 'Female', 'Other'],
    datasets: [{
      label: 'Gender',
      data: [45, 50, 5],
      backgroundColor: ['#FF9A8B', '#FFD6A5', '#B5EAD7']
    }]
  },
  options: {
    animation: {
      animateRotate: true,
      duration: 1800,
      easing: 'easeInOutQuart'
    }
  }
});

function filterAppointments() {
  const input = document.getElementById("appointmentSearch");
  const filter = input.value.toLowerCase();
  const ul = document.querySelector(".appointments ul");
  const li = ul.getElementsByTagName("li");

  for (let i = 0; i < li.length; i++) {
    const txt = li[i].textContent || li[i].innerText;
    li[i].style.display = txt.toLowerCase().includes(filter) ? "" : "none";
  }
}
