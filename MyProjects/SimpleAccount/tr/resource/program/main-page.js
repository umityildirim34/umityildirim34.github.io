
// --------------------- Process ----------------------
// ----------------------------------------------------
var inpAccountName = document.getElementById("map-inp-account-name");
var btnClear1 = document.getElementById("map-btn-clear1");
var inpAccountQuantity = document.getElementById("map-inp-account-quantity");
var btnClear2 = document.getElementById("map-btn-clear2");
var inpAccountDetail = document.getElementById("map-inp-account-detail");
var btnClear3 = document.getElementById("map-btn-clear3");

var sltAccounts = document.getElementById("map-slt-accounts");

var btnAddAccount = document.getElementById("map-btn-add-account");
var btnExtractOfAccount = document.getElementById("map-btn-extract-of-account");
var btnIncreaseQuantity = document.getElementById("map-btn-increase-quantity");
var btnReduceQuantity = document.getElementById("map-btn-reduce-quantity");
var btnTotal = document.getElementById("map-btn-total");
var btnDeleteAccount = document.getElementById("map-btn-delete-account");
var btnClear = document.getElementById("map-btn-clear");
var btnReset = document.getElementById("map-btn-reset");

var divTable = document.getElementById("map-div-table");
var tblMyTable = document.getElementById("map-tbl-my-table");

var cthAccountOrder = document.getElementById("map-cth-account-order");
var cthActiveAccountName = document.getElementById("map-cth-active-account-name");
var cthActiveAccountQuantity = document.getElementById("map-cth-active-account-quantity");
var cthActiveAccountDetail = document.getElementById("map-cth-active-account-detail");
var cthPassiveAccountName = document.getElementById("map-cth-passive-account-name");
var cthPassiveAccountQuantity = document.getElementById("map-cth-passive-account-quantity");
var cthPassiveAccountDetail = document.getElementById("map-cth-passive-account-detail");
var cthAccountType = document.getElementById("map-cth-account-type");



// ------------------------ Language -----------------------
var lgLanguage = Intl.DateTimeFormat().resolvedOptions().locale;
var strUrl;
var strAHundredThousandException, strCharacterCountException, strNegativeValueException, strNoAccountExistsException, strNoSelectedValueException, strNullValueException, strTableHeadException;
var strUseRight, strDialogQuestion;
var intSelectedIndex, strChoosen, strTodayDateAndTime;
var strInfoActiveAccountQuantity, strInfoPassiveAccountQuantity, strInfoDifference;

var mpmMainpageMethods = new MainpageMethods();
var gnmGeneralMethods = new GeneralMethods();



switch (lgLanguage) {
  case "tr":
    strAHundredThousandException = "Afedersiniz. En fazla 100000 değer girilebilir.";
    strCharacterCountException = "Afedersiniz. En fazla 50 karakter girilebilir.";
    strNegativeValueException = "Afedersiniz. 0'ın altında değer girilemez.";
    strNoAccountExistsException = "Afedersiniz. Henüz hesap eklemediniz.";
    strNoSelectedValueException = "Afedersiniz. Herhangi bir seçim yapmadınız.";
    strNullValueException = "Afedersiniz. Boş yazı alanı var.";
    strTableHeadException = "Afedersiniz. Tablo başlığıyla ilgili işlem yapılamaz.";

    strInfoActiveAccountQuantity = "Toplam Aktif Hesap Miktarı:";
    strInfoPassiveAccountQuantity = "Toplam Pasif Hesap Miktarı:";
    strInfoDifference = "Fark:";
    strUseRight = "Uygulamanın kullanım hakkı bitmiştir.";
    strDialogQuestion = "Tabloyu sıfırlamak istediğinize emin misiniz?";
    break;
  
  default:
    strAHundredThousandException = "Sorry. Maximum 100000 value are allowed.";
    strCharacterCountException = "Sorry. Maximum 50 characters are allowed.";
    strNegativeValueException = "Sorry. Negative value is not allowed.";
    strNoAccountExistsException = "Sorry. You have added no account yet.";
    strNoSelectedValueException = "Sorry. You have selected no option yet.";
    strNullValueException = "Sorry. There is empty input.";
    strTableHeadException = "Sorry. No action can be taken on the table header.";

    strInfoActiveAccountQuantity = "Total Active Account Quantity:";
    strInfoPassiveAccountQuantity = "Total Passive Account Quantity:";
    strInfoDifference = "Difference:";
    strUseRight = "The use right of the app ended.";
    strDialogQuestion = "Are you sure to reset the table?";
}



