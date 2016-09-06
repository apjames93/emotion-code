(function(){

  // ;(function(){
  //     function userMedia(){
  //         return navigator.getUserMedia = navigator.getUserMedia ||
  //         navigator.webkitGetUserMedia ||
  //         navigator.mozGetUserMedia ||
  //         navigator.msGetUserMedia || null;
  //
  //     }
  //
  //     // Now we can use it
  //     if( userMedia() ){
  //         var videoPlaying = false;
  //         var constraints = {
  //             video: true,
  //             audio:false
  //         };
  //         var video = document.getElementById('v');
  //
  //         var media = navigator.getUserMedia(constraints, function(stream){
  //
  //             // URL Object is different in WebKit
  //             var url = window.URL || window.webkitURL;
  //
  //             // create the url and set the source of the video element
  //             video.src = url ? url.createObjectURL(stream) : stream;
  //
  //             // Start the video
  //             video.play();
  //             videoPlaying  = true;
  //         }, function(error){
  //             console.log("ERROR");
  //             console.log(error);
  //         });
  //
  //         // Listen for user click on the "take a photo" button
  //         document.getElementById('take').addEventListener('click', function(){
  //             if (videoPlaying){
  //                 var canvas = document.getElementById('canvas');
  //                 canvas.width = video.videoWidth;
  //                 canvas.height = video.videoHeight;
  //                 canvas.getContext('2d').drawImage(video, 0, 0);
  //                 var data = canvas.toDataURL('image/webp');
  //                 document.getElementById('photo').setAttribute('src', data);
  //             }
  //         }, false);
  //
  //     } else {
  //         console.log("KO");
  //     }
  // })();
  //
  //

  // helper functions

  /**
   * Provides requestAnimationFrame in a cross browser way.
   */
  window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
           window.webkitRequestAnimationFrame ||
           window.mozRequestAnimationFrame ||
           window.oRequestAnimationFrame ||
           window.msRequestAnimationFrame ||
           function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
             return window.setTimeout(callback, 1000/60);
           };
  })();

  /**
   * Provides cancelRequestAnimationFrame in a cross browser way.
   */
  window.cancelRequestAnimFrame = (function() {
    return window.cancelCancelRequestAnimationFrame ||
           window.webkitCancelRequestAnimationFrame ||
           window.mozCancelRequestAnimationFrame ||
           window.oCancelRequestAnimationFrame ||
           window.msCancelRequestAnimationFrame ||
           window.clearTimeout;
  })();

  // video support utility functions
  function supports_video() {
    return !!document.createElement('video').canPlayType;
  }

  function supports_h264_baseline_video() {
    if (!supports_video()) { return false; }
    var v = document.createElement("video");
    return v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
  }

  function supports_ogg_theora_video() {
    if (!supports_video()) { return false; }
    var v = document.createElement("video");
    return v.canPlayType('video/ogg; codecs="theora, vorbis"');
  }


})();
