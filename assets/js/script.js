const barChart = document.getElementById('barChart');

new Chart(barChart, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],

    datasets: [{
      label: 'Home' ,
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        responsive: true,
      }
    }
  }
});

const lineChart = document.getElementById('lineChart');

new Chart(lineChart, {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],

    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        responsive: true,
      }
    }
  }
});

let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});


// Today Customer Bill list
$(document).ready(function(){
  $("#customer-bill-list").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#customer-bill-list-data tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

// Today Expence Total list
$(document).ready(function(){
  $("#today-expence-list").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#today-expence-total-data tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

// Today Bill Recived list
$(document).ready(function(){
  $("#today-bill-recived").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#today-bill-recived-data tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});