// --------------------- Menü ---------------------
var divBody = document.getElementsByTagName("body")[0];
var icnMenu = document.getElementById("map-icn-menu");
var asdMenuList = document.getElementById("map-asd-menu-lst");
var btnMenuListClose = document.getElementById("map-btn-menu-lst-close");



icnMenu.onclick = function() {
  asdMenuList.style.width = "70vw";
  divBody.style.background = "#b9b9b5";
}



window.addEventListener('click', function(e) {
  if (!asdMenuList.contains(e.target) && (!icnMenu.contains(e.target))) {
    asdMenuList.style.width = "0vw";
    divBody.style.background = "#ffffff";
  }
});



btnMenuListClose.onclick = function() {
  asdMenuList.style.width = "0vw";
  divBody.style.background = "#ffffff";
}

// ************************ Program ************************
var rowAddRow, rowDeleteRow, tblClearTable;
var cllAccountOrder, cllActiveAccountName, cllActiveAccountQuantity, cllActiveAccountDetail, cllPassiveAccountName, cllPassiveAccountQuantity, cllPassiveAccountDetail, cllAccountType;
var intSelectedTableRowOrder, strTableActiveAccountQuantity, strTableActiveAccountDetail, strTablePassiveAccountQuantity, strTablePassiveAccountDetail, strTableAccountType;
var intDatabaseRowCount, intIncreasedValue, intReducedValue, intTableRowOrder, intSelectedQuantityCellValue, intRoundedIncreasedValue, intRoundedReducedValue, strIncreasedValue, strReducedValue, strSelectedAccountTypeCellText, strSelectedDateCellText, strSelectedQuantityCellValue, i;
var strSelectAccountType;
var strGettingAccountName, strGettingAccountQuantity, intGettingAccountQuantity, intGettingRoundedAccountQuantity, intCurrentAccountQuantity, strGettingAccountDetail;
var intTableRowCount;



mpmMainpageMethods.getListed2();

btnExtractOfAccount.disabled = true;
btnIncreaseQuantity.disabled = true;
btnReduceQuantity.disabled = true;
btnDeleteAccount.disabled = true;



window.onload = function () {
  divTable.onclick = function(olay) {
      intTableRowOrder = olay.target.parentElement.rowIndex;
      intSelectedTableRowOrder = olay.target.parentElement.cells[0].innerHTML;

      strTableActiveAccountQuantity = olay.target.parentElement.cells[2].innerHTML;
      strTableActiveAccountDetail = olay.target.parentElement.cells[3].innerHTML;
      strTablePassiveAccountQuantity = olay.target.parentElement.cells[5].innerHTML;
      strTablePassiveAccountDetail = olay.target.parentElement.cells[6].innerHTML;
      strTableAccountType = olay.target.parentElement.cells[7].innerHTML;
      
      btnExtractOfAccount.disabled = false;
      btnIncreaseQuantity.disabled = false;
      btnReduceQuantity.disabled = false;
      btnDeleteAccount.disabled = false;
  }
}



btnClear1.onclick = function() {
  inpAccountName.value = "";
}



btnClear2.onclick = function() {
  inpAccountQuantity.value = "";
}



btnClear3.onclick = function() {
  inpAccountDetail.value = "";
}





