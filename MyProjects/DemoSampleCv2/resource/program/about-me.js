// ----------------------- Head Side ---------------------
// -------------------------------------------------------
// -------------------------------------------------------
var ttlPageTitle = document.getElementById("amp-ttl-page-title");

// ----------------------- Link Path ---------------------
// -- ------------------- --------------------------------
var lnkMainPage = document.getElementById("amp-lnk-main-page");
var lnkAboutMe = document.getElementById("amp-lnk-about-me");

// --------------------- About Me ------------------------
// -- ------------------- --------------------------------
var imgAboutMe = document.getElementById("amp-img-about-me");
var pgfAboutMe = document.getElementById("amp-pgf-about-me");



// ------------------ Language ---------------------------

var lgLanguage = navigator.language || navigator.userLanguage;
var strUrl;


switch (lgLanguage) {
  case "tr-TR":
    strUrl = "resource/language/turkish/about-me.json";
    break;
  
  default:
    strUrl = "resource/language/english/about-me.json";
}


fetch(strUrl).then(res => res.json()).then(datas => {
  ttlPageTitle.innerText = datas.sve_amp_wgt_ttl_page_title;
  // --------------------- Website Path --------------------
  // -- ------------------- --------------------------------
  lnkMainPage.innerText = datas.sve_amp_wgt_lnk_main_page;
  lnkMainPage.title = datas.sve_amp_wgt_lnk_explanation;
  lnkAboutMe.innerText = datas.sve_amp_wgt_lnk_about_me;
  // --------------------- About Me ------------------------
  // -- ------------------- --------------------------------
  imgAboutMe.alt = datas.sve_amp_wgt_img_about_me;
  pgfAboutMe.innerText = datas.sve_amp_wgt_pgf_about_me;
})

// ------------------ --------------- ---------------