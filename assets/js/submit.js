$(document).ready(function() {
  $("#gratitude").hide();
  $("#story").hide();
  $("#contact-info").hide();
  $("input[name=form-type]").click(function()
    {
      $("#contact-info").show();
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

  $("input[name=form-publicity]").click(function()
    {
      $("#shared-letter").hide();
      if ( $("#form-shared").is(':checked'))
      {
        $("#shared-letter").show();
      }
    });
});
