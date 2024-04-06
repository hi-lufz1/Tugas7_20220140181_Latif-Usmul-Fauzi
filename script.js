document.addEventListener("DOMContentLoaded", function(){
    const video = document.getElementById("videoPlayer");
    const audio = document.getElementById("audioPlayer");
    const gambar = document.getElementById("gambar");
    const gambar1 = document.getElementById("gambar1");  

    video.addEventListener("click", function() {
        alert("Ini video klip O.O - NMIXX");
    });

    audio.addEventListener("click", function() {
        alert("ini DASH - NMIXX ");
    });

    gambar.addEventListener("click", function() {
        alert("DASH - NMIXX");
    });
    gambar1.addEventListener("click", function() {
        alert("O.O - NMIXX");
    });
});
