//https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
function decorateNavigationStyle() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
