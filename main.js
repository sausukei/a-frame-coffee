AFRAME.registerComponent('grababble-check', {
  dependencies: ['raycaster'],

  init: function () {
    this.el.addEventListener('raycaster-intersection', function () {
      
      
    });
  }
});