btnAddAccount.onclick = function() {
  
  try {
    intSelectedIndex = sltAccounts.selectedIndex;
    strSelectAccountType = sltAccounts.options[intSelectedIndex].value;
    strTodayDateAndTime = gnmGeneralMethods.todayDateAndTime();

    strGettingAccountName = inpAccountName.value;
    strGettingAccountDetail = "(" + strTodayDateAndTime + ") " + inpAccountDetail.value + " (" + inpAccountQuantity.value + ")";
    strGettingAccountQuantity = inpAccountQuantity.value;
    intGettingAccountQuantity = Number(strGettingAccountQuantity);
    intGettingRoundedAccountQuantity = intGettingAccountQuantity.toFixed(2);

    if (intGettingAccountQuantity > 100000) {
      throw new AHundredThousandException(strAHundredThousandException);
    }
    else if (strGettingAccountName.length > 50 || inpAccountDetail.value.length > 50) {
      throw new CharacterCountException(strCharacterCountException);
    }
    else if (intGettingAccountQuantity < 0) {
      throw new NegativeValueException(strNegativeValueException);
    }
    else if (strSelectAccountType == "pls-choose") {
      throw new NoSelectedValueException(strNoSelectedValueException);
    }
    else if (strGettingAccountName.length == 0 || intGettingAccountQuantity.length == 0 || inpAccountDetail.value.length == 0) {
      throw new NullValueException(strNullValueException);
    }
    else if (strSelectAccountType == "active-account") {
      mpmMainpageMethods.addAccount(strGettingAccountName, intGettingRoundedAccountQuantity, strGettingAccountDetail, "-", "-", "-", strSelectAccountType);

      for(var i = 1; i < tblMyTable.rows.length;){
        tblMyTable.deleteRow(i);
      }
      
      mpmMainpageMethods.getListed();

      btnExtractOfAccount.disabled = true;
      btnIncreaseQuantity.disabled = true;
      btnReduceQuantity.disabled = true;
      btnDeleteAccount.disabled = true;
    }
    else if (strSelectAccountType == "passive-account") {
      mpmMainpageMethods.addAccount("-", "-", "-", strGettingAccountName, intGettingRoundedAccountQuantity, strGettingAccountDetail, strSelectAccountType);

      for(var i = 1; i < tblMyTable.rows.length;){
        tblMyTable.deleteRow(i);
      }
      
      mpmMainpageMethods.getListed();

      btnExtractOfAccount.disabled = true;
      btnIncreaseQuantity.disabled = true;
      btnReduceQuantity.disabled = true;
      btnDeleteAccount.disabled = true;
    }

  }
  catch (Hata) {
    alert(Hata.message);
  }

}



btnExtractOfAccount.onclick = function() {

  if (strTableAccountType == "active-account") {
    alert(strTableActiveAccountDetail);
  }
  else if (strTableAccountType == "passive-account") {
    alert(strTablePassiveAccountDetail);
  }

}



