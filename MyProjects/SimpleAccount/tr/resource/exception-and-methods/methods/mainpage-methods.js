var divTable = document.getElementById("map-div-table");
var tblMyTable = document.getElementById("map-tbl-my-table");



var rowAddRow, rowDeleteRow, tblClearTable;
var cllAccountOrder, cllActiveAccountName, cllActiveAccountQuantity, cllActiveAccountDetail, cllPassiveAccountName, cllPassiveAccountQuantity, cllPassiveAccountDetail, cllAccountType;
var intDatabaseRowCount, intTableRowOrder, intTableRowCount, i;
var intTotalActiveAccountQuantity, intTotalPassiveAccountQuantity, intDifference;
var requestUpdate;

var dbName = "simple_account";



class MainpageMethods {

    addAccount(strActiveAccountName, intActiveAccountQuantity, strActiveAccountDetail, strPassiveAccountName, intPassiveAccountQuantity, strPassiveAccountDetail, strAccountType) {
        
        // ------------------ Veritabanı oluşturma ------------------
        var openRequest = window.indexedDB.open(dbName, 1);

        // ---------------------- Tablo oluşturma ---------------------
        openRequest.onupgradeneeded = function(olay) {
            const db = olay.target.result;

            if (!db.objectStoreNames.contains("my_list")) {
                const objectStore = db.createObjectStore("my_list", { keyPath: "id", autoIncrement: true });
            }
        };
            
        // ------------------------ Veri ekleme -----------------------
        openRequest.onsuccess = function(olay) {

            const db = olay.target.result;
            const transaction = db.transaction(["my_list"], "readwrite");
            const objectStore = transaction.objectStore("my_list");

            const account = { active_account_name: strActiveAccountName, active_account_quantity: intActiveAccountQuantity, active_account_detail: strActiveAccountDetail, passive_account_name: strPassiveAccountName, passive_account_quantity: intPassiveAccountQuantity, passive_account_detail: strPassiveAccountDetail, account_type: strAccountType };
            const addRequest = objectStore.add(account);

        };

    }



    async getExtractOfAccount(intSelectedId, strAccountType) {

        var openRequest = window.indexedDB.open(dbName, 1);

        openRequest.onsuccess = function(event) {
            const db = event.target.result;
            const transaction = db.transaction(["my_list"], "readwrite");
            const objectStore = transaction.objectStore("my_list");
        
            const getRequest = objectStore.get(Number(intSelectedId));
        
            getRequest.onsuccess = function(event) {
                var data = event.target.result;

                if (strAccountType == "active-account") {
                    var a = data.active_account_detail;
                    return a;
                }
                else if (strAccountType == "passive-account") {
                    var b = data.passive_account_detail;
                    return b;
                }
                
            };

        }

    }



    getAccountQuantity(intSelectedId, strAccountType) {

        var openRequest = window.indexedDB.open(dbName, 1);

        openRequest.onsuccess = function(event) {
            const db = event.target.result;
            const transaction = db.transaction(["my_list"], "readwrite");
            const objectStore = transaction.objectStore("my_list");
        
            const getRequest = objectStore.get(Number(intSelectedId));
        
            getRequest.onsuccess = function(event) {
                var data = event.target.result;

                if (strAccountType == "active-account") {
                    return data.active_account_quantity;
                }
                else if (strAccountType == "passive-account") {
                    return data.passive_account_quantity;
                }
                
            };

        }

    }



    increaseOrReduceQuantity(intAccountQuantity, strAccountDetail, intSelectedId, strAccountType) {

        var openRequest = window.indexedDB.open(dbName, 1);

        openRequest.onsuccess = function(event) {
            const db = event.target.result;
            const transaction = db.transaction(["my_list"], "readwrite");
            const objectStore = transaction.objectStore("my_list");
        
            const getRequest = objectStore.get(Number(intSelectedId));
        
            getRequest.onsuccess = function(event) {
                var data = event.target.result;

                if (strAccountType == "active-account") {
                    data.active_account_quantity = intAccountQuantity;
                    data.active_account_detail = strAccountDetail;
                    requestUpdate = objectStore.put(data);
                }
                else if (strAccountType == "passive-account") {
                    data.passive_account_quantity = intAccountQuantity;
                    data.passive_account_detail = strAccountDetail;
                    requestUpdate = objectStore.put(data);
                }
                
                
            };
        };

    }



    total(strInfoActiveAccountQuantity, strInfoPassiveAccountQuantity, strInfoDifference) {
        intTableRowCount = tblMyTable.rows.length;
        intTotalActiveAccountQuantity = 0;
        intTotalPassiveAccountQuantity = 0;

        for (i = 1; i < intTableRowCount; i++) {
    
            cllActiveAccountQuantity = tblMyTable.rows[i].cells[2];
            
            if (cllActiveAccountQuantity.innerHTML == "-") {
                continue;
            }
            
            intTotalActiveAccountQuantity += Number(cllActiveAccountQuantity.innerHTML);
            
        }


        for (i = 1; i < intTableRowCount; i++) {
    
            cllPassiveAccountQuantity = tblMyTable.rows[i].cells[5];

            if (cllPassiveAccountQuantity.innerHTML == "-") {
                continue;
            }
            
            intTotalPassiveAccountQuantity += Number(cllPassiveAccountQuantity.innerHTML);
            
        }

        intDifference = intTotalActiveAccountQuantity - intTotalPassiveAccountQuantity;

        return strInfoActiveAccountQuantity + " " + intTotalActiveAccountQuantity + "\n" + strInfoPassiveAccountQuantity + " " + intTotalPassiveAccountQuantity + "\n" + strInfoDifference + " " + intDifference;
    }


    
    deleteAccount(intSelectedId) {

        var openRequest = window.indexedDB.open(dbName, 1);
    
        openRequest.onsuccess = function(event) {
            const db = event.target.result;
            const transaction = db.transaction(["my_list"], "readwrite");
            const objectStore = transaction.objectStore("my_list");
            objectStore.delete(Number(intSelectedId));
        };

    }



