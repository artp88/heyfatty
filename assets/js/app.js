
$(function() {

  var faces;
  var container = $('#content');

 
  


  $.getJSON("assets/js/sounds.json", function(json) {
    // console.log(json); // this will show the info it in firebug 

   
    

    $.each(json, function(key, value) {
      
      var faceContainer = $("<div class='faceImage col text-center'></div>");
      var faceImage = $("<img ></img>");

      var player = $("<audio></audio>");

      var newAudio = $("<p class='new text-uppercase font-weight-bold text-center pt-3 '>new</p>");

     

      //Set image source
      $(faceImage).attr("src", value.faceSrc);

      //Set audio source
      $(player).attr("src", value.src);

      //Add image to face container
      $(faceImage).appendTo($(faceContainer));

      //Add audio element to container
      $(player).appendTo($(faceContainer));

      if(value.new == "yes") {
        $(newAudio).appendTo($(faceContainer));
      }

      //Render to content
      $(faceContainer).appendTo($(container));

     

      

      $(faceContainer).on('click', function() {
        //Pause all audio
        $('audio').each(function(){
          this.pause(); 
      });

        //Play Audio
        $(player)[0].currentTime = 0;
        $(player)[0].play();
      });
      
    });

  
  
});




});