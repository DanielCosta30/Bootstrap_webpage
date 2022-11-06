$( document ).ready(function() {

  // Progress bar
  var containerA = document.getElementById("circleA");

  var circleA = new ProgressBar.Circle(containerA, {

    color: '#65DAF9',
    strokeWidth: 8,
    duration: 1400,
    from: { color: '#AAA'},
    to: { color: '#65DAF9'},

    // Gerando a Animação

    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);

      var value = Math.round(circle.value() * 60);
      circle.setText(value);

    }

  });

  circleA.animate(1.0);

});