

// var rightHand = document.getElementById('rightHand');

// rightHand.addEventListener('', function (event) {
//   var sphere = document.getElementById('sphere');
//   sphere.setAttribute('position', event.detail.position);
// });


document.addEventListener('DOMContentLoaded', function() {
  function handleGrabStart() {
    var particleSystem = document.querySelector('#particleSystem');
    particleSystem.setAttribute('visible', 'true');
    var pot = document.getElementbyId('pot');
    pot.removeAttribute("animate");
  }
  
  // 物体が離されたときのイベントを処理する関数
  function handleGrabEnd() {
    var particleSystem = document.querySelector('#particleSystem');
    particleSystem.setAttribute('visible', 'false');
    

  }
  
  // 物体が掴まれたときと離されたときのイベントを監視する
  var myObject = document.getElementById('pot');
  if (myObject !== null) {
    myObject.addEventListener('grab-start', handleGrabStart);
    myObject.addEventListener('grab-end', handleGrabEnd);
  }else {
    console.log('要素が見つかりませんでした。');
  }
  
});