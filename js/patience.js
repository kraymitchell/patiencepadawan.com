$(document).ready(function(){

  var patience = function(target) {
    var dly = 8000;
    var fade = 1000;
    target.delay(dly).fadeOut(fade,function(){
      $(this).html('Remember. Patience, you must have&nbsp;Padawan.');
    }).fadeIn(fade).delay(dly).fadeOut(fade,function(){
      $(this).html('Hrrrmm. Longer than expected, things are&nbsp;taking.');
    }).fadeIn(fade).delay(dly).fadeOut(fade,function(){
      $(this).html('As Jedi, we must remember&nbsp;patience.');
    }).fadeIn(fade).delay(dly).fadeOut(fade,function(){
      $(this).html('Patience. Consume you it will,&nbsp;Padawan.');
    }).fadeIn(fade).delay(dly).fadeOut(fade,function(){
      $(this).html('Through the Force, things you will see. In a&nbsp;moment...');
    }).fadeIn(fade).delay(dly).fadeOut(fade,function(){
      $(this).html('The key to life, patience is.');
    }).fadeIn(fade).delay(dly, patience(target));
  }
  
  patience($('#patience'));
  
});