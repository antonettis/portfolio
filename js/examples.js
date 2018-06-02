


$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
});


$(document).ready(function() {
  

animationClick('.bounceOutDown1','bounceOutDown');
animationClick('.bounceOutLeft1','bounceOutLeft');
animationClick('.bounceOutRight1','bounceOutRight');
animationClick('.bounceOutUp1','bounceOutUp');

animationClick('.fadeOut1','fadeOut');
  
animationClick('.fadeOutDown1','fadeOutDown');
animationClick('.fadeOutDownBig1','fadeOutDownBig');
animationClick('.fadeOutLeft1','fadeOutLeft');
animationClick('.fadeOutLeftBig1','fadeOutLeftBig');
animationClick('.fadeOutRight1','fadeOutRight');
animationClick('.fadeOutRightBig1','fadeOutRightBig');
animationClick('.fadeOutUp1','fadeOutUp');
animationClick('.fadeOutUpBig1','fadeOutUpBig'); 
  

        
function animationClick(element, animation){
  element = $(element);
  element.click(
    function() {
      element.addClass('animated ' + animation);
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
          element.removeClass('animated ' + animation);
      }, 700);
    }
  );
};     
        
        
});

function delay (URL) {
    setTimeout( function() { window.location = URL }, 500 );
}


/* Open when someone clicks on the span element */
function openAbout() {
    document.getElementById("About").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeAbout() {
    document.getElementById("About").style.width = "0%";
}

