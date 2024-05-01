var dlDil = navigator.language || navigator.userLanguage;



/*
UYARI: Aşağıdaki metinlerin çok olması durumunda "json" formatlı dosyadan 
faydalınabilir. Çünkü metinler birikirse "case" kısmına yazılması zorlaşır.
*/
switch (dlDil) {
    case "tr-TR":
        window.location.href = "MyProjects/MyCv/tr/index.html";
        break;
  
    default:
        window.location.href = "MyProjects/MyCv/en/index.html";
}