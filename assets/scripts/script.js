"use strict";
console.log("script.js file is connected.");

const tableKey = 'cma-table-array';

// "Clear Local Storage" button:
let clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', () => {
    localStorage.removeItem(tableKey);
});

//* Demo Array:
let cmaTableArrayDemo = [
    {   
        id: 1,
        firstName: 'Johnny',
        lastName: 'Aplleseed',
        dateOfBirth: '1845-03-18',
        phone: '+37069085856',
        email: 'j.aplleseed@icloud.com',
        address: 'Cupertino, California, United States'
        },
    {   
        id: 2,
        firstName: 'Sarah',
        lastName: 'Connor',
        dateOfBirth: '1964-02-13',
        phone: '+37060080805',
        email: 's.connor@sky.net',
        address: '14239 Judgment Avenue, Stars Hollow'
        }
]; //- Demo Array.

console.log("cmaTableArrayDemo Below:");
console.log(cmaTableArrayDemo);

let cmaTableArray;

//* Update Table's content:
function refreshTableContent() {
    let tableContainer = document.getElementById('cmaTableContainer');
    let oldTableBody = document.getElementById('tableBody');
    tableContainer.removeChild(oldTableBody);

    let newTableBody = document.createElement('span');
    newTableBody.id = 'tableBody';
    tableContainer.appendChild(newTableBody);

    for (let i = 0; i < cmaTableArray.length; i++) {
        // Create new row and emtpy collumns:
        let currentRow = document.createElement('div');
        let currentIdNumCol = document.createElement('div');
        let currentFirstNameCol = document.createElement('div');
        let currentLastNameCol = document.createElement('div');
        let currentDateOfBirthCol = document.createElement('div');
        let currentPhoneCol = document.createElement('div');
        let currentEmailCol = document.createElement('div');
        let currentAddressCol = document.createElement('div');
        let currentEditBtn = document.createElement('div');
        let currentDeleteBtn = document.createElement('div');

        // Define classes names for recently created row and collumns:
        currentRow.className = 'cma-table-row';
        currentIdNumCol.className = 'cma-table-column cma-id-num';
        currentFirstNameCol.className = 'cma-table-column cma-first-name';
        currentLastNameCol.className = 'cma-table-column cma-last-name';
        currentDateOfBirthCol.className = 'cma-table-column cma-date-of-birth';
        currentPhoneCol.className = 'cma-table-column cma-phone';
        currentEmailCol.className = 'cma-table-column cma-email';
        currentAddressCol.className = 'cma-table-column cma-address';
        currentEditBtn.className = 'cma-table-column cma-edit';
        currentDeleteBtn.className = 'cma-table-column cma-delete';

        // Get data for each collumn content:
        currentIdNumCol.innerHTML = cmaTableArray[i].id;
        currentFirstNameCol.innerHTML = cmaTableArray[i].firstName;
        currentLastNameCol.innerHTML = cmaTableArray[i].lastName;
        currentDateOfBirthCol.innerHTML = cmaTableArray[i].dateOfBirth;
        currentPhoneCol.innerHTML = cmaTableArray[i].phone;
        currentEmailCol.innerHTML = cmaTableArray[i].email;
        currentAddressCol.innerHTML = cmaTableArray[i].address;

        // Create "Edit" and "Delete" Buttons in row:
        currentEditBtn.innerHTML = '<i class="far fa-edit"></i>';
        currentDeleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';

        // Insert new row and collumns in table:
        currentRow.appendChild(currentIdNumCol);
        currentRow.appendChild(currentFirstNameCol);
        currentRow.appendChild(currentLastNameCol);
        currentRow.appendChild(currentDateOfBirthCol);
        currentRow.appendChild(currentPhoneCol);
        currentRow.appendChild(currentEmailCol);
        currentRow.appendChild(currentAddressCol);
        currentRow.appendChild(currentEditBtn);
        currentRow.appendChild(currentDeleteBtn);
        newTableBody.appendChild(currentRow);
    }

    //* "Delete" Button:
    let deleteBtns = document.getElementsByClassName('cma-delete');
    for (let i  = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener('click', () => {
            let contactToDeleteId = i;
            let isSure = window.confirm('Are you sure you want to delete contact from row nr.: ' + (contactToDeleteId+1) + '?');
            if (isSure)
            deleteRowFromTable(contactToDeleteId);
        });
    }//- "Delete" Button.

} //- Update Table's content.