btnIncreaseQuantity.onclick = function() {

  try {

    strGettingAccountQuantity = inpAccountQuantity.value;
    intGettingAccountQuantity = Number(strGettingAccountQuantity);

    if (strGettingAccountQuantity > 100000) {
      throw new AHundredThousandException(strAHundredThousandException);
    }
    else if (inpAccountDetail.value.length > 50) {
      throw new CharacterCountException(strCharacterCountException);
    }
    else if (strGettingAccountQuantity < 0) {
      throw new NegativeValueException(strNegativeValueException);
    }
    else if (strGettingAccountQuantity.length == 0  || inpAccountDetail.value.length == 0) {
      throw new NullValueException(strNullValueException);
    }
    else if (intSelectedTableRowOrder == "SIRA" || intSelectedTableRowOrder == "ORDER") {
      throw new TableHeadException(strTableHeadException);
    }
    else if (strTableAccountType == "active-account") {

      intCurrentAccountQuantity = Number(strTableActiveAccountQuantity);

      intIncreasedValue = intCurrentAccountQuantity += intGettingAccountQuantity;

      intRoundedIncreasedValue = Number(intIncreasedValue.toFixed(2));

      strTodayDateAndTime = gnmGeneralMethods.todayDateAndTime();
      strGettingAccountDetail = strTableActiveAccountDetail + "\n\n" + "(" + strTodayDateAndTime + ") " + inpAccountDetail.value + " (" + strTableActiveAccountQuantity + " + "  + inpAccountQuantity.value + " = " + intRoundedIncreasedValue + ")";

      mpmMainpageMethods.increaseOrReduceQuantity(intRoundedIncreasedValue, strGettingAccountDetail, intSelectedTableRowOrder, strTableAccountType);

      cllActiveAccountQuantity = tblMyTable.rows[intTableRowOrder].cells[2];
      cllActiveAccountDetail = tblMyTable.rows[intTableRowOrder].cells[3];
      cllActiveAccountQuantity.innerText = intRoundedIncreasedValue;
      cllActiveAccountDetail.innerText = strGettingAccountDetail;

      btnExtractOfAccount.disabled = true;
      btnIncreaseQuantity.disabled = true;
      btnReduceQuantity.disabled = true;
      btnDeleteAccount.disabled = true;
    }
    else if (strTableAccountType == "passive-account") {
      intCurrentAccountQuantity = Number(strTablePassiveAccountQuantity);

      intIncreasedValue = intCurrentAccountQuantity += intGettingAccountQuantity;

      intRoundedIncreasedValue = Number(intIncreasedValue.toFixed(2));

      strTodayDateAndTime = gnmGeneralMethods.todayDateAndTime();
      strGettingAccountDetail = strTablePassiveAccountDetail + "\n\n" + "(" + strTodayDateAndTime + ") " + inpAccountDetail.value + " (" + strTablePassiveAccountQuantity + " + "  + inpAccountQuantity.value + " = " + intRoundedIncreasedValue + ")";

      mpmMainpageMethods.increaseOrReduceQuantity(intRoundedIncreasedValue, strGettingAccountDetail, intSelectedTableRowOrder, strTableAccountType);

      cllPassiveAccountQuantity = tblMyTable.rows[intTableRowOrder].cells[5];
      cllPassiveAccountDetail = tblMyTable.rows[intTableRowOrder].cells[6];
      cllPassiveAccountQuantity.innerText = intRoundedIncreasedValue;
      cllPassiveAccountDetail.innerText = strGettingAccountDetail;

      btnExtractOfAccount.disabled = true;
      btnIncreaseQuantity.disabled = true;
      btnReduceQuantity.disabled = true;
      btnDeleteAccount.disabled = true;
    }
    
  }
  catch (Hata) {
    alert(Hata.message);
  }

}



