$(function() {
  var data;
  function setData(d) {
    data = d;
  }
  function fetchData(){
    
    $.getJSON("/dev.json", function(data) {
      console.log( "success" );
      setData(data);
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
  
  fetchData(); 
   
  $("#leftButton").click(handleButtonClick);
  $("#middleButton").click(handleButtonClick);
  $("#rightButton").click(handleButtonClick);
  
  function handleButtonClick(){
    var screenId;
    screenId = $(this).data("next-screen");
    console.log(data[screenId]);
    setUpPage(data[screenId]);
  };
  
  function setUpPage(screen, id){
    var content = screen[content];
    console.log(content);
    $("#content").html(content);
  };
  
})