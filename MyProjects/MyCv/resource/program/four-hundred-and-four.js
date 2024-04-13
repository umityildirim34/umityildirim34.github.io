// ----------------------------- Head Side --------------------------------
// ------------------------------------------------------------------------
var ttlPageTitle = document.getElementById("fhfp-ttl-page-title");
// ----------------------------- Link Path --------------------------------
// ------------------------------------------------------------------------
var lnkMainPage = document.getElementById("fhfp-lnk-main-page");
var lnkFourHundredAndFour = document.getElementById("fhfp-lnk-four-hundred-and-four");
// ------------------------------- Process --------------------------------
// ------------------------------------------------------------------------
var tt1Error = document.getElementById("fhfp-tt1-error");
var pgfError = document.getElementById("fhfp-pgf-error");



// ------------------ Language ---------------------

var lgLanguage = navigator.language || navigator.userLanguage;
var strUrl;


switch (lgLanguage) {
  case "tr-TR":
    strUrl = "resource/language/turkish.json";
    break;
  
  default:
    strUrl = "resource/language/english.json";
}


fetch(strUrl).then(res => res.json()).then(datas => {
  // ----------------------------- Head Side --------------------------------
  // ------------------------------------------------------------------------
  ttlPageTitle.innerText = datas.sve_fhfp_four_hundred_and_four.sve_fhfp_wgt_head_side.sve_fhfp_wgt_tt1_page_title;
  // ----------------------------- Link Path --------------------------------
  // ------------------------------------------------------------------------
  lnkMainPage.innerText = datas.sve_fhfp_four_hundred_and_four.sve_fhfp_wgt_link_path.sve_fhfp_wgt_lnk_main_page;
  lnkFourHundredAndFour.innerText = datas.sve_fhfp_four_hundred_and_four.sve_fhfp_wgt_link_path.sve_fhfp_wgt_lnk_four_hundred_and_four;
  // ------------------------------- Process --------------------------------
  // ------------------------------------------------------------------------
  tt1Error.innerText = datas.sve_fhfp_four_hundred_and_four.sve_fhfp_wgt_process.sve_fhfp_wgt_tt1_error;
  pgfError.innerText = datas.sve_fhfp_four_hundred_and_four.sve_fhfp_wgt_process.sve_fhfp_wgt_pgf_error;
})

// ------------------ --------------- ---------------