    getListed() {
        
        var openRequest = window.indexedDB.open(dbName, 1);

        openRequest.onsuccess = function(olay) {
            
            const db = olay.target.result;

            const transaction = db.transaction(["my_list"], "readwrite");
            const objectStore = transaction.objectStore("my_list");

            var request = objectStore.openCursor();

            request.onsuccess = function(event) {
                let cursor = event.target.result;

                if (cursor) {
                    let value = cursor.value;
                    
                    rowAddRow = tblMyTable.insertRow(-1);
                    cllAccountOrder = rowAddRow.insertCell(0);
                    cllActiveAccountName = rowAddRow.insertCell(1);
                    cllActiveAccountQuantity = rowAddRow.insertCell(2);
                    cllActiveAccountDetail = rowAddRow.insertCell(3);
                    cllPassiveAccountName = rowAddRow.insertCell(4);
                    cllPassiveAccountQuantity = rowAddRow.insertCell(5);
                    cllPassiveAccountDetail = rowAddRow.insertCell(6);
                    cllAccountType = rowAddRow.insertCell(7);

                    cllAccountOrder.innerHTML = value.id;
                    cllActiveAccountName.innerHTML = value.active_account_name;
                    cllActiveAccountQuantity.innerHTML = value.active_account_quantity;
                    cllActiveAccountDetail.innerHTML = value.active_account_detail;
                    cllPassiveAccountName.innerHTML = value.passive_account_name;
                    cllPassiveAccountQuantity.innerHTML = value.passive_account_quantity;
                    cllPassiveAccountDetail.innerHTML = value.passive_account_detail;
                    cllAccountType.innerHTML = value.account_type;

                    cursor.continue();   
                }

            };

        };

    }


    /*
    İki tane "get listed" metodu kullanıyoruz. Çünkü "getListed2()" metodunu "btnAdd"
    tuş metodunun içinde çağırınca ilk eklenen satırı ilk başta çıkarmıyor. O sebeple 
    "getListed2()" metodunu başlangıçta çalışan metot olarak, "getListed()" metodunu 
    ise "btnAdd" tuş metodunun içinde çağırıyoruz.
    */
    async getListed2() {
        
        var isExisting = (await window.indexedDB.databases()).map(db => db.name).includes(dbName);

        if (isExisting) {
            var openRequest = window.indexedDB.open(dbName, 1);
            openRequest.onsuccess = function(olay) {
            
                const db = olay.target.result;
    
                const transaction = db.transaction(["my_list"], "readwrite");
                const objectStore = transaction.objectStore("my_list");
    
                var request = objectStore.openCursor();
    
                request.onsuccess = function(event) {
                    let cursor = event.target.result;
    
                    if (cursor) {
                        let value = cursor.value;
                        
                        rowAddRow = tblMyTable.insertRow(-1);
                        cllAccountOrder = rowAddRow.insertCell(0);
                        cllActiveAccountName = rowAddRow.insertCell(1);
                        cllActiveAccountQuantity = rowAddRow.insertCell(2);
                        cllActiveAccountDetail = rowAddRow.insertCell(3);
                        cllPassiveAccountName = rowAddRow.insertCell(4);
                        cllPassiveAccountQuantity = rowAddRow.insertCell(5);
                        cllPassiveAccountDetail = rowAddRow.insertCell(6);
                        cllAccountType = rowAddRow.insertCell(7);

                        cllAccountOrder.innerHTML = value.id;
                        cllActiveAccountName.innerHTML = value.active_account_name;
                        cllActiveAccountQuantity.innerHTML = value.active_account_quantity;
                        cllActiveAccountDetail.innerHTML = value.active_account_detail;
                        cllPassiveAccountName.innerHTML = value.passive_account_name;
                        cllPassiveAccountQuantity.innerHTML = value.passive_account_quantity;
                        cllPassiveAccountDetail.innerHTML = value.passive_account_detail;
                        cllAccountType.innerHTML = value.account_type;
                        
                        cursor.continue();
                        
                    }
    
                };
    
            };
            
		}
        
    }



    reset() {
        var req = indexedDB.deleteDatabase(dbName);

        req.onsuccess = function () {
            alert("Bütün veriler silindi!");
        };

        for(var i = 1; i < tblMyTable.rows.length;) {
            tblMyTable.deleteRow(i);
        }
        
        // Uygulamayı sıfırlama kodu da gerekiyor.
        window.location.reload(true);

    }

}