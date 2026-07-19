var pgfOutput = document.getElementById("inp-pgf-output");



const strLanguage = Intl.DateTimeFormat().resolvedOptions().locale.split("-")[0];


/*
UYARI: Aşağıdaki metinlerin çok olması durumunda "json" formatlı dosyadan
faydalınabilir. Çünkü metinler birikirse "case" kısmına yazılması zorlaşır.
*/
switch (strLanguage) {
   case "tr":
      window.location.href = "main-page/main-page-codes/widget/main-page.html";
      pgfOutput.innerText = "Yönlendiriliyorsunuz. Lütfen bekleyin...";
      break;

   default:
      window.location.href = "main-page/main-page-codes/widget/main-page.html";
      pgfOutput.innerText = "Directing. Please wait...";
}