var tusKarsila = document.getElementById("asf-tus-karsila");
var etkCikti = document.getElementById("asf-etk-cikti");



var dlDil = navigator.language || navigator.userLanguage;
var mtnKarsila;


/*
UYARI: Aşağıdaki metinlerin çok olması durumunda "json" formatlı dosyadan 
faydalınabilir. Çünkü metinler birikirse "case" kısmına yazılması zorlaşır.
*/
switch (dlDil) {
    case "tr-TR":
        mtnKarsila = "Hoşgeldiniz.";
        break;

    case "es-ES":
        mtnKarsila = "Bienvenido.";
        break;
  
    default:
        mtnKarsila = "Welcome.";
}



tusKarsila.onclick = function()
{
    etkCikti.innerText = mtnKarsila;
}