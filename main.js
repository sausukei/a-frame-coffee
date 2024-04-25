// Controller
AFRAME.registerComponent("vr-controller", {
	dependencies: ["raycaster"],// Important
	init: function(){
		console.log("vr-controller");
		const text = document.getElementById("my_text");
		text.setAttribute("value", "Controller is ready!?");
	
		this.el.addEventListener("gripdown", function(e) {
			text.setAttribute("value", "GripDown!!");
		});
		this.el.addEventListener("gripup", function(e) {
			text.setAttribute("value", "GripUp!!");
		});
		
		this.el.addEventListener("triggerdown", function(e) {
			text.setAttribute("value", "TriggerDown!!");
		});
		this.el.addEventListener("triggerup", function(e) {
			text.setAttribute("value", "TriggerUp!!");
		});
		
		this.el.addEventListener("raycaster-intersection", function(e) {
			text.setAttribute("value", "Intersection:captured");
		});
		
		this.el.addEventListener("raycaster-intersection-cleared", function(e) {
			text.setAttribute("value", "Intersection:cleared");
		});
	}
});

AFRAME.registerComponent('collide', {
    init: function() {
      this.interactiveAnimations();
      this.el.addEventListener('click', this.onClick);
    },
    interactiveAnimations: function() {
      this.el.setAttribute('animation__mouseenter', 'property: scale; to: 1.5 1.5 1.5; startEvents: mouseenter; dur: 200');
      this.el.setAttribute('animation__mouseleave', 'property: scale; to: 1 1 1; startEvents: mouseleave; dur: 200');
      this.el.setAttribute('animation__click', 'property: scale; to: 3 3 3; startEvents: click; dur:200');
    },
    onClick: function(e) {
      var createEffect = function(point, particleAge) {
        var pointStr = point.x + ' ' + point.y + ' ' + point.z;
        var effect = document.createElement('a-entity');
        let color1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
        console.log(color1)
        // let color2 = "rgb(" + (~~(256 * Math.random())) + ", " + (~~(256 * Math.random())) + ", " + (~~(256 * Math.random())) + ")" ;
        effect.setAttribute('position', pointStr);
        effect.setAttribute('raycaster', 'enabled: false');
        effect.setAttribute('particle-system', 'color: '+color1+';maxParticleCount: 100;maxAge: ' + (particleAge / 1000) + ';velocityValue:0 -1 0; accelerationValue: 0 0.5 0; duration: 1;');
        return effect;
      };
      var point = e.detail.intersection.point;
      var particleAge = 1500;
      var effect = createEffect(point, particleAge);
      var scene = document.querySelector('a-scene');
      scene.appendChild(effect);
      setTimeout(function() {
        scene.removeChild(effect);
      }, particleAge);
    }
  });