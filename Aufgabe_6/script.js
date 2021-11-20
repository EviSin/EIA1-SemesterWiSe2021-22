var Aufgabe_6;
(function (Aufgabe_6) {
    /* Europa */
    var countryEU = "Europe";
    var eu2018 = 4209.3;
    var eu2008 = 4965.7;
    /* Nordamerika */
    var countryNA = "North America";
    var na2018 = 6035.6;
    var na2008 = 6600.4;
    /* Südamerika */
    var countrySA = "South America";
    var sa2018 = 1261.5;
    var sa2008 = 1132.6;
    /* Afrika */
    var countryAF = "Africa";
    var af2018 = 1235.5;
    var af2008 = 1028;
    /* Asien */
    var countryAS = "Asia";
    var as2018 = 16274.1;
    var as2008 = 12954.7;
    /* Australien */
    var countryAU = "Australia";
    var aus2018 = 2100.5;
    var aus2008 = 1993;
    /* Welt insgesamt */
    var geswelt2018 = eu2018 + na2018 + sa2018 + af2018 + as2018 + aus2018;
    /* Rechnungen */
    function CO(countryName, number2018, number2008) {
        document.querySelector(".region").innerHTML = countryName;
        document.querySelector(".land").innerHTML = countryName;
        document.querySelector(".emissionof2018").innerHTML = number2018.toFixed(2);
        document.querySelector(".worldemission").innerHTML = (number2018 / geswelt2018 * 100).toFixed(2) + "%";
        document.querySelector(".growthbetween").innerHTML = ((number2018 / number2008 - 1) * 100).toFixed(2) + "%";
        document.querySelector(".growthabsolute").innerHTML = (number2018 - number2008).toFixed(2);
        document.querySelector(".full").style.height = (number2018 / geswelt2018 * 100) + "%";
    }
    /* Auf Länder klicken */
    window.addEventListener("load", function () {
        document.querySelector(".europe").addEventListener("click", function () { CO(countryEU, eu2018, eu2008); });
        document.querySelector(".northamerica").addEventListener("click", function () { CO(countryNA, na2018, na2008); });
        document.querySelector(".southamerica").addEventListener("click", function () { CO(countrySA, sa2018, sa2008); });
        document.querySelector(".africa").addEventListener("click", function () { CO(countryAF, af2018, af2008); });
        document.querySelector(".asia").addEventListener("click", function () { CO(countryAS, as2018, as2008); });
        document.querySelector(".australia").addEventListener("click", function () { CO(countryAU, aus2018, aus2008); });
    });
})(Aufgabe_6 || (Aufgabe_6 = {}));
//# sourceMappingURL=script.js.map