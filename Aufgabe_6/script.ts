namespace Aufgabe_6 {
/* Europa */
var countryEU : string = "Europe";
var eu2018 : number = 4209.3;
var eu2008 : number = 4965.7;

/* Nordamerika */
var countryNA : string = "North America";
var na2018 : number = 6035.6;
var na2008 : number = 6600.4;

/* Südamerika */
var countrySA : string = "South America";
var sa2018 : number = 1261.5;
var sa2008 : number = 1132.6;

/* Afrika */
var countryAF : string = "Africa"
var af2018 : number = 1235.5;
var af2008 : number = 1028;

/* Asien */
var countryAS : string = "Asia"
var as2018 : number = 16274.1;
var as2008 : number = 12954.7;

/* Australien */
var countryAU : string ="Australia"
var aus2018 : number = 2100.5;
var aus2008 : number = 1993;

/* Welt insgesamt */

var geswelt2018: any = eu2018 + na2018 + sa2018 + af2018 + as2018 + aus2018;

/* Rechnungen */

function CO (countryName: string, number2018: number, number2008: number) {
    document.querySelector(".region").innerHTML = countryName;
    document.querySelector(".land").innerHTML = countryName;
    document.querySelector(".emissionof2018").innerHTML = number2018.toFixed(2);
    document.querySelector(".worldemission").innerHTML = (number2018/geswelt2018*100).toFixed(2) + "%";
    document.querySelector(".growthbetween").innerHTML = ((number2018/number2008-1)*100).toFixed(2) + "%";
    document.querySelector(".growthabsolute").innerHTML = (number2018-number2008).toFixed(2);
    document.querySelector<HTMLElement>(".full").style.height = (number2018/geswelt2018*100) + "%";
}

/* Auf Länder klicken */

window.addEventListener ("load", function(){
    document.querySelector(".europe").addEventListener("click", function (): void { CO(countryEU, eu2018, eu2008)});
    document.querySelector(".northamerica").addEventListener("click", function (): void { CO(countryNA, na2018, na2008)});
    document.querySelector(".southamerica").addEventListener("click", function (): void { CO(countrySA, sa2018, sa2008)});
    document.querySelector(".africa").addEventListener("click", function (): void { CO(countryAF, af2018, af2008)});
    document.querySelector(".asia").addEventListener("click", function (): void { CO(countryAS, as2018, as2008)});
    document.querySelector(".australia").addEventListener("click", function (): void { CO(countryAU, aus2018, aus2008)});
})

}