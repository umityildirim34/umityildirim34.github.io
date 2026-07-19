// ----------------------------- Head Side --------------------------------
// ------------------------------------------------------------------------
let ttlPageTitle = document.getElementById("fhfp-ttl-page-title");
// ----------------------------- Link Path --------------------------------
// ------------------------------------------------------------------------
let lnkMainPage = document.getElementById("fhfp-lnk-main-page");
let lnkFourHundredAndFour = document.getElementById("fhfp-lnk-four-hundred-and-four");
// ------------------------------- Process --------------------------------
// ------------------------------------------------------------------------
let tt1Error = document.getElementById("fhfp-tt1-error");
let pgfError = document.getElementById("fhfp-pgf-error");



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
  // ------------------ Head Side --------------------
  ttlPageTitle.innerText = info.html.str_ttl_page_title;
  // ------------------ Link Path --------------------
  lnkMainPage.innerText = info.html.link_path.str_lnk_main_page;
  lnkFourHundredAndFour.innerText = info.html.link_path.str_lnk_four_hundred_and_four;
  // ------------------- Process ---------------------
  tt1Error.innerText = info.html.process.str_tt1_error;
  pgfError.innerText = info.html.process.str_pgf_error;
  // -------------------------------------------------
});