
function onHover(barID) {
    document.getElementById(barID).style.backgroundColor = '2A2E4B';
    document.getElementById(barID).style.color = 'ffffff';
    var iconID = barID + "Icon";
    document.getElementById(iconID).style.filter = 'grayscale(0%)';
    console.log("ttt");
}

function stopHover(barID) {
    document.getElementById(barID).style.backgroundColor = '313557';
    document.getElementById(barID).style.color = '73768D';
    var iconID = barID + "Icon";
    document.getElementById(iconID).style.filter = 'grayscale(100%)';
    console.log("ttt");
}
