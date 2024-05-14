var pgfDirection = document.getElementById("idp-pgf-direction");
var dlDil = navigator.language || navigator.userLanguage;



/*
UYARI: Aşağıdaki metinlerin çok olması durumunda "json" formatlı dosyadan 
faydalınabilir. Çünkü metinler birikirse "case" kısmına yazılması zorlaşır.
*/
switch (dlDil) {
    case "tr-TR":
        window.location.href = "tr/main-page.html";
        pgfDirection.innerText = "Yönlendiriliyorsunuz. Lütfen bekleyin...";
        break;
  
    default:
        window.location.href = "en/main-page.html";
        pgfDirection.innerText = "Directing. Please wait...";
}