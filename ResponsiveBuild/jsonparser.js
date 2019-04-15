

$(document).ready(function() {
  //start ajax request
  $.ajax({
      url: "https://trello.com/b/D1RqM2p9.json",
      //force to handle it as text
      dataType: "text",
      success: function(data) {

          //data downloaded so we call parseJSON function
          //and pass downloaded data
          var json = $.parseJSON(data);
          //now json variable contains data in json format
          //let's display a few items
          for (var i=0;i<json.length;++i)
          {
              $('#results').append('<div class="name">'+json[i].name+'</>');
          }
      }
  });

})
