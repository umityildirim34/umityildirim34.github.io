var ttlPageTitle = document.getElementById("onp-ttl-page-title");
var lnMainPage = document.getElementById("onp-ln-main-page");
var lnOurNetworks = document.getElementById("onp-ln-our-networks");

var pgDeveloper = document.getElementById("onp-pg-developer");
var icWhatsapp = document.getElementById("onp-ic-whatsapp");
var lnWhatsapp = document.getElementById("onp-ln-whatsapp");
var icTelegram = document.getElementById("onp-ic-telegram");
var lnTelegram = document.getElementById("onp-ln-telegram");
var icInstagram = document.getElementById("onp-ic-instagram");
var lnInstagram = document.getElementById("onp-ln-instagram");



// ------------------ Language ---------------------

var lgLanguage = navigator.language || navigator.userLanguage;
var strBody, strNumber, strUrl;



switch (lgLanguage) {
  case "tr-TR":
    strUrl = "resource/language/turkish.json";
    break;
  
  default:
    strUrl = "resource/language/english.json";
}


fetch(strUrl).then(res => res.json()).then(datas => {
  ttlPageTitle.innerText = datas.sve_onp_our_networks.sve_onp_wgt_ttl_page_title;
  lnMainPage.innerText = datas.sve_onp_our_networks.sve_onp_wgt_ln_main_page;
  lnMainPage.title = datas.sve_onp_our_networks.sve_onp_wgt_ln_explanation;
  lnOurNetworks.innerText = datas.sve_onp_our_networks.sve_onp_wgt_ln_our_networks;

  lnWhatsapp.innerText = datas.sve_onp_our_networks.sve_onp_wgt_ln_whatsapp;
  lnTelegram.innerText = datas.sve_onp_our_networks.sve_onp_wgt_ln_telegram;
  lnInstagram.innerText = datas.sve_onp_our_networks.sve_onp_wgt_ln_instagram;

  icWhatsapp.alt = datas.sve_onp_our_networks.sve_onp_wgt_alt_ic_whatsapp;
  icTelegram.alt = datas.sve_onp_our_networks.sve_onp_wgt_alt_ic_telegram;
  icInstagram.alt = datas.sve_onp_our_networks.sve_onp_wgt_alt_ic_instagram;

  strBody = datas.sve_onp_our_networks.sve_onp_jsp_msg_body;
  strNumber = datas.sve_onp_our_networks.sve_onp_jsp_msg_number;
})

// ------------------ --------------- ---------------

lnWhatsapp.onclick = function() {
  window.open("https://wa.me/" 
	+ strNumber 
	+ "?text="
	+ strBody, "_blank", "top=500,left=200, frame=true, nodeIntegration=no");
}



lnTelegram.onclick = function() {
  window.open("https://t.me/umityildirim34", "_blank", "top=500,left=200, frame=true, nodeIntegration=no");
}



lnInstagram.onclick = function() {
  window.open("https://www.instagram.com/umityildirim3410", "_blank", "top=500,left=200, frame=true, nodeIntegration=no");
}