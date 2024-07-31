// --------------------- Head Side ---------------------
// -----------------------------------------------------
var ttlPageTitle = document.getElementById("onp-ttl-page-title");

// ------------------- Website Path --------------------

var lnkWhatsapp = document.getElementById("onp-lnk-whatsapp");
var lnkTelegram = document.getElementById("onp-lnk-telegram");
var lnkWebsite = document.getElementById("onp-lnk-website");



// -------------------------- Language ----------------------------
var lgLanguage = Intl.DateTimeFormat().resolvedOptions().locale;
var strBody, strEmail, strSubject, strUrl;
var strNumber = "+905445258201";



switch (lgLanguage) {
  case "tr":
    strBody = "Merhabalar&nbsp;";
    strSubject = "Merhaba.&nbsp;";
    break;
  
  default:
    strBody = "Hello&nbsp;";
    strSubject = "Hello&nbsp;";
}



// --------------------------------------------------

lnkWhatsapp.onclick = function() {
  window.open("https://wa.me/" 
	+ strNumber 
	+ "?text="
	+ strBody, "_blank", "top=500,left=200, frame=true, nodeIntegration=no");
}



lnkTelegram.onclick = function() {
  window.open("https://t.me/umityildirim34", "_blank", "top=500,left=200, frame=true, nodeIntegration=no");
}



lnkWebsite.onclick = function() {
  window.open("https://umityildirim34.github.io", "_blank", "top=500,left=200, frame=true, nodeIntegration=no");
}