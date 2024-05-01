// ------------------------------- Header ---------------------------------
// ------------------------------------------------------------------------
var icnHeadFacebook = document.getElementById("map-icn-head-facebook");
var icnHeadInstagram = document.getElementById("map-icn-head-instagram");
var icnHeadLinkedin = document.getElementById("map-icn-head-linkedin");

// ----------------------------- Bottom Side ------------------------------
// ------------------------------------------------------------------------
var icnBtFacebook = document.getElementById("map-icn-bt-facebook");
var icnBtInstagram = document.getElementById("map-icn-bt-instagram");
var icnBtLinkedin = document.getElementById("map-icn-bt-linkedin");

// var mpmMainpageMethods = new MainpageMethods();
// var gnmGeneralMethods = new GeneralMethods();



// ------------------------------ Language --------------------------------
// ------------------------------------------------------------------------


var lgLanguage = navigator.language || navigator.userLanguage
var strUrl


switch (lgLanguage) {
  case "tr-TR":
    strUrl = "resource/language/turkish/main-page.json"
    break;
  
  default:
    strUrl = "resource/language/english/main-page.json"
}



// --------------------- Head ----------------------------
// - ------------------- ---------------------------------
icnHeadFacebook.onclick = function() {
  window.open("https://www.facebook.com/umityildirim3410");
}


icnHeadInstagram.onclick = function() {
  window.open("https://www.instagram.com/umityildirim3410");
}


icnHeadLinkedin.onclick = function() {
  window.open("https://www.linkedin.com/in/umityildirim34");
}



// --------------------- Menü ----------------------------
// - ------------------- ---------------------------------
var divBody = document.getElementsByTagName("body")[0];
var icnMenu = document.getElementById("map-icn-menu");
var asdMenuList = document.getElementById("map-asd-menu-lst");
var btnMenuListClose = document.getElementById("map-btn-menu-lst-close");



icnMenu.onclick = function() {
  asdMenuList.style.width = "70vw";
  divBody.style.background = "#b9b9b5";
}



window.addEventListener('click', function(e) {
  if (!asdMenuList.contains(e.target) && (!icnMenu.contains(e.target))) {
    asdMenuList.style.width = "0vw";
    divBody.style.background = "#ffffff";
  } 
});



btnMenuListClose.onclick = function() {
  asdMenuList.style.width = "0vw";
  divBody.style.background = "#ffffff";
}



$("#map-mni-hrz-lnk-about-me").click(function() 
{
  $("html, div").animate({
    scrollTop: $("#map-div-about-me").offset().top
  }, 1100)
});



$("#map-mni-hrz-lnk-communication").click(function() 
{
  
  $("html, div").animate({
    scrollTop: $("#map-div-communication").offset().top
  }, 1100)

});



$("#map-mni-vrt-lnk-about-me").click(function() 
{
  $("html, div").animate({
    scrollTop: $("#map-div-about-me").offset().top
  }, 1100)

  asdMenuList.style.width = "0vw";
  divBody.style.background = "#ffffff";
});



$("#map-mni-vrt-lnk-communication").click(function() 
{
  $("html, div").animate({
    scrollTop: $("#map-div-communication").offset().top
  }, 1100)

  asdMenuList.style.width = "0vw";
  divBody.style.background = "#ffffff";
});



// --------------------- Bottom Side ----------------------------
// - ------------------- ----------------------------------------
icnBtFacebook.onclick = function() {
  window.open("https://www.facebook.com/umityildirim3410");
}


icnBtInstagram.onclick = function() {
  window.open("https://www.instagram.com/umityildirim3410");
}


icnBtLinkedin.onclick = function() {
  window.open("https://www.linkedin.com/in/umityildirim34");
}

// --------------------- ---- -----------------------------------