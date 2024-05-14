// ------------------------ Sorted Images -------------------------
// ----------------------------------------------------------------
var divSortedImages = document.getElementById("map-div-sorted-images");

// ------------------- Menu Bar (Over divisions) ------------------
var divBody = document.getElementsByTagName("body")[0];
var icnMenu = document.getElementById("map-icn-menu");
var asdMenuList = document.getElementById("map-asd-menu-lst");
var btnMenuListClose = document.getElementById("map-btn-menu-lst-close");
// ----------------------- Direction Icons ------------------------
var icnBack = document.getElementById("map-icn-back");
var icnForward = document.getElementById("map-icn-forward");

// ------------------------- Bottom Side --------------------------
// ----------------------------------------------------------------
var imgFacebook = document.getElementById("map-img-facebook");
var imgInstagram = document.getElementById("map-img-instagram");
var imgLinkedin = document.getElementById("map-img-linkedin");
// ----------------------------------------------------------------

var mpmMainpageMethods = new MainpageMethods();
// var gnmGeneralMethods = new GeneralMethods();



// --------------------------- Animation -------------------------
// ---------------------------------------------------------------
const startAnimation = (entries, observer) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("my-animation", entry.isIntersecting);
  });
};

const observer = new IntersectionObserver(startAnimation);
const options = { root: null, rootMargin: "0px", threshold: 1 }; 

const elements = document.querySelectorAll(".map-dvc-divisions");
elements.forEach(el => {
  observer.observe(el, options);
});



// ------------------- Menu Bar (Over divisions) ------------------
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



$("#map-hlnk-about-us").click(function() 
{
  $("html, body").animate({
    scrollTop: $("#map-div-about-us-image").offset().top
  }, 1100)
});



$("#map-hlnk-communication").click(function() 
{
  
  $("html, body").animate({
    scrollTop: $("#map-div-communication-image").offset().top
  }, 1100)

});



$("#map-vlnk-about-us").click(function() 
{
  $("html, body").animate({
    scrollTop: $("#map-div-about-us-image").offset().top
  }, 1100)

  asdMenuList.style.width = "0vw";
  divBody.style.background = "#ffffff";
});



$("#map-vlnk-communication").click(function() 
{
  $("html, body").animate({
    scrollTop: $("#map-div-communication-image").offset().top
  }, 1100)

  asdMenuList.style.width = "0vw";
  divBody.style.background = "#ffffff";
});



// ------------------------ Sorted Images -------------------------
// ----------------------------------------------------------------
var intImageOrder = 0;
var tiTimingIdentity;
var staImages = ["resource/pictures/img_image1_20240321_145011.jpg", "resource/pictures/img_image2_20240321_145051.jpg", 
            "resource/pictures/img_image3_20240321_145059.jpg"];



divSortedImages.style.backgroundImage = `url(${staImages[intImageOrder]})`;
mpmMainpageMethods.change();



icnBack.onclick = function() { 
    mpmMainpageMethods.back();
}



icnForward.onclick = function() {
  mpmMainpageMethods.forward();
}



// ------------------------- Bottom Side --------------------------
// ----------------------------------------------------------------
imgFacebook.onclick = function() {
  window.open("https://www.facebook.com");
}



imgInstagram.onclick = function() {
  window.open("https://www.instagram.com");
}



imgLinkedin.onclick = function() {
  window.open("https://tr.linkedin.com/");
}

// ----------------------------------------------------------------