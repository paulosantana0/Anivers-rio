document.getElementById('start').addEventListener('click', function() {
    var audio1 = document.getElementById('audio1');
    var audio2 = document.getElementById('audio2');
    var image = document.getElementById('image');
    var text = document.getElementById('text');

   
    audio1.play();
    audio2.play();
    audio1.muted = false;
    audio2.muted = false;
    audio2.playbackRate = 2.0;
    audio2.volume = 0.5;

 
    image.classList.add('show');


    text.classList.add('show');
});