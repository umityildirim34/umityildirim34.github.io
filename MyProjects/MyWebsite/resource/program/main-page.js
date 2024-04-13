// ----------------------------- Head Side --------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
var ttlPageTitle = document.getElementById("map-ttl-page-title");
var icnWebsiteIcon = document.getElementById("map-icn-website-icon");
// ------------------------------- Header ---------------------------------
// ------------------------------------------------------------------------
var icnHeadFacebook = document.getElementById("map-icn-head-facebook");
var icnHeadInstagram = document.getElementById("map-icn-head-instagram");
var icnHeadLinkedin = document.getElementById("map-icn-head-linkedin");

// ------------------------------ Menu Bar --------------------------------
// ------------------------------------------------------------------------
var icnMenu = document.getElementById("map-icn-menu");
var hrzLnkAboutMe = document.getElementById("map-mni-hrz-lnk-about-me");
var hrzLnkCommunication = document.getElementById("map-mni-hrz-lnk-communication");

// --------------------------------- Info ---------------------------------
// ------------------------------------------------------------------------

// ------------------------------ Personel Info ---------------------------
var icnPhone = document.getElementById("map-icn-phone");
var icnEmail = document.getElementById("map-icn-email");
var icnAddress = document.getElementById("map-icn-address");
var icnDesktop = document.getElementById("map-icn-desktop");
var pgfNameSurname = document.getElementById("map-pgf-name-surname");
var pgfDepartment = document.getElementById("map-pgf-department");
var lnkPhoneNumber = document.getElementById("map-lnk-phone-number");
var lnkEmail = document.getElementById("map-lnk-email");
var lnkAddress = document.getElementById("map-lnk-address");
// ---------------------------------- About Me ----------------------------
var tt1AboutMe = document.getElementById("map-tt1-about-me");
var pgfAboutMe = document.getElementById("map-pgf-about-me");
// ----------------------------- Communication ----------------------------
var tt1Communication = document.getElementById("map-tt1-communication");
var pgfCommunication = document.getElementById("map-pgf-communication");
// ------------------------------ My Picture ------------------------------
// ------------------------------------------------------------------------
var imgMyPicture = document.getElementById("map-img-my-picture");

// -------------------------- Aside (Over divisions) ----------------------
// ------------------------------------------------------------------------
var vrtLnkAboutMe = document.getElementById("map-mni-vrt-lnk-about-me");
var vrtLnkCommunication = document.getElementById("map-mni-vrt-lnk-communication");

// ----------------------------- Bottom Side ------------------------------
// ------------------------------------------------------------------------
var icnBtFacebook = document.getElementById("map-icn-bt-facebook");
var icnBtInstagram = document.getElementById("map-icn-bt-instagram");
var icnBtLinkedin = document.getElementById("map-icn-bt-linkedin");
var pgfCopyright = document.getElementById("map-pgf-copyright");

// var mpmMainpageMethods = new MainpageMethods();
// var gnmGeneralMethods = new GeneralMethods();



// --------------------------- Language ----------------------------

var lgLanguage = navigator.language || navigator.userLanguage
var strUrl


switch (lgLanguage) {
  case "tr-TR":
    strUrl = "resource/language/turkish.json"
    break;
  
  default:
    strUrl = "resource/language/english.json"
}


