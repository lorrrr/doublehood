
$( document ).ready(function() {


  $('#thumbnail-grid').load("thumbnail-index.html");
  // hover behavior

    $("#cell-right").hover(
      function() {
        $("#col-left").toggleClass("col-shrink");
        $("#col-right").toggleClass("col-grow");
      }
    );

    $("#cell-left").hover(
      function() {
        default_state = false;
        $("#col-right").toggleClass("col-shrink");
        $("#col-left").toggleClass("col-grow");
      }
    );





  //cell height adjustment w/ secondary navigation on
  var rem = 16;
  if ($("#sec-nav").length) {
    $("#cell-right").find($(".text-wrapper")).css("height",$("#cell-right").height()-1.2*rem);
  }


  //set thumbnail height
 $(".thumbnail").css("height",($("#cell-left").height())/4.0);
 // $(".thumbnail").css("width",$("body").width()/6.0-0.01);

  });
