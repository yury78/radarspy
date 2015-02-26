
videojs("example_video_xyz").ready(function(){
  var myPlayer = this;
  myPlayer.on('seeked', function(){alert("seeked triggered");});
  myPlayer.on('play', function(){
    this.pause();
    alert("answer the question first!") ;
  });
  myPlayer.on('pause', function(){alert("pause triggered") ;});
});

/*
document.getElementById("searchbutton").addEventListener("mouseover",  videoalert());
 */
