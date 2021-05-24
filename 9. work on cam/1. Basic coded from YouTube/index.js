console.log("hey Floyd ");


// load web cam
Webcam.set({
    width: 320,
    height: 240,
    image_format:'jpeg',
    jpeg_quality: 90
})
Webcam.attach(`#camera`);
// webcam activates here
// only for shutter sound - not working bro....
// let shutter = new Audio;
// shutter.autoplay = true;
// shutter.src = navigator.userAgent.match(/Chrome/) ? 'shutter.ogg' : 'shutter.mp3';

// further work for pic
function takepic(){

    // to play shutter sound
    // shutter.play();   // didnt workout 

    // btn and image-display function
    console.log('you have clicked button')

    Webcam.snap ( function(data_uri) {
        document.getElementById('pic').innerHTML = '<img src="'+data_uri+'"/> ';
    });
}