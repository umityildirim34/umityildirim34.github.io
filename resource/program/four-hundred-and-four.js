var pgfError = document.getElementById("fhfp-pgf-error");
var lnkMainPage = document.getElementById("fhfp-lnk-main-page");



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
    pgfError.innerText = datas.sve_fhfp_fourhundredandfour.sve_fhfp_jsp_pgf_error
    lnkMainPage.innerText = datas.sve_fhfp_fourhundredandfour.sve_fhfp_jsp_lnk_main_page
});

// ------------------ --------------- ---------------