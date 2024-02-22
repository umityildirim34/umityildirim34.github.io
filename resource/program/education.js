var ttlPageTitle = document.getElementById("edp-ttl-page-title");
var lnMainPage = document.getElementById("edp-ln-main-page");
var lnEducation = document.getElementById("edp-ln-education");
var icBau = document.getElementById("edp-ic-bau");
var lnBau = document.getElementById("edp-ln-bau");
var icBtk = document.getElementById("edp-ic-btk");
var lnBtk = document.getElementById("edp-ln-btk");
var icAun = document.getElementById("edp-ic-aun");
var lnAun = document.getElementById("edp-ln-aun");



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
  ttlPageTitle.innerText = datas.sve_edp_education.sve_edp_wgt_ttl_page_title;
  lnMainPage.innerText = datas.sve_edp_education.sve_edp_wgt_ln_main_page;
  lnMainPage.title = datas.sve_edp_education.sve_edp_wgt_ln_explanation;
  lnEducation.innerText = datas.sve_edp_education.sve_edp_wgt_ln_education;

  lnBau.innerText = datas.sve_edp_education.sve_edp_wgt_ln_bau;
  lnBtk.innerText = datas.sve_edp_education.sve_edp_wgt_ln_btk;
  lnAun.innerText = datas.sve_edp_education.sve_edp_wgt_ln_aun;

  lnBau.alt = datas.sve_edp_education.sve_edp_wgt_alt_ic_bau;
  lnBtk.alt = datas.sve_edp_education.sve_edp_wgt_alt_ic_btk;
  lnAun.alt = datas.sve_edp_education.sve_edp_wgt_alt_ic_aun;
})

// ------------------ --------------- ---------------