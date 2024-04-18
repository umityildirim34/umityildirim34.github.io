// ----------------------------- Head Side --------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
var ttlPageTitle = document.getElementById("onp-ttl-page-title");

// ------------------------------- Header ---------------------------------
// ------------------------------------------------------------------------
var lnkMainPage = document.getElementById("onp-lnk-main-page");
var lnkOurNetworks = document.getElementById("onp-lnk-our-networks");

// ------------------------------- Network --------------------------------
// ------------------------------------------------------------------------
var icnWhatsapp = document.getElementById("onp-icn-whatsapp");
var lnkWhatsapp = document.getElementById("onp-lnk-whatsapp");
var icnTelegram = document.getElementById("onp-icn-telegram");
var lnkTelegram = document.getElementById("onp-lnk-telegram");
var icnInstagram = document.getElementById("onp-icn-instagram");
var lnkInstagram = document.getElementById("onp-lnk-instagram");



// ------------------ Language ---------------------

var lgLanguage = navigator.language || navigator.userLanguage;
var strBody, strNumber, strUrl;



switch (lgLanguage) {
  case "tr-TR":
    strUrl = "resource/language/turkish/our-networks.json";
    break;
  
  default:
    strUrl = "resource/language/english/our-networks.json";
}


fetch(strUrl).then(res => res.json()).then(datas => {
  // ----------------------------- Head Side --------------------------------
  // ------------------------------------------------------------------------
  // ------------------------------------------------------------------------
  ttlPageTitle.innerText = datas.sve_onp_wgt_ttl_page_title;

  // ------------------------------- Header ---------------------------------
  // ------------------------------------------------------------------------
  lnkMainPage.innerText = datas.sve_onp_wgt_lnk_main_page;
  lnkMainPage.title = datas.sve_onp_wgt_lnk_explanation;
  lnkOurNetworks.innerText = datas.sve_onp_wgt_lnk_our_networks;

  // ------------------------------- Network --------------------------------
  // ------------------------------------------------------------------------
  lnkWhatsapp.innerText = datas.sve_onp_wgt_lnk_whatsapp;
  lnkTelegram.innerText = datas.sve_onp_wgt_lnk_telegram;
  lnkInstagram.innerText = datas.sve_onp_wgt_lnk_instagram;

  icnWhatsapp.alt = datas.sve_onp_wgt_alt_icn_whatsapp;
  icnTelegram.alt = datas.sve_onp_wgt_alt_icn_telegram;
  icnInstagram.alt = datas.sve_onp_wgt_alt_icn_instagram;

  strBody = datas.sve_onp_jsp_msg_body;
  strNumber = datas.sve_onp_jsp_msg_number;
});

// ------------------ --------------- ---------------

lnkWhatsapp.onclick = function() {
  window.open("https://wa.me/" 
	+ strNumber 
	+ "?text="
	+ strBody, "_blank", "top=500,left=200, frame=true, nodeIntegration=no");
}



lnkTelegram.onclick = function() {
  window.open("https://t.me/richardlee", "_blank", "top=500,left=200, frame=true, nodeIntegration=no");
}



lnkInstagram.onclick = function() {
  window.open("https://www.instagram.com", "_blank", "top=500,left=200, frame=true, nodeIntegration=no");
}