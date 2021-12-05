var Aufgabe_8;
(function (Aufgabe_8) {
    /* Alle Buttons */
    window.addEventListener("load", function () {
        document.querySelector(".blue1").addEventListener("click", function () { playSimple(musicsound[0]); });
        document.querySelector(".blue2").addEventListener("click", function () { playSimple(musicsound[1]); });
        document.querySelector(".blue3").addEventListener("click", function () { playSimple(musicsound[2]); });
        document.querySelector(".red1").addEventListener("click", function () { playSimple(musicsound[3]); });
        document.querySelector(".red2").addEventListener("click", function () { playSimple(musicsound[4]); });
        document.querySelector(".red3").addEventListener("click", function () { playSimple(musicsound[5]); });
        document.querySelector(".red4").addEventListener("click", function () { playSimple(musicsound[6]); });
        document.querySelector(".yellow1").addEventListener("click", function () { playSimple(musicsound[7]); });
        document.querySelector(".yellow2").addEventListener("click", function () { playSimple(musicsound[8]); });
        /* Playbutton, Remixbutton und Deletebutton */
        document.querySelector("#playbutton").addEventListener("click", function () { Buttonplay(); });
        document.querySelector("#random").addEventListener("click", function () { Remixbutton(); });
        document.querySelector("#trash").addEventListener("click", function () { Deletenbutton(); });
        /* Arrays */
        var musicsound = [
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
        var beat = [
            musicsound[0],
            musicsound[1],
            musicsound[2]
        ];
        /* Variablen */
        var wdh = 0;
        var btn = document.getElementById("playbutton");
        var interv;
        var rubbish = document.getElementById("trash");
        var remix;
        /* Abspielen einer zentralen Funktion*/
        function playSimple(audio) {
            var song = new Audio(audio);
            song.play();
        }
        /* Beat des Buttons */
        function Beat() {
            playSimple(beat[wdh]);
            wdh += 1;
            if (wdh == 3) {
                wdh = 0;
            }
        }
        /* Switchen von Playbutton zu Stopbutton und zurück*/
        function Buttonplay() {
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
        function Remixbutton() {
            remix = setInterval(playRemix, 750);
        }
        function playRemix() {
            for (var i1 = 0; i1 < 4; i1++) {
                var i2 = Math.floor(Math.random() * 9);
                playSimple(musicsound[i2]);
            }
        }
        /* Deletebutton */
        function Deletenbutton() {
            if (rubbish.getAttribute("class") == "fas fa-trash-alt") {
                rubbish.setAttribute("class", "fas fa-trash-alt");
                clearInterval(remix);
                clearInterval(interv);
            }
        }
    });
})(Aufgabe_8 || (Aufgabe_8 = {}));
//# sourceMappingURL=script_8.js.map