
//active bootstrap tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});


var $hoursWidget = '<div class="dropdown" id="hours" style="display:inline"><button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Hours<span class="caret"></span></button><ul class="dropdown-menu" aria-labelledby="dropdownMenu1"><li><a href="#">.1</a></li><li><a href="#">.2</a></li><li><a href="#">.3</a></li><li><a href="#">.4</a></li><li><a href="#">.5</a></li><li><a href="#">.6</a></li><li><a href="#">.8</a></li><li><a href="#">.9</a></li><li><a href="#">1</a></li></ul></div>';
var $okGlyph = '<span class="glyphicon glyphicon-ok" style="top: 0px; margin-right: 0px; color:#fff; border-bottom:0px;"></span>';

//add a check mark to the selected square
$( ".square" ).click(function() {
  $($okGlyph).appendTo(this);
});

//Mark tires section all-green
$('#tires-section-green').click(function(i,obj) {
  $('.square.material-green').toggleClass('glyphicon glyphicon-ok');
  console.log('green tires');
  $('#tires-panel').css('border-color','#4caf50');
  $('#tires-heading').css('background-color','#4caf50');
});

//check all green, turn panel border and panel heading green
$('#all-green').click(function() {
  $('.material-green').toggleClass("glyphicon glyphicon-ok");
  $(this).toggleClass("glyphicon glyphicon-ok");
  $('.panel').css('border-color','#4caf50');
  $('.panel-heading').css('background-color','#4caf50');
  $('#save').toggleClass('outline-btn').toggleClass('outline-btn-disabled');


  //$($okGlyph).appendTo('.material-green');

});

/*section green
$('#tires-green').click(function(){
  $('.tires-green').append($okGlyph);
  $('#tires-panel').css('border-color','#4caf50');
  $('#tires-heading').css('background-color','#4acf50');
  $('#tires-heading').css('color','#fff');
});*/

//show hours widget after red click
$('.st-red').click(function() {
  $(this).after($hoursWidget);
  //$("#red").append($hoursWidget).after("#red");
  //$( "#hours" ).css( "display", "inline" );
  //$("#red-driver-tire").after($hoursWidget);
  console.log("showed hours")
});

//save button, section not completed
$('#save').click(function(){
  $('.panel-heading').each(function(i,obj){
    console.log('panel'+ i);
    if ( !$(obj).hasClass('material-green')) {
      console.log('found incomplete');
      $('.panel').css('border-color','#fd265c');
      $('.panel-heading').css('background-color','#fd265c');
      $('html, body').animate ({scrollTop: 0},800);
      return false;
    }
  });
});
