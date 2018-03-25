
$(function() {
  
  var fetchData = function(){
  $.getJSON("/dev.json", function(data) {
    console.log(data);
    console.log( "success" );
  })
  .done(function() {
    console.log( "second success" );
  })
  .fail(function(error) {
    console.log( "error" );
    console.log(error);
  })
  .always(function() {
    console.log( "complete" );
  });
  } 
  var data= fetchData(); 
  $("#lefttButton").click(handleButtonClick);
  $("#middleButton").click(handleButtonClick);
  $("#rightButton").click(handleButtonClick);
  
  function setUpPage(){

  };
  function handleButtonClick(){
    var screenId;
    screenId = $(this).data("next-screen");
    console.log(screenId)
  };
})