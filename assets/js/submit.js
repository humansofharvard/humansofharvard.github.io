$(document).ready(function() {
  $("#gratitude").hide();
  $("#story").hide();
  $("input[name=form-type]").click(function()
    {
      $("#gratitude").hide();
      $("#story").hide();
  		if ( $("#form-story").is(':checked'))
      {
      	$("#story").show();
      }
      if ( $("#form-letter").is(':checked'))
      {
        $("#gratitude").show();
       }
    });
});
