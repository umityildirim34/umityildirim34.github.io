var etkCikti = document.getElementById("isf-etk-cikti");
var dlDil = navigator.language || navigator.userLanguage;



/*
UYARI: Aşağıdaki metinlerin çok olması durumunda "json" formatlı dosyadan 
faydalınabilir. Çünkü metinler birikirse "case" kısmına yazılması zorlaşır.
*/
switch (dlDil) {
    case "tr-TR":
        window.location.href = "tr/main-page.html";
        etkCikti.innerText = "Yönlendiriliyorsunuz. Lütfen bekleyin...";
        break;
  
    default:
        window.location.href = "en/main-page.html";
        etkCikti.innerText = "Directing. Please wait...";
}