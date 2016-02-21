$(document).ready(function() {

  $('#coin').click(function() {
    $(this).addClass('active');
    
    $('h1').fadeOut('slow');
    
    $(this).animate({
      top: "140px"
    }, 500);
    
    $('.mouth').addClass('smile');
    
    setTimeout(function() {
      $('#blush').fadeIn('slow');
    }, 2000);
    
    setTimeout(function() {
      $('#bill1').addClass('fly');
    }, 1000);
    
    setTimeout(function() {
      $('#bill2').addClass('fly');
    }, 1250);
    
    setTimeout(function() {
      $('#bill3').addClass('fly');
    }, 1500);
    
    setTimeout(function() {
      $('#bill4').addClass('fly');
    }, 1750);
    
    setTimeout(function() {
      $('#bill5').addClass('fly');
    }, 2000);
    
    setTimeout(function() {
      $('#bill6').addClass('fly');
    }, 2250);
    
  });
  
})