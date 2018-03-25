
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
  $("#leftButton").click(handleButtonClick);
  $("#middleButton").click(handleButtonClick);
  $("#rightButton").click(handleButtonClick);
  
    function handleButtonClick(){
    var screenId;
    screenId = $(this).data("next-screen");
    setUpPage(screenId)
  };
  
  function setUpPage(id){
    
  };
  
})