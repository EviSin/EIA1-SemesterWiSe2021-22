namespace Aufgabe_8 {

/* Alle Buttons */

window.addEventListener ( "load", function () {
        document.querySelector(".blue1").addEventListener("click", function (): void { playSimple(musicsound[0]); });
        document.querySelector(".blue2").addEventListener("click", function (): void { playSimple(musicsound[1]); });
        document.querySelector(".blue3").addEventListener("click", function (): void { playSimple(musicsound[2]); });
        document.querySelector(".red1").addEventListener("click", function (): void { playSimple(musicsound[3]); });
        document.querySelector(".red2").addEventListener("click", function (): void { playSimple(musicsound[4]); });
        document.querySelector(".red3").addEventListener("click", function (): void { playSimple(musicsound[5]); });
        document.querySelector(".red4").addEventListener("click", function (): void { playSimple(musicsound[6]); });
        document.querySelector(".yellow1").addEventListener("click", function (): void { playSimple(musicsound[7]); });
        document.querySelector(".yellow2").addEventListener("click", function (): void { playSimple(musicsound[8]); });
        /* Playbutton, Remixbutton und Deletebutton */
        document.querySelector("#playbutton").addEventListener("click", function(): void { Buttonplay(); });
        document.querySelector("#random").addEventListener("click", function(): void {Remixbutton(); });
        document.querySelector("#trash").addEventListener("click", function(): void {Deletenbutton(); });

    /* Arrays */
        var musicsound: string [] = [ 
    ("./assets/hihat.mp3"), 
    ("./assets/kick.mp3"),
    ("./assets/snare.mp3"),
    ("./assets/A.mp3"), 
    ("./assets/C.mp3"),
    ("./assets/F.mp3"),
    ("./assets/G.mp3"),
    ("./assets/laugh-1.mp3"),
    ("./assets/laugh-2.mp3") 
];

        var beat: string [] = [
    musicsound[0],
    musicsound[1],
    musicsound[2]
];

/* Variablen */

        var wdh: number = 0;
        var btn: HTMLElement = document.getElementById("playbutton");
        var interv: number;
        var rubbish: HTMLElement = document.getElementById("trash");
        var remix: number;


/* Abspielen einer zentralen Funktion*/

        function playSimple(audio): void {
    var song: HTMLAudioElement = new Audio (audio);
    song.play();
}

/* Beat des Buttons */
        function Beat (): void {
    playSimple(beat[wdh]);
    wdh += 1;
    if (wdh == 3) { wdh = 0; }
}


/* Switchen von Playbutton zu Stopbutton und zurück*/

        function Buttonplay(): void {
        if (btn.getAttribute("class") == "fas fa-play") {
            btn.setAttribute("class", "fas fa-stop");
        // tslint:disable-next-line: align
        interv = setInterval(Beat, 300);
        }
        else {
            btn.setAttribute("class", "fas fa-play");
            clearInterval(interv);
        }

}

/* Remixbutton macht einen zufälligen Beat aus 9 Tönen */

        function Remixbutton (): void {
            remix = setInterval(playRemix, 750);
    }
        function playRemix (): void {
        for (var i1: number = 0; i1 < 4; i1++) {
            var i2: number = Math.floor(Math.random() * 9);
            playSimple(musicsound[i2]);
        }
    }

/* Deletebutton */
        function Deletenbutton (): void {
        if (rubbish.getAttribute("class") == "fas fa-trash-alt") {
            rubbish.setAttribute("class", "fas fa-trash-alt");
            clearInterval(remix);
            clearInterval(interv);
        }
        }
   });
    
}