btnReduceQuantity.onclick = function() {

  try {

    strGettingAccountQuantity = inpAccountQuantity.value;
    intGettingAccountQuantity = Number(strGettingAccountQuantity);

    if (strGettingAccountQuantity > 100000) {
      throw new AHundredThousandException(strAHundredThousandException);
    }
    else if (inpAccountDetail.value.length > 50) {
      throw new CharacterCountException(strCharacterCountException);
    }
    else if (strGettingAccountQuantity < 0) {
      throw new NegativeValueException(strNegativeValueException);
    }
    else if (strGettingAccountQuantity.length == 0  || inpAccountDetail.value.length == 0) {
      throw new NullValueException(strNullValueException);
    }
    else if (intSelectedTableRowOrder == "SIRA" || intSelectedTableRowOrder == "ORDER") {
      throw new TableHeadException(strTableHeadException);
    }
    else if (strTableAccountType == "active-account") {

      intCurrentAccountQuantity = Number(strTableActiveAccountQuantity);

      intReducedValue = intCurrentAccountQuantity -= intGettingAccountQuantity;

      intRoundedReducedValue = Number(intReducedValue.toFixed(2));

      strTodayDateAndTime = gnmGeneralMethods.todayDateAndTime();
      strGettingAccountDetail = strTableActiveAccountDetail + "\n\n" + "(" + strTodayDateAndTime + ") " + inpAccountDetail.value + " (" + strTableActiveAccountQuantity + " - "  + inpAccountQuantity.value + " = " + intRoundedReducedValue + ")";

      mpmMainpageMethods.increaseOrReduceQuantity(intRoundedReducedValue, strGettingAccountDetail, intSelectedTableRowOrder, strTableAccountType);

      cllActiveAccountQuantity = tblMyTable.rows[intTableRowOrder].cells[2];
      cllActiveAccountDetail = tblMyTable.rows[intTableRowOrder].cells[3];
      cllActiveAccountQuantity.innerText = intRoundedReducedValue;
      cllActiveAccountDetail.innerText = strGettingAccountDetail;

      btnExtractOfAccount.disabled = true;
      btnIncreaseQuantity.disabled = true;
      btnReduceQuantity.disabled = true;
      btnDeleteAccount.disabled = true;
    }
    else if (strTableAccountType == "passive-account") {
      intCurrentAccountQuantity = Number(strTablePassiveAccountQuantity);

      intReducedValue = intCurrentAccountQuantity -= intGettingAccountQuantity;

      intRoundedReducedValue = Number(intReducedValue.toFixed(2));

      strTodayDateAndTime = gnmGeneralMethods.todayDateAndTime();
      strGettingAccountDetail = strTablePassiveAccountDetail + "\n\n" + "(" + strTodayDateAndTime + ") " + inpAccountDetail.value + " (" + strTablePassiveAccountQuantity + " - "  + inpAccountQuantity.value + " = " + intRoundedReducedValue + ")";

      mpmMainpageMethods.increaseOrReduceQuantity(intRoundedReducedValue, strGettingAccountDetail, intSelectedTableRowOrder, strTableAccountType);

      cllPassiveAccountQuantity = tblMyTable.rows[intTableRowOrder].cells[5];
      cllPassiveAccountDetail = tblMyTable.rows[intTableRowOrder].cells[6];
      cllPassiveAccountQuantity.innerText = intRoundedReducedValue;
      cllPassiveAccountDetail.innerText = strGettingAccountDetail;

      btnExtractOfAccount.disabled = true;
      btnIncreaseQuantity.disabled = true;
      btnReduceQuantity.disabled = true;
      btnDeleteAccount.disabled = true;
    }
    
  }
  catch (Hata) {
    alert(Hata.message);
  }

}



btnTotal.onclick = function() {

  try {

    intTableRowCount = tblMyTable.rows.length;
    
    if (intTableRowCount == 1) {
      throw new NoAccountExistsException(strNoAccountExistsException);
    }
    else {

      alert(mpmMainpageMethods.total(strInfoActiveAccountQuantity, strInfoPassiveAccountQuantity, strInfoDifference));

    }
    
  }
  catch (MyException) {
    alert(MyException.message);
  }

}



btnDeleteAccount.onclick = function() {

  try {

    if (intSelectedTableRowOrder == "SIRA" || intSelectedTableRowOrder == "ORDER") {
      throw new TableHeadException(strTableHeadException);
    }
    else {
      mpmMainpageMethods.deleteAccount(intSelectedTableRowOrder);
    
      tblMyTable.deleteRow(intTableRowOrder);
    
      btnExtractOfAccount.disabled = true;
      btnIncreaseQuantity.disabled = true;
      btnReduceQuantity.disabled = true;
      btnDeleteAccount.disabled = true;
    }

  } catch (MyException) {
    alert(MyException.message);
  }

}



btnReset.onclick = function() {
  var cfConfirmQuestion = window.confirm(strDialogQuestion);
  
  if (cfConfirmQuestion) {
    mpmMainpageMethods.reset();
  }
}
 

  


