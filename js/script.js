$(document).ready(function () {		
		
	// Being really dodgy...
	$(".image-link").live({
      mouseenter:
         function()
         {
				$(this).next().hide();
         },
      mouseleave:
         function()
         {
				$(this).next().show();
         }
     }
  );
});
