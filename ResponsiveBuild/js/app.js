
//videoWidget
var $videoWidget = '<span class="square" style="border: 1px solid black"><span class="glyphicon glyphicon-facetime-video" style="color: black; padding-left:3px"></span></span>';

//add a check mark to the selected square
$( ".square" ).click(function() {
  $(this).toggleClass('glyphicon glyphicon-ok');
});

//Mark tires section all-green
$('#tires-section-green').click(function() {
  $(this).css('border','1px solid #fff');
  console.log('added check mark');
  $('#tires-panel').toggleClass('st-panel-complete-border');
  console.log('added border');
  $('#tires-heading').toggleClass('st-panel-complete-heading');
  console.log('added panel heading green');
  $(".material-green.square.tires-green").toggleClass('glyphicon glyphicon-ok');
  console.log('added checks to green');
});

//Mark brakes section all-green
$('#brakes-section-green').click(function() {
  $(this).css('border','1px solid #fff');
  console.log('added check mark');
  $('#brakes-panel').toggleClass('st-panel-complete-border');
  console.log('added border');
  $('#brakes-heading').toggleClass('st-panel-complete-heading');
  console.log('added panel heading green');
  $(".material-green.square.brakes-green").toggleClass('glyphicon glyphicon-ok');
  console.log('added checks to green');
});

//Mark fluids section all-green
$('#fluids-section-green').click(function() {
  $(this).css('border','1px solid #fff');
  console.log('added check mark');
  $('#fluids-panel').toggleClass('st-panel-complete-border');
  console.log('added border');
  $('#fluids-heading').toggleClass('st-panel-complete-heading');
  console.log('added panel heading green');
  $(".material-green.square.fluids-green").toggleClass('glyphicon glyphicon-ok');
  console.log('added checks to green');
});

//Mark battery section all-green
$('#battery-section-green').click(function() {
  $(this).css('border','1px solid #fff');
  console.log('added check mark');
  $('#battery-panel').toggleClass('st-panel-complete-border');
  console.log('added border');
  $('#battery-heading').toggleClass('st-panel-complete-heading');
  console.log('added panel heading green');
  $(".material-green.square.battery-green").toggleClass('glyphicon glyphicon-ok');
  console.log('added checks to green');
});

//Mark systems section all-green
$('#systems-section-green').click(function() {
  $(this).css('border','1px solid #fff');
  $(this).toggleClass('glyphicon glyphicon-ok');
  console.log('added check mark');
  $('#systems-panel').toggleClass('st-panel-complete-border');
  console.log('added border');
  $('#systems-heading').toggleClass('st-panel-complete-heading');
  console.log('added panel heading green');
  $('#systems-panel').find('.material-green').toggleClass('glyphicon glyphicon-ok');
  console.log('added checks to green');
});

//check entire page green, turn panel border and panel heading green
$('#all-green').click(function() {
    $('span.square.material-green').toggleClass("glyphicon glyphicon-ok");
    console.log('added checks');
    $(this).toggleClass("glyphicon glyphicon-ok");
    console.log('added checkmark to all green');
    $('.st-panel-heading').toggleClass('st-panel-complete-heading');
    console.log('toggled heading class');
    //$('.panel').css('border-color','#4caf50');
    $('.panel').toggleClass('st-panel-complete-border');
    console.log('toggled panel border');
    //$('.panel-heading').css('background-color','#4caf50');
    $('#save').toggleClass('outline-btn').toggleClass('outline-btn-disabled');

});

//show video widget after red click
$('.st-red, .material-yellow').click(function() {
  $(this).siblings('.video-button').toggleClass('show-video');
  //$(this).siblings('.video-button').css("display","inline-flex");
  console.log("showed video widget")
});


//Validate Form
$('#validate').click(function(){
  console.log('Validating form...');

  //check Tires Section
  $('.tires-rating').children('span').each(function(){
    console.log('Checking tire row...')
    if ($(this).hasClass('glyphicon glyphicon-ok') || $(this).next().hasClass('glyphicon glyphicon-ok') || $(this).next().next().hasClass('glyphicon glyphicon-ok')) {
      console.log("found a check in " + this);
    } else {
      console.log("did not find check");
      $(this).parent().prev().toggleClass('label-incomplete');
      //$(this).parent().parent().parent().parent().parent().css('border','1px solid #fd265c');
      $('#tires').find('.st-panel-heading').css('background','#fd265c');
      $('#tires').find('.panel-body').css('border','1px solid #fd265c');
    }
  })

  //check Brakes Section
  $('.brakes-rating').children('span').each(function(){
    console.log('Checking brakes row...')
    if ($(this).hasClass('glyphicon glyphicon-ok') || $(this).next().hasClass('glyphicon glyphicon-ok') || $(this).next().next().hasClass('glyphicon glyphicon-ok')) {
      console.log("found a check in " + this);
    } else {
      console.log("did not find check");
      $(this).parent().prev().toggleClass('label-incomplete');
      $('#brakes').find('.st-panel-heading').css('background','#fd265c');
      $('#brakes').find('.panel-body').css('border','1px solid #fd265c');
    }
  })

  //check Fluids Section
  $('.fluids-rating').children('span').each(function(){
    console.log('Checking fluids row...')
    if ($(this).hasClass('glyphicon glyphicon-ok') || $(this).next().hasClass('glyphicon glyphicon-ok') || $(this).next().next().hasClass('glyphicon glyphicon-ok')) {
      console.log("found a check in " + this);
    } else {
      console.log("did not find check");
      $(this).siblings('.fluids-desc').toggleClass('label-incomplete');
      $('#fluids').find('.st-panel-heading').css('background','#fd265c');
      $('#fluids').find('.panel-body').css('border','1px solid #fd265c');
    }
  })

  //check Battery Section
  $('.battery-rating').children('span').each(function(){
    console.log('Checking battery row...')
    if ($(this).hasClass('glyphicon glyphicon-ok') || $(this).next().hasClass('glyphicon glyphicon-ok') || $(this).next().next().hasClass('glyphicon glyphicon-ok')) {
      console.log("found a check in " + this);
    } else {
      console.log("did not find check");
      $(this).siblings('.battery-desc').toggleClass('label-incomplete');
      $('#battery').find('.st-panel-heading').css('background','#fd265c');
      $('#battery').find('.panel-body').css('border','1px solid #fd265c');
    }
  })

  //Check systems
  $('.item').children('span').each(function(){
    console.log('checking system row...')
    if ($(this).hasClass('glyphicon glyphicon-ok') || $(this).next().hasClass('glyphicon glyphicon-ok') || $(this).next().next().hasClass('glyphicon glyphicon-ok')) {
      console.log('found glyph in square');
    } else {
      $(this).siblings('.systems-desc').css('background-color','#ffc107');
      $('#systems').find('.st-panel-heading').css('background','#fd265c');
      $('#systems').find('.panel-body').css('border','1px solid #fd265c');
    }
  })

})
