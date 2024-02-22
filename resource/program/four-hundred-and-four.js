var pgError = document.getElementById("fhfp-pg-error")
var lnMainPage = document.getElementById("fhfp-ln-main-page")



// ------------------ Language ---------------------

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
    pgError.innerText = datas.sve_fhfp_fourhundredandfour.sve_fhfp_jsp_pg_error
    lnMainPage.innerText = datas.sve_fhfp_fourhundredandfour.sve_fhfp_jsp_ln_main_page
})

// ------------------ --------------- ---------------