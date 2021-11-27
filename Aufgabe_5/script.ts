/* Europa */
var eu2018 : number = 4209.3;
var eu2008 : number = 4965.7;

/* Nordamerika */
var na2018 : number = 6035.6;
var na2008 : number = 6600.4;

/* Südamerika */
var sa2018 : number = 1261.5;
var sa2008 : number = 1132.6;

/* Afrika */
var af2018 : number = 1235.5;
var af2008 : number = 1028;

/* Asien */
var as2018 : number = 16274.1;
var as2008 : number = 12954.7;

/* Australien */
var aus2018 : number = 2100.5;
var aus2008 : number = 1993;

/* Welt */
var welt2018 : number = eu2018 + na2018 + sa2018 + af2018 + as2018 + aus2018;

/* Europa Berechnung */
var eu_welt : number = eu2018/welt2018*100;
var euzuwelt: string = eu_welt.toFixed(2);
var eu_eu : number = (eu2018/eu2008-1)*100;
var euzueu: string = eu_eu.toFixed(2);
var euco : number = eu2018-eu2008;
var eu_co : string = euco.toFixed(2);

/* Noramerika Berechnung */
var na_welt : number = na2018/welt2018*100;
var nazuwelt: string = na_welt.toFixed(2);
var na_na : number = (na2018/na2008-1)*100;
var nazuna: string = na_na.toFixed(2);
var naco : number = na2018-na2008;
var na_co : string = naco.toFixed(2);

/* Südamerika Berechnung */
var sa_welt : number = sa2018/welt2018*100;
var sazuwelt: string = sa_welt.toFixed(2);
var sa_sa : number = (sa2018/sa2008-1)*100;
var sazusa : string = sa_sa.toFixed(2);
var saco : number = sa2018-sa2008;
var sa_co : string = saco.toFixed(2);

/* Afrika Berechnung */
var af_welt : number = af2018/welt2018*100;
var afzuwelt: string = af_welt.toFixed(2);
var af_af : number = (af2018/af2008-1)*100;
var afzuaf: string = af_af.toFixed(2);
var afco : number = af2018-af2008;
var af_co : string = afco.toFixed(2);

/* Asien Berechnung */
var as_welt : number = as2018/welt2018*100;
var aszuwelt: string = as_welt.toFixed(2);
var as_as : number = (as2018/as2008-1)*100;
var aszuas: string = as_as.toFixed(2);
var asco : number = as2018-as2008;
var as_co : string = asco.toFixed(2);

/* Australien Berechnung */
var aus_welt : number = aus2018/welt2018*100;
var auszuwelt: string = aus_welt.toFixed(2);
var aus_aus : number = (aus2018/aus2008-1)*100;
var auszuaus: string = aus_aus.toFixed(2);
var ausco : number = aus2018-aus2008;
var aus_co : string = ausco.toFixed(2);



/* Beschreibung Europa */
console.log("Die Emission von Europa ist: " + eu2018 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + euzuwelt + "%.");
console.log ("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + euzueu  + "% verändert.");
console.log ("2018 im Vergleich zu 2008 sind das " + eu_co + "kg CO2.");


/* Beschreibung Nordamerika */
console.log("Die Emission von Nordamerika ist: " + na2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + nazuwelt + "%.");
console.log ("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + nazuna  + "% verändert.");
console.log ("2018 im Vergleich zu 2008 sind das " + na_co + "kg CO2.");

/* Beschreibung Südamerika */
console.log("Die Emission von Südamerika ist: " + sa2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " + sazuwelt + "%.");
console.log ("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + sazusa  + "% verändert.");
console.log ("2018 im Vergleich zu 2008 sind das " + sa_co + "kg CO2.");

/* Beschreibung Afrika */
console.log("Die Emission von Afrika ist: " + af2018  + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + afzuwelt + "%.");
console.log ("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + afzuaf  + "% verändert.");
console.log ("2018 im Vergleich zu 2008 sind das " + af_co + "kg CO2.");

/* Beschreibung Asien */
console.log("Die Emission von Asien ist: " + as2018  + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + aszuwelt + "%.");
console.log ("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + aszuas  + "% verändert.");
console.log ("2018 im Vergleich zu 2008 sind das " + as_co + "kg CO2.");

/* Beschreibung Australien */
console.log("Die Emission von Australien ist: " + aus2018  + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + auszuwelt + "%.");
console.log ("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + auszuaus  + "% verändert.");
console.log ("2018 im Vergleich zu 2008 sind das " + aus_co + "kg CO2.");
