var isfCikti = document.getElementById("isf-etk-cikti");

var lgLanguage = Intl.DateTimeFormat().resolvedOptions().locale;



/*
UYARI: Aşağıdaki metinlerin çok olması durumunda "json" formatlı dosyadan 
faydalınabilir. Çünkü metinler birikirse "case" kısmına yazılması zorlaşır.
*/
switch (lgLanguage) {
    case "tr":
        window.location.href = "tr/main-page.html";
        isfCikti.innerText = "Yönlendiriliyorsunuz. Lütfen bekleyin...";
        break;
  
    default:
        window.location.href = "en/main-page.html";
        isfCikti.innerText = "Directing. Please wait...";
}