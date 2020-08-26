
$( document ).ready(function() {


  $('#thumbnail-grid').load("thumbnail-index.html");
  // hover behavior
  var default_state = true;

    $("#cell-right").hover(
      function() {
        default_state = false;
        $("#col-left").addClass("col-shrink");
        $("#col-right").addClass("col-grow");
        setTimeout(function() {
          $(".thumbnail").addClass("thumbnail-shrink");
        }, 500);

      }, function() {
        $("#col-left").removeClass("col-shrink");
        $("#col-right").removeClass("col-grow");
        setTimeout(function() {
          $(".thumbnail").removeClass("thumbnail-shrink");
        }, 250);
      }
    );

    $("#cell-left").hover(
      function() {
        default_state = false;
        $("#col-right").addClass("col-shrink");
        $("#col-left").addClass("col-grow");
        setTimeout(function() {
          $(".thumbnail").addClass("thumbnail-grow");
        }, 500);

      },function() {
        $("#col-right").removeClass("col-shrink");
        $("#col-left").removeClass("col-grow");
        setTimeout(function() {
          $(".thumbnail").removeClass("thumbnail-grow");
        }, 250);
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
