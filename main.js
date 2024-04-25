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
pot.addEventListener('grab-start', function(event){
  coffee = document.querySelector('pot');
  coffee.removeAttribute("animation");

});

pot.addEventListener('grab-end', function(event){
  coffee=document.querySelector('pot');
  coffee.setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 2000');
})