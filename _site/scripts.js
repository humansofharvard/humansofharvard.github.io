$(document).ready(function() {
  $("#gratitude").hide();
  $("input[name=form-type]").click(function()
    {
    		if ( $("#form-story").attr('checked'))
        	$("#gratitude").hide();
        if ( $("#form-letter").attr('checked'))
           $("#gratitude").show();
    });
});
