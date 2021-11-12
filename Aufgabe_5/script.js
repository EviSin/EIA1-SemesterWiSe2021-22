/* Europa */
var eu2018 = 4209.3;
var eu2008 = 4965.7;
/* Nordamerika */
var na2018 = 6035.6;
var na2008 = 6600.4;
/* Südamerika */
var sa2018 = 1261.5;
var sa2008 = 1132.6;
/* Afrika */
var af2018 = 1235.5;
var af2008 = 1028;
/* Asien */
var as2018 = 16274.1;
var as2008 = 12954.7;
/* Australien */
var aus2018 = 2100.5;
var aus2008 = 1993;
/* Welt */
var welt2018 = eu2018 + na2018 + sa2018 + af2018 + as2018 + aus2018;
/* Europa Berechnung */
var eu_welt = eu2018 / welt2018 * 100;
var euzuwelt = eu_welt.toFixed(2);
var eu_eu = (eu2018 / eu2008 - 1) * 100;
var euzueu = eu_eu.toFixed(2);
var euco = eu2018 - eu2008;
var eu_co = euco.toFixed(2);
/* Noramerika Berechnung */
var na_welt = na2018 / welt2018 * 100;
var nazuwelt = na_welt.toFixed(2);
var na_na = (na2018 / na2008 - 1) * 100;
var nazuna = na_na.toFixed(2);
var naco = na2018 - na2008;
var na_co = naco.toFixed(2);
/* Südamerika Berechnung */
var sa_welt = sa2018 / welt2018 * 100;
var sazuwelt = sa_welt.toFixed(2);
var sa_sa = (sa2018 / sa2008 - 1) * 100;
var sazusa = sa_sa.toFixed(2);
var saco = sa2018 - sa2008;
var sa_co = saco.toFixed(2);
/* Afrika Berechnung */
var af_welt = af2018 / welt2018 * 100;
var afzuwelt = af_welt.toFixed(2);
var af_af = (af2018 / af2008 - 1) * 100;
var afzuaf = af_af.toFixed(2);
var afco = af2018 - af2008;
var af_co = afco.toFixed(2);
/* Asien Berechnung */
var as_welt = as2018 / welt2018 * 100;
var aszuwelt = as_welt.toFixed(2);
var as_as = (as2018 / as2008 - 1) * 100;
var aszuas = as_as.toFixed(2);
var asco = as2018 - as2008;
var as_co = asco.toFixed(2);
/* Australien Berechnung */
var aus_welt = aus2018 / welt2018 * 100;
var auszuwelt = aus_welt.toFixed(2);
var aus_aus = (aus2018 / aus2008 - 1) * 100;
var auszuaus = aus_aus.toFixed(2);
var ausco = aus2018 - aus2008;
var aus_co = ausco.toFixed(2);
/* Beschreibung Europa */
console.log("Die Emission von Europa ist: " + eu2018 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + euzuwelt + "%.");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + euzueu + "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + eu_co + "kg CO2.");
/* Beschreibung Nordamerika */
console.log("Die Emission von Nordamerika ist: " + na2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + nazuwelt + "%.");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + nazuna + "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + na_co + "kg CO2.");
/* Beschreibung Südamerika */
console.log("Die Emission von Südamerika ist: " + sa2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " + sazuwelt + "%.");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + sazusa + "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + sa_co + "kg CO2.");
/* Beschreibung Afrika */
console.log("Die Emission von Afrika ist: " + af2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + afzuwelt + "%.");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + afzuaf + "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + af_co + "kg CO2.");
/* Beschreibung Asien */
console.log("Die Emission von Asien ist: " + as2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + aszuwelt + "%.");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + aszuas + "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + as_co + "kg CO2.");
/* Beschreibung Australien */
console.log("Die Emission von Australien ist: " + aus2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + auszuwelt + "%.");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + auszuaus + "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + aus_co + "kg CO2.");
//# sourceMappingURL=script.js.map