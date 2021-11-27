/* Array */
var musicsound = [ 
new Audio('./assets/hihat.mp3'), 
new Audio('./assets/kick.mp3'), 
new Audio('./assets/snare.mp3'),
new Audio('./assets/A.mp3'), 
new Audio('./assets/C.mp3'), 
new Audio('./assets/F.mp3'), 
new Audio('./assets/G.mp3'), 
new Audio('./assets/laugh-1.mp3'), 
new Audio('./assets/laugh-2.mp3'), 
];

/*Aufgabe 7.1 */

window.addEventListener ( "load", function () {
    document.querySelector(".blue1").addEventListener("click", function (): void{ (musicsound[0]).play(); });
    document.querySelector(".blue2").addEventListener("click", function (): void{ (musicsound[1]).play(); });
    document.querySelector(".blue3").addEventListener("click", function (): void{ (musicsound[2]).play(); });
    document.querySelector(".red1").addEventListener("click", function (): void{ (musicsound[3]).play(); });
    document.querySelector(".red2").addEventListener("click", function (): void{ (musicsound[4]).play(); });
    document.querySelector(".red3").addEventListener("click", function (): void{ (musicsound[5]).play(); });
    document.querySelector(".red4").addEventListener("click", function (): void{ (musicsound[6]).play(); });
    document.querySelector(".yellow1").addEventListener("click", function (): void{ (musicsound[7]).play(); });
    document.querySelector(".yellow2").addEventListener("click", function (): void{ (musicsound[8]).play(); });
    /*Aufgabe 7.2 */
    document.querySelector(".playbutton").addEventListener("click", function(): void{ playBeat()});
})

function playBeat() {
setInterval(function() {
    (musicsound[0]).play();
}, 500);
setInterval(function() {
    (musicsound[1]).play();
}, 1000);
setInterval(function() {
    (musicsound[2]).play();
}, 1500);
}