$(document).ready(function() {
  $("#gratitude").hide();
  $("#story").hide();
  $("input[name=form-type]").click(function()
    {
      $("#gratitude").hide();
      $("#story").hide();
  		if ( $("#form-story").attr('checked'))
      {
      	$("#story").show();
      }
      if ( $("#form-letter").attr('checked'))
      {
        $("#gratitude").show();
       }
    });
});
