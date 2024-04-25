AFRAME.registerComponent('grababble-check', {
  dependencies: ['raycaster'],

  init: function () {
    this.el.addEventListener('raycaster-intersection', function () {
      
      
    });
  }
});

// var rightHand = document.getElementById('rightHand');

// rightHand.addEventListener('', function (event) {
//   var sphere = document.getElementById('sphere');
//   sphere.setAttribute('position', event.detail.position);
// });

let pot = document.getElementById("pot");
pot.addEventListener('grabbable', function(event){
  this.animation=false;

});