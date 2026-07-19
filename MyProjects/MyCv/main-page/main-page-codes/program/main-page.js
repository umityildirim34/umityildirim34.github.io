let ttlPageTitle = document.getElementById("map-ttl-page-title");
let icnWebsiteIcon = document.getElementById("map-icn-website-icon");
// ------------------------ Header --------------------------
// ----------------------------------------------------------
let icnHeadFacebook = document.getElementById("map-icn-head-facebook");
let icnHeadInstagram = document.getElementById("map-icn-head-instagram");
let icnHeadLinkedin = document.getElementById("map-icn-head-linkedin");
// ------------------------- Info ---------------------------
// ----------------------- Menu Bar -------------------------
let icnMenu = document.getElementById("map-icn-menu");
let hlnkAboutMe = document.getElementById("map-hlnk-about-me");
let hlnkCommunication = document.getElementById("map-hlnk-communication");
// ------------------------- Info ---------------------------
// -------------------- Personel Info -----------------------
let pgfNameSurname = document.getElementById("map-pgf-name-surname");
let pgfDepartment = document.getElementById("map-pgf-department");
let icnDesktop = document.getElementById("map-icn-desktop");
let icnPhone = document.getElementById("map-icn-phone");
let lnkPhoneNumber = document.getElementById("map-lnk-phone-number");
let icnEmail = document.getElementById("map-icn-email");
let lnkEmail = document.getElementById("map-lnk-email");
let icnAddress = document.getElementById("map-icn-address");
let lnkAddress = document.getElementById("map-lnk-address");
// ------------------------- Info ---------------------------
// ----------------------- About Me -------------------------
let tt1AboutMe = document.getElementById("map-tt1-about-me");
let pgfAboutMe = document.getElementById("map-pgf-about-me");
// ------------------------- Info ---------------------------
// --------------------- Communication ----------------------
let tt1Communication = document.getElementById("map-tt1-communication");
let pgfCommunication = document.getElementById("map-pgf-communication");
// --------------------- My Picture ------------------------
// ----------------------------------------------------------
let imgMyPicture = document.getElementById("map-img-my-picture");
// --------------- Menu Lst (Over divisions) ----------------
// ----------------------------------------------------------
let divBody = document.getElementsByTagName("body")[0];
let asdMenuList = document.getElementById("map-asd-menu-lst");
let btnMenuListClose = document.getElementById("map-btn-menu-lst-close");
let vlnkAboutMe = document.getElementById("map-vlnk-about-me");
let vlnkCommunication = document.getElementById("map-vlnk-communication");
// ---------------------- Bottom Side ------------------------
// ----------------------------------------------------------
let icnBtFacebook = document.getElementById("map-icn-bt-facebook");
let icnBtInstagram = document.getElementById("map-icn-bt-instagram");
let icnBtLinkedin = document.getElementById("map-icn-bt-linkedin");
let pgfCopyright = document.getElementById("map-pgf-copyright");

// let mpmMainpageMethods = new MainpageMethods();
// let gnmGeneralMethods = new GeneralMethods();



// ************************ Program ************************
// *********************************************************
// Language Selection and setting language file
const strLanguage = Intl.DateTimeFormat().resolvedOptions().locale.split("-")[0];
let strFileName;

switch (strLanguage) {
  case "tr":
    strFileName = "datas_tr";
    break;
  default:
    strFileName = "datas";
}

let strUrl = `../language/${strFileName}.json`;

