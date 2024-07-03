const playI = document.getElementById("play"), pauseI = document.getElementById("pause"), song = document.getElementById("bgSong");
var x = 0;

song.play();

function songChange() {
    if (x == 0) {
        song.pause();
        playI.style.display = "flex";
        pauseI.style.display = "none";
        x++;
    } else {
        song.play();
        playI.style.display = "none";
        pauseI.style.display = "flex";
        x--;
    }
}