$(function() {
  var data;
  function setData(d) {
    data = d;
  }
  function fetchData(){
    
    $.getJSON("/data.json", function(data) {
      console.log( "success" );
      setData(data);
      setUpPage(data[0]);
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
    setUpPage(data[screenId]);
  };
  
  function setUpPage(screen){
    var content = screen.content;
    $("#content").html(content);
    $("body").css("background-color", screen.background); 
    
    $("#leftButton").data("next-screen", screen.options.leftbutton.link_id);
    $("#leftButton").text(screen.options.leftbutton.text);
    
    if(screen.options.middlebutton){
      $("#middleButton").data("next-screen", screen.options.middlebutton.link_id);
      $("#middleButton").text(screen.options.middlebutton.text);
    }
    if(screen.options.rightbutton){    
        $("#rightButton").data("next-screen", screen.options.rightbutton.link_id);
        $("#rightButton").text(screen.options.rightbutton.text);
    }
  };
  
})