// Getting datas from language files.
fetch(strUrl).then(res => res.json()).then(info => {
  // --------------------- HTML ----------------------
  ttlPageTitle.innerText = info.html.str_ttl_page_title;
  icnWebsiteIcon.alt = info.html.str_icn_website_icon;
  // -------------------- Header ---------------------
  icnHeadFacebook.alt = info.html.header.str_icn_head_facebook;
  icnHeadInstagram.alt = info.html.header.str_icn_head_instagram;
  icnHeadLinkedin.alt = info.html.header.str_icn_head_linkedin;
  // ---------------- Info > Menu Bar --------------------
  icnMenu.alt = info.html.menu_bar.str_icn_menu;
  hlnkAboutMe.innerText = info.html.menu_bar.str_hlnk_about_me;
  hlnkAboutMe.title = info.html.menu_bar.str_hlnk_about_me_ttl;
  hlnkCommunication.innerText = info.html.menu_bar.str_hlnk_communication;
  hlnkCommunication.title = info.html.menu_bar.str_hlnk_communication_ttl;
  // -------------- Info > Personel Info -----------------
  pgfNameSurname.innerText = info.html.personel_info.str_pgf_name_surname;
  pgfDepartment.innerText = info.html.personel_info.str_pgf_department;
  icnDesktop.alt = info.html.personel_info.str_icn_desktop;
  icnPhone.alt = info.html.personel_info.str_icn_phone;
  lnkPhoneNumber.innerText = info.html.personel_info.str_lnk_phone_number;
  icnEmail.alt = info.html.personel_info.str_icn_email;
  lnkEmail.innerText = info.html.personel_info.str_lnk_email;
  icnAddress.alt = info.html.personel_info.str_icn_address;
  lnkAddress.innerText = info.html.personel_info.str_lnk_address;
  // ---------------- Info > About Me --------------------
  tt1AboutMe.innerText = info.html.about_me.str_tt1_about_me;
  pgfAboutMe.innerText = info.html.about_me.str_pgf_about_me;
  // ------------ Info > Communication -------------------
  tt1Communication.innerText = info.html.communication.str_tt1_communication;
  pgfCommunication.innerText = info.html.communication.str_pgf_communication;
  // ------------------ My Picture -----------------------
  // -----------------------------------------------------
  imgMyPicture.alt = info.html.my_picture.str_img_my_picture;
  // ----------- Menu Lst (Over divisions) ---------------
  vlnkAboutMe.innerText = info.html.menu_lst.str_vlnk_about_me;
  vlnkAboutMe.title = info.html.menu_lst.str_vlnk_about_me_ttl;
  vlnkCommunication.innerText = info.html.menu_lst.str_vlnk_communication;
  vlnkCommunication.title = info.html.menu_lst.str_vlnk_communication_ttl;
  // ------------------ Bottom-side ----------------------
  icnBtFacebook.alt = info.html.bottom_side.str_icn_bt_facebook;
  icnBtInstagram.alt = info.html.bottom_side.str_icn_bt_instagram;
  icnBtLinkedin.alt = info.html.bottom_side.str_icn_bt_linkedin;
  pgfCopyright.innerText = info.html.bottom_side.str_pgf_copyright;
});



// ------------------------------- Head -----------------------------------
// ------------------------------------------------------------------------
icnHeadFacebook.onclick = function () {
  window.open("https://www.facebook.com/umityildirim3410");
}


icnHeadInstagram.onclick = function () {
  window.open("https://www.instagram.com/umityildirim3410");
}


icnHeadLinkedin.onclick = function () {
  window.open("https://www.linkedin.com/in/umityildirim34");
}



icnMenu.onclick = function () {
  asdMenuList.style.width = "70vw";
  divBody.style.background = "#b9b9b5";
}



window.addEventListener('click', function (e) {
  if (!asdMenuList.contains(e.target) && (!icnMenu.contains(e.target))) {
    asdMenuList.style.width = "0vw";
    divBody.style.background = "#ffffff";
  }
});



btnMenuListClose.onclick = function () {
  asdMenuList.style.width = "0vw";
  divBody.style.background = "#ffffff";
}



$("#map-hlnk-about-me").click(function () {
  $("html, div").animate({
    scrollTop: $("#map-div-about-me").offset().top
  }, 1100)
});



$("#map-hlnk-communication").click(function () {

  $("html, div").animate({
    scrollTop: $("#map-div-communication").offset().top
  }, 1100)

});



$("#map-vlnk-about-me").click(function () {
  $("html, div").animate({
    scrollTop: $("#map-div-about-me").offset().top
  }, 1100)

  asdMenuList.style.width = "0vw";
  divBody.style.background = "#ffffff";
});



$("#map-vlnk-communication").click(function () {
  $("html, div").animate({
    scrollTop: $("#map-div-communication").offset().top
  }, 1100)

  asdMenuList.style.width = "0vw";
  divBody.style.background = "#ffffff";
});



// ---------------------------- Bottom Side -------------------------------
// ------------------------------------------------------------------------
icnBtFacebook.onclick = function () {
  window.open("https://www.facebook.com/umityildirim3410");
}


icnBtInstagram.onclick = function () {
  window.open("https://www.instagram.com/umityildirim3410");
}


icnBtLinkedin.onclick = function () {
  window.open("https://www.linkedin.com/in/umityildirim34");
}

// ------------------------------------------------------------------------