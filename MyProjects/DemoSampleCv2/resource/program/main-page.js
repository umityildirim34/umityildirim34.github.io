// ----------------------------- Head Side --------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
var ttlPageTitle = document.getElementById("map-ttl-page-title");
var icnWwebsiteIcon = document.getElementById("map-icn-website-icon");
// ------------------------------- Header ---------------------------------
// ------------------------------------------------------------------------
var icnHeadFacebook = document.getElementById("map-icn-head-facebook");
var icnHeadInstagram = document.getElementById("map-icn-head-instagram");
var icnHeadLinkedin = document.getElementById("map-icn-head-linkedin");

// ------------------------------- Menu Bar -------------------------------
// ------------------------------------------------------------------------
var hrzLnkAboutMe = document.getElementById("map-mni-hrz-lnk-about-me");
var hrzLnkOurNetworks = document.getElementById("map-mni-hrz-lnk-our-networks");

// --------------------------------- Info ---------------------------------
// ------------------------------------------------------------------------
var icnWebsiteTitle = document.getElementById("map-ttl-website-title");
var icnWebsiteIcon = document.getElementById("map-icn-website-icon");
var icnMenu = document.getElementById("map-icn-menu");
var icnPhone = document.getElementById("map-icn-phone");
var icnEmail = document.getElementById("map-icn-email");
var icnAddress = document.getElementById("map-icn-address");
var icnHeart = document.getElementById("map-icn-heart");
var pgfNameSurname = document.getElementById("map-pgf-name-surname");
var pgfDepartment = document.getElementById("map-pgf-department");
var lnkPhoneNumber = document.getElementById("map-lnk-phone-number");
var lnkEmail = document.getElementById("map-lnk-email");
var lnkAddress = document.getElementById("map-lnk-address");

// ---------------------------- My Picture -------------------------------
// -----------------------------------------------------------------------
var imgMyPicture = document.getElementById("map-img-my-picture");

// -------------------------- Aside (Over divisions) ---------------------
// -----------------------------------------------------------------------
var vrtLnkAboutMe = document.getElementById("map-mni-vrt-lnk-about-me");
var vrtLnkOurNetworks = document.getElementById("map-mni-vrt-lnk-our-networks");

// ------------------------------ Bottom Side ----------------------------
// -----------------------------------------------------------------------
var icnBtFacebook = document.getElementById("map-icn-bt-facebook");
var icnBtInstagram = document.getElementById("map-icn-bt-instagram");
var icnBtLinkedin = document.getElementById("map-icn-bt-linkedin");
var pgfCopyright = document.getElementById("map-pgf-copyright");

// var mpmMainpageMethods = new MainpageMethods();
// var gnmGeneralMethods = new GeneralMethods();



// ------------------------------ Language ------------------------------

var lgLanguage = navigator.language || navigator.userLanguage
var strUrl


switch (lgLanguage) {
  case "tr-TR":
    strUrl = "resource/language/turkish/main-page.json"
    break;
  
  default:
    strUrl = "resource/language/english/main-page.json"
}


fetch(strUrl).then(res => res.json()).then(datas => {
  // ----------------------------- Head Side --------------------------------
  // ------------------------------------------------------------------------
  // ------------------------------------------------------------------------
  ttlPageTitle.innerText = datas.sve_map_wgt_ttl_page_title;
	icnWwebsiteIcon.alt = datas.sve_map_wgt_icn_website_icon;
  // ------------------------------- Header ---------------------------------
  // ------------------------------------------------------------------------
  icnHeadFacebook.alt = datas.sve_map_wgt_icn_head_facebook;
  icnHeadInstagram.alt = datas.sve_map_wgt_icn_head_instagram;
  icnHeadLinkedin.alt = datas.sve_map_wgt_icn_head_linkedin;
  // ------------------------------- Menu Bar -------------------------------
  // ------------------------------------------------------------------------
  icnMenu.alt = datas.sve_map_wgt_ic_menu_icon;
  hrzLnkAboutMe.title = datas.sve_map_wgt_menu_about_me_title;
  hrzLnkAboutMe.innerText = datas.sve_map_wgt_menu_about_me_item;
  hrzLnkOurNetworks.title = datas.sve_map_wgt_menu_our_networks_title;
  hrzLnkOurNetworks.innerText = datas.sve_map_wgt_menu_our_networks_item;
  // --------------------------------- Info ---------------------------------
  // ------------------------------------------------------------------------
  icnPhone.alt = datas.sve_map_wgt_ic_phone_icon;
  icnEmail.alt = datas.sve_map_wgt_ic_email_icon;
  icnAddress.alt = datas.sve_map_wgt_ic_address_icon;

  
  icnHeart.alt = datas.sve_map_wgt_icn_heart;

  pgfNameSurname.innerText = datas.sve_map_wgt_pg_name_surname;
  pgfDepartment.innerText = datas.sve_map_wgt_pg_department;

  lnkPhoneNumber.innerText = datas.sve_map_wgt_ln_phone_number;
  lnkEmail.innerText = datas.sve_map_wgt_ln_email;
  lnkAddress.innerText = datas.sve_map_wgt_ln_address;
  // --------------------------- Sample Picture -----------------------------
  // ------------------------------------------------------------------------
  imgMyPicture.alt = datas.sve_map_wgt_img_my_picture;
  //   // --------------------- We writed our method here -------------------
  // gnmGeneralMethods.stopAppSpeciedDaysLater(btnAdd, btnUpdate, strUseRight);
  //   //
  
  // ----------------------- Menu Lst (Over divisions) ----------------------
  vrtLnkAboutMe.title = datas.sve_map_wgt_menu_about_me_title;
  vrtLnkAboutMe.innerText = datas.sve_map_wgt_menu_about_me_item;
  vrtLnkOurNetworks.title = datas.sve_map_wgt_menu_our_networks_title;
  vrtLnkOurNetworks.innerText = datas.sve_map_wgt_menu_our_networks_item;

  // ----------------------------- Bottom Side ------------------------------
  // ------------------------------------------------------------------------
  icnBtFacebook.alt = datas.sve_map_wgt_icn_bt_facebook;
  icnBtInstagram.alt = datas.sve_map_wgt_icn_bt_instagram;
  icnBtLinkedin.alt = datas.sve_map_wgt_icn_bt_linkedin;
  pgfCopyright.innerText = datas.sve_map_wgt_pgf_copyright;
})



// ---------------------------------- Head ---------------------------------
// -------------------------------------------------------------------------
icnHeadFacebook.onclick = function() {
  window.open("https://www.facebook.com");
}


icnHeadInstagram.onclick = function() {
  window.open("https://www.instagram.com");
}


icnHeadLinkedin.onclick = function() {
  window.open("https://www.linkedin.com");
}



// -------------------------------- Menü -----------------------------------
// -------------------------------------------------------------------------
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



// ---------------------------- Bottom Side --------------------------------
// -------------------------------------------------------------------------
icnBtFacebook.onclick = function() {
  window.open("https://www.facebook.com");
}


icnBtInstagram.onclick = function() {
  window.open("https://www.instagram.com");
}


icnBtLinkedin.onclick = function() {
  window.open("https://www.linkedin.com");
}

// -------------------------------------------------------------------------