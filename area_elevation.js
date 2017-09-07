// make a color-gradient map of pinellas county area
// red = 0m elevation ---> white = 30m elevation (and up)

Map.setCenter(-82.55950927734375,28.00167680740309, 11);
var elev = ee.Image('srtm90_v4');
var cover = ee.Image('MCD12Q1/MCD12Q1_005_2001_01_01')
    .select('Land_Cover_Type_1');
var blank = ee.Image(0);
var output = new Array();
var result = new Array();
var colors = new Array();
colors.push("ff0000"); colors.push("ff1919"); colors.push("ff3333");
colors.push("ff4c4c"); colors.push("ff6666"); colors.push("ff7f7f");
colors.push("ff9999"); colors.push("ffb2b2"); colors.push("ffcccc");
colors.push("ffe5e5"); colors.push("ffffff");
var count = 0;
var peak = 30; // meters
var inc = 3; // meters, incrememnt
for (var x = 0; x <= peak; x+=inc) {
    print(colors[count]);
    output = blank.where(elev.gt(x), 1);
    result = output.updateMask(output);
    Map.addLayer(result, {palette: colors[count]});
    count++;
}


