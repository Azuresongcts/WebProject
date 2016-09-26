var Star = "";
var Blank = "";
function PyramidBuilding(level) {
    for (var BlankCount = 0; BlankCount < level; BlankCount++) {
        for (var StarCount = 0; StarCount < level - BlankCount; StarCount++) {
            Blank = Blank + " ";
        }
        for (StarCount = 0; StarCount < 2 * BlankCount + 1; StarCount++) {
            Star = Star + "*";
        }
        console.log(Blank + Star);
        Star = "";
        Blank = "";
    }
}

window.onload = function () {
    PyramidBuilding(5);
};
