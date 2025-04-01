function playAudio(audioId) {
    var audio = document.getElementById(audioId);

    // Stop any currently playing audio before playing a new one
    document.querySelectorAll('audio').forEach(function(a) {
        if (a.id !== audioId) {
            a.pause();
            a.currentTime = 0;
        }
    });

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}