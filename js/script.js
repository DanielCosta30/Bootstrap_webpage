/* Primeiras instruções do Jquery */
$(document).ready(function() {

    // Progress bar 
    var containerA = document.getElementById("circleA");

    var cicleA = new ProgressBar.cicle(containerA, {
        color: '#64DAF9',
        stroke: 8,
        duration: 1400,
        from: { color: '#AAA'},
        to: { color: '#65DAF9'},

        

    });


});