//* Delete Row from Table Array:
function deleteRowFromTable(rowNumber){
    
    delete cmaTableArray[rowNumber];
    // Remove emtpy items from Table Array:
    cmaTableArray = cmaTableArray.filter(function () {
        return true
    });

    // Change ID for each item in Temporary Array to make it ascending starting from 1: 
    for (let i = 0; i < cmaTableArray.length; i++){
        cmaTableArray[i].id = i + 1;
    }

    // Refresh table with new Array (without recently deleted row):
    localStorage.setItem(tableKey, JSON.stringify(cmaTableArray));
    refreshTableContent();

}//- Delete Row from Table Array.

// "Add New Contact Entry" Button:
let addNewContactEntryBtn = document.getElementById('cmaAddNewContactEntry');
addNewContactEntryBtn.addEventListener('click', () => {
    enableDisableContactModal('enable');
});

//* Function to Enable or Disable Contact Modal:
function enableDisableContactModal (option){

    // Define variables for each input field in Modal: 
    let contactModalFirstName = document.getElementById('contactModalFirstName');
    let contactModalLastName = document.getElementById('contactModalLastName');
    let contactModalDateOfBirth = document.getElementById('contactModalDateOfBirth');
    let contactModalPhone = document.getElementById('contactModalPhone');
    let contactModalEmail = document.getElementById('contactModalEmail');
    let contactModalAddress = document.getElementById('contactModalAddress');

    // Reset all input field values:
    contactModalFirstName.value = "";
    contactModalLastName.value = "";
    contactModalDateOfBirth.value = "";
    contactModalPhone.value = "";
    contactModalEmail.value = "";
    contactModalAddress.value = "";

    // Enable/Disable Contact Modal: 
    let contactModal = document.getElementById('contactModal');
    contactModal.className = `${option}-modal`;
    
    // Enable/Disable Backdrop:
    let backdrop = document.getElementById('backdrop');
    backdrop.className = `${option}-modal`;

} //- Function to Enable or Disable Contact Modal.

// Contact Modal "Cancel" Button:
let contactModalCancelBtn = document.getElementById('contactModalCancelBtn');
contactModalCancelBtn.addEventListener('click', () => {
    enableDisableContactModal('disable');
});

//* Contact Modal "Submit" Button:
let contactModalSubmitBtn = document.getElementById('contactModalSubmitBtn');
contactModalSubmitBtn.addEventListener('click', () => {
    
    // Trim spaces in values (in front and back of it):
    let contactModalFirstName = document.getElementById('contactModalFirstName').value.trim();
    let contactModalLastName = document.getElementById('contactModalLastName').value.trim();
    let contactModalDateOfBirth = document.getElementById('contactModalDateOfBirth').value.trim();
    let contactModalPhone = document.getElementById('contactModalPhone').value.trim();
    let contactModalEmail = document.getElementById('contactModalEmail').value.trim();
    let contactModalAddress = document.getElementById('contactModalAddress').value.trim();

    // Save new values to row collumns if esential fields are not empty:
    if(contactModalFirstName !== "" && contactModalPhone !== "" && contactModalAddress !== "") {

        cmaTableArray[cmaTableArray.length] = {
            'id': cmaTableArray.length + 1,
            'firstName': contactModalFirstName,
            'lastName': contactModalLastName,
            'dateOfBirth': contactModalDateOfBirth,
            'phone': contactModalPhone,
            'email': contactModalEmail,
            'address': contactModalAddress
        }

        localStorage.setItem(tableKey, JSON.stringify(cmaTableArray));
        enableDisableContactModal('disable');
        refreshTableContent();
    }
});//- Contact Modal "Submit" Button.

//* Loading Table Array with data from localStorage Table's:
function init(){
    if(localStorage.getItem(tableKey)) {
        cmaTableArray = JSON.parse(localStorage.getItem(tableKey));
        console.log("Parsed from LocalStorage result Below:");
        console.log(cmaTableArray);
    } else {
        cmaTableArray = cmaTableArrayDemo;
    }
    refreshTableContent();
    localStorage.setItem(tableKey, JSON.stringify(cmaTableArray));
}//- Loading Table Array with data from localStorage Table's:

// Function Launching App:
init();