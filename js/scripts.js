prompt("What is your age?");
$(document).ready(function(){
  $("#oldEnough").change(function() {
    var age = parseInt($("#age").val());
    if (age >= 18) {
      $('.item01').show();
    //   $('.item02').show();
    //   $('.item03').show();
    // } else {
    //   $('.item01').hide();
    //   $('.item02').hide();
    //   $('.item03').hide();
    }
  });

});
