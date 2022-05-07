

/*when about_nav is clicked */
$("#about_nav").click(function(){
  //show about, hide all others
  $("#about").fadeIn();
  $("#projects").hide();
  $("#resume").hide();
  $("#contact").hide();
});
/*when projects_nav is clicked */
$("#projects_nav").click(function(){
  $("#about").hide();
  //projects shows, all others hide
  $("#projects").fadeIn();
  $("#resume").hide();
  $("#contact").hide();
});
/*when resume_nav is clicked */
$("#resume_nav").click(function(){
  $("#about").hide();
  $("#projects").hide();
  /*show resume */
  $("#resume").fadeIn();
  $("#contact").hide();
});

//when contact nac element is clicked

$("#contact_nav").click(function(){
  //add clicked class to contact_nav  
  $(this).addClass("clicked");
 
  /*if statement, has Class, check for active classes presence*/
  if ($("#contact_nav").hasClass("clicked")) {
      /*set height of contact to 100vh fills whole screen, and display to block*/
      $("#contact").css("height", '100vh');
      //contact slides down, built in JQuery
      $("#contact").slideDown();
      $("#contactContent").css("display", "block");
 
  }

    /*what happens if active class is not there */
  else  {
      $(".searchBar").css('height', "0vh");
      $(".searchIcon").removeClass("fa-times").addClass("fa-search");
    }
});

//if close button is clicked
$(".fa-times").click(function(){ 
  //contact hide, slide Up default JQuery function
  $("#contact").slideUp();
});

//function fade runs when browser loads
function fade() {
  //fadeout content in preloader class
  $('.preloader').fadeOut("slow");
  }

  //setTimeout, before site loads, run fade function for duration 3000 seconds
  setTimeout(fade, 3000);