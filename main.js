AFRAME.registerComponent('collider-check', {
  dependencies: ['raycaster'],

  init: function () {
    this.el.addEventListener('raycaster-intersection', function () {
      
      
    });
  }
});

AFRAME.registerComponent('collider-check', {
  dependencies: ['raycaster'],

  init: function () {
    this.el.addEventListener('raycaster-intersection', function () {
      this.el.setAttribute('animation__click', 'property: scale; to: 3 3 3; startEvents: click; dur:200');
    });
  }
});