fetch(strUrl).then(res => res.json()).then(datas => {
  // ----------------------------- Head Side --------------------------------
  // ------------------------------------------------------------------------
  // ------------------------------------------------------------------------
  ttlPageTitle.innerText = datas.sve_map_mainpage.sve_map_wgt_ttl_page_title;
  icnWebsiteIcon.alt = datas.sve_map_mainpage.sve_map_wgt_icn_website_icon;

  // ------------------------------ Menu Bar --------------------------------
  // ------------------------------------------------------------------------
  icnHeadFacebook.alt = datas.sve_map_mainpage.sve_map_wgt_icn_head_facebook;
  icnHeadInstagram.alt = datas.sve_map_mainpage.sve_map_wgt_icn_head_instagram;
  icnHeadLinkedin.alt = datas.sve_map_mainpage.sve_map_wgt_icn_head_linkedin;

  // ------------------------------ Menu Bar --------------------------------
  // ------------------------------------------------------------------------
  hrzLnkAboutMe.title = datas.sve_map_mainpage.sve_map_wgt_menu_about_me_title;
  hrzLnkAboutMe.innerText = datas.sve_map_mainpage.sve_map_wgt_menu_about_me_item;
  hrzLnkCommunication.title = datas.sve_map_mainpage.sve_map_wgt_menu_communication_title;
  hrzLnkCommunication.innerText = datas.sve_map_mainpage.sve_map_wgt_menu_communication_item;

  // --------------------- Info ---------------------------
  // -- ------------------- -------------------------------

  // -- ------------------- Personel Info -----------------
  icnMenu.alt = datas.sve_map_mainpage.sve_map_wgt_ic_menu_icon;
  icnPhone.alt = datas.sve_map_mainpage.sve_map_wgt_ic_phone_icon;
  icnEmail.alt = datas.sve_map_mainpage.sve_map_wgt_ic_email_icon;
  icnAddress.alt = datas.sve_map_mainpage.sve_map_wgt_ic_address_icon;

  icnDesktop.alt = datas.sve_map_mainpage.sve_map_wgt_icn_desktop;

  pgfNameSurname.innerText = datas.sve_map_mainpage.sve_map_wgt_pg_name_surname;
  pgfDepartment.innerText = datas.sve_map_mainpage.sve_map_wgt_pg_department;

  lnkPhoneNumber.innerText = datas.sve_map_mainpage.sve_map_wgt_ln_phone_number;
  lnkEmail.innerText = datas.sve_map_mainpage.sve_map_wgt_ln_email;
  lnkAddress.innerText = datas.sve_map_mainpage.sve_map_wgt_ln_address;

  // -- ------------------- About Me ------------------
  tt1AboutMe.innerText = datas.sve_map_mainpage.sve_map_wgt_tt1_about_me;
  pgfAboutMe.innerText = datas.sve_map_mainpage.sve_map_wgt_pgf_about_me;
  // -- ------------------- Communication -------------
  tt1Communication.innerText = datas.sve_map_mainpage.sve_map_wgt_tt1_communication;
  pgfCommunication.innerText = datas.sve_map_mainpage.sve_onp_wgt_pgf_communication;
  // --------------------- My Picture ------------------
// -- ------------------- --------------------------------
  imgMyPicture.alt = datas.sve_map_mainpage.sve_map_wgt_img_my_picture;
  //   // --------------------- We writed our method here ---------------------
  // gnmGeneralMethods.stopAppSpeciedDaysLater(btnAdd, btnUpdate, strUseRight);
  //   //
  
  // --------------------- Menu Lst (Over divisions) -------
  vrtLnkAboutMe.title = datas.sve_map_mainpage.sve_map_wgt_menu_about_me_title;
  vrtLnkAboutMe.innerText = datas.sve_map_mainpage.sve_map_wgt_menu_about_me_item;
  vrtLnkCommunication.title = datas.sve_map_mainpage.sve_map_wgt_menu_communication_title;
  vrtLnkCommunication.innerText = datas.sve_map_mainpage.sve_map_wgt_menu_communication_item;

  // --------------------- Bottom Side ---------------------
  // - ------------------- ---------------------------------
  icnBtFacebook.alt = datas.sve_map_mainpage.sve_map_wgt_icn_bt_facebook;
  icnBtInstagram.alt = datas.sve_map_mainpage.sve_map_wgt_icn_bt_instagram;
  icnBtLinkedin.alt = datas.sve_map_mainpage.sve_map_wgt_icn_bt_linkedin;
  pgfCopyright.innerText = datas.sve_map_mainpage.sve_map_wgt_pgf_copyright;
})



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