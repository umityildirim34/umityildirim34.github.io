// --------------------- Menu Bar ---------------------
var hrzMenuEducation = document.getElementById("map-mi-hrz-menu-education");
var hrzMenuOurNetworks = document.getElementById("map-mi-hrz-menu-our-networks");
// --------------------- Program ---------------------
var icWebsiteTitle = document.getElementById("map-tt-website-title");
var icWebsiteIcon = document.getElementById("map-ic-website-icon");
var icMenu = document.getElementById("map-ic-menu");
var icPhone = document.getElementById("map-ic-phone");
var icEmail = document.getElementById("map-ic-email");
var icAddress = document.getElementById("map-ic-address");
var imgMyPicture = document.getElementById("map-img-my-picture");
var imgDesktop = document.getElementById("map-img-desktop");
var pgNameSurname = document.getElementById("map-pg-name-surname");
var pgDepartment = document.getElementById("map-pg-department");
var lnPhoneNumber = document.getElementById("map-ln-phone-number");
var lnEmail = document.getElementById("map-ln-email");
var lnAddress = document.getElementById("map-ln-address");
// --------------------- Aside ---------------------
var vrtMenuEducation = document.getElementById("map-mi-vrt-menu-education");
var vrtMenuOurNetworks = document.getElementById("map-mi-vrt-menu-our-networks");

// var mpmMainpageMethods = new MainpageMethods();
// var gnmGeneralMethods = new GeneralMethods();



// ------------------ Language ---------------

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
    // --------------------- Menu Bar ---------------------
    hrzMenuEducation.title = datas.sve_map_mainpage.sve_map_wgt_menu_education_title;
    hrzMenuEducation.innerText = datas.sve_map_mainpage.sve_map_wgt_menu_education_item;
    hrzMenuOurNetworks.title = datas.sve_map_mainpage.sve_map_wgt_menu_our_networks_title;
    hrzMenuOurNetworks.innerText = datas.sve_map_mainpage.sve_map_wgt_menu_our_networks_item;
    // --------------------- Program ---------------------
    icWebsiteTitle.innerText = datas.sve_map_mainpage.sve_map_wgt_tt_website_title;
    icWebsiteIcon.alt = datas.sve_map_mainpage.sve_map_wgt_ic_website_icon;
    icMenu.alt = datas.sve_map_mainpage.sve_map_wgt_ic_menu_icon;
    icPhone.alt = datas.sve_map_mainpage.sve_map_wgt_ic_phone_icon;
    icEmail.alt = datas.sve_map_mainpage.sve_map_wgt_ic_email_icon;
    icAddress.alt = datas.sve_map_mainpage.sve_map_wgt_ic_address_icon;

    imgMyPicture.alt = datas.sve_map_mainpage.sve_map_wgt_img_my_picture;
    imgDesktop.alt = datas.sve_map_mainpage.sve_map_wgt_img_desktop;

    pgNameSurname.innerText = datas.sve_map_mainpage.sve_map_wgt_pg_name_surname;
    pgDepartment.innerText = datas.sve_map_mainpage.sve_map_wgt_pg_department;

    lnPhoneNumber.innerText = datas.sve_map_mainpage.sve_map_wgt_ln_phone_number;
    lnEmail.innerText = datas.sve_map_mainpage.sve_map_wgt_ln_email;
    lnAddress.innerText = datas.sve_map_mainpage.sve_map_wgt_ln_address;
    //   // --------------------- We writed our method here ---------------------
    // gnmGeneralMethods.stopAppSpeciedDaysLater(btnAdd, btnUpdate, strUseRight);
    //   //
    
    // --------------------- Aside ---------------------
    vrtMenuEducation.title = datas.sve_map_mainpage.sve_map_wgt_menu_education_title;
    vrtMenuEducation.innerText = datas.sve_map_mainpage.sve_map_wgt_menu_education_item;
    vrtMenuOurNetworks.title = datas.sve_map_mainpage.sve_map_wgt_menu_our_networks_title;
    vrtMenuOurNetworks.innerText = datas.sve_map_mainpage.sve_map_wgt_menu_our_networks_item;
})



lnEmail.onclick = function() {
  window.open("https://wa.me/" 
	+ strNumber 
	+ "?text="
	+ strBody, "_blank", "top=500,left=200, frame=true, nodeIntegration=no");
}



// --------------------- Menü ---------------------
var dvBody = document.getElementsByTagName("body")[0];
var icMenu = document.getElementById("map-ic-menu");
var asMenuList = document.getElementById("map-as-menu-lst");
var btnMenuListClose = document.getElementById("map-btn-menu-lst-close");



icMenu.onclick = function() {
  asMenuList.style.width = "70vw";
  dvBody.style.background = "#b9b9b5";
}



window.addEventListener('click', function(e) {
  if (!asMenuList.contains(e.target) && (!icMenu.contains(e.target))) {
    asMenuList.style.width = "0vw";
    dvBody.style.background = "#ffffff";
  } 
});



btnMenuListClose.onclick = function() {
  asMenuList.style.width = "0vw";
  dvBody.style.background = "#ffffff";
}
// --------------------- ---- ---------------------