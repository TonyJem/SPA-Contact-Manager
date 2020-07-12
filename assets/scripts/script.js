"use strict";
console.log("script.js file is connected.");

const tableKey = 'cma-table';

let cmaTable;

let cmaTableDemo = {
    '0': {
        'firstName': 'Johnny',
        'lastName': 'Aplleseed',
        'dateOfBirth': '1845-03-18',
        'phone': '+37069085856',
        'email': 'j.aplleseed@icloud.com',
        'address': 'Cupertino, California, United States'
        },
    '1': {
        'firstName': 'Sarah',
        'lastName': 'Connor',
        'dateOfBirth': '1964-02-13',
        'phone': '+37060080805',
        'email': 's.connor@sky.net',
        'address': '14239 Judgment Avenue, Stars Hollow'
        }
};

let refreshDOMTable = () => {

    let cmaTableKeys = Object.keys(cmaTable);
    let tableContainer = document.getElementById('cmaTableContainer');
    let oldTableBody = document.getElementById('tableBody');
    tableContainer.removeChild(oldTableBody);

    let newTableBody = document.createElement('span');
    newTableBody.id = 'tableBody';
    tableContainer.appendChild(newTableBody);

    for (let i = 0; i < cmaTableKeys.length; i++) {
        
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
        currentIdNumCol.className = 'cma-table-column cma-id-Num';
        currentFirstNameCol.className = 'cma-table-column cma-first-name';
        currentLastNameCol.className = 'cma-table-column cma-last-name';
        currentDateOfBirthCol.className = 'cma-table-column cma-date-of-birth';
        currentPhoneCol.className = 'cma-table-column cma-phone';
        currentEmailCol.className = 'cma-table-column cma-email';
        currentAddressCol.className = 'cma-table-column cma-address';
        currentEditBtn.className = 'cma-table-column cma-edit';
        currentDeleteBtn.className = 'cma-table-column cma-delete';

        // Get data for collumn content:
        currentIdNumCol.innerHTML = cmaTableKeys[i];
        currentFirstNameCol.innerHTML = cmaTable[cmaTableKeys[i]].firstName;
        currentLastNameCol.innerHTML = cmaTable[cmaTableKeys[i]].lastName;
        currentDateOfBirthCol.innerHTML = cmaTable[cmaTableKeys[i]].dateOfBirth;
        currentPhoneCol.innerHTML = cmaTable[cmaTableKeys[i]].phone;
        currentEmailCol.innerHTML = cmaTable[cmaTableKeys[i]].email;
        currentAddressCol.innerHTML = cmaTable[cmaTableKeys[i]].address;
        
        // Create Edit and Delete Buttons in row:
        currentEditBtn.innerHTML = '<i class="far fa-edit"></i>';
        currentDeleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';

        // Insert new row and collumn in table:
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

    //* Function to Enable or Disable "Add New or Edit Contact" Modal:
        let enableDisableNewUserModal = (option) => {
            let newContactFirstName = document.getElementById('newContactFirstName');
            let newContactLastName = document.getElementById('newContactLastName');
            let newContactDateOfBirth = document.getElementById('newContactDateOfBirth');
            let newContactPhone = document.getElementById('newContactPhone');
            let newContactEmail = document.getElementById('newContactEmail');
            let newContactAddress = document.getElementById('newContactAddress');
            newContactFirstName.value = "";
            newContactLastName.value = "";
            newContactDateOfBirth.value = "";
            newContactPhone.value = "";
            newContactEmail.value = "";
            newContactAddress.value = "";

            let newContactModal = document.getElementById('newContactModal');
            let backdrop = document.getElementById('backdrop');

            newContactModal.className = `${option}-modal`;
            backdrop.className = `${option}-modal`;
        }
    //- Function to Enable or Disable "Add New or Edit Contact" Modal.

    let addNewEntryBtn = document.getElementById('cmaAddNewEntry');
    let editBtns = document.getElementsByClassName('cma-edit');
    let deleteBtns = document.getElementsByClassName('cma-delete');
    
    //* New Contact Submit Button:
        let newContactSubmitBtn = document.getElementById('newContactSubmitBtn');
        newContactSubmitBtn.addEventListener('click', () => {
            let newContactFirstName = document.getElementById('newContactFirstName').value.trim();
            let newContactLastName = document.getElementById('newContactLastName').value.trim();
            let newContactDateOfBirth = document.getElementById('newContactDateOfBirth').value.trim();
            let newContactPhone = document.getElementById('newContactPhone').value.trim();
            let newContactEmail = document.getElementById('newContactEmail').value.trim();
            let newContactAddress = document.getElementById('newContactAddress').value.trim();

            // Insert VALIDATION HERE:
            // VALIDATION...

            // ! check below until ! mark
            if(newContactFirstName !== "" && newContactPhone !== "" && newContactAddress !== "") {
                cmaTable[newContactFirstName] = {
                    // ! check below until ! mark
                    'firstName': newContactFirstName,
                    // !
                    'lastName': newContactLastName,
                    'dateOfBirth': newContactDateOfBirth,
                    'phone': newContactPhone,
                    'email': newContactEmail,
                    'address': newContactAddress
                }
                localStorage.setItem(tableKey, JSON.stringify(cmaTable));
                enableDisableNewUserModal('disable');
                refreshDOMTable();
            }
        });
    //- New Contact Submit Button.

    // New Contact Cancel Button:
    let newContactCancelBtn = document.getElementById('newContactCancelBtn');
    newContactCancelBtn.addEventListener('click', () => {
        enableDisableNewUserModal('disable');
    });

    // Add Entry Button:
    addNewEntryBtn.addEventListener('click', () => {
        enableDisableNewUserModal('enable');
    });
 
    for (let i  = 0; i < editBtns.length; i++) {
        editBtns[i].addEventListener('click', ($event) => {
            let rowToEdit = $event.target.parentElement.children[0].innerText;
            let ContactToEdit = cmaTable[rowToEdit];
            enableDisableNewUserModal('enable');
            let newContactFirstName = document.getElementById('newContactFirstName');
            let newContactLastName = document.getElementById('newContactLastName');
            let newContactDateOfBirth = document.getElementById('newContactDateOfBirth');
            let newContactPhone = document.getElementById('newContactPhone');
            let newContactEmail = document.getElementById('newContactEmail');
            let newContactAddress = document.getElementById('newContactAddress');

            // ! check below until ! mark
            newContactFirstName.value = rowToEdit;
            newContactFirstName.value = ContactToEdit.firstName;
            // !

            newContactLastName.value = ContactToEdit.lastName;
            newContactDateOfBirth.value = ContactToEdit.dateOfBirth;
            newContactPhone.value = ContactToEdit.phone;
            newContactEmail.value = ContactToEdit.email;
            newContactAddress.value = ContactToEdit.address;
        });
    }


// ! check below until ! mark
    for (let i  = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener('click', ($event) => {
            let nameToDelete = $event.target.parentElement.children[0].innerText;
            let isSure = window.confirm('Are you sure you want to delete ' + nameToDelete + '?');
            if (isSure)
                deleteUserFromTable(nameToDelete);
        });
    }
// !


}
// !
let deleteUserFromTable = (userName) => {
    let tempTable = {};
    let cmaTableKeys = Object.keys(cmaTable);
    for (let i = 0; i < cmaTableKeys.length; i++) {
        if (userName !== cmaTableKeys[i]) {
            tempTable[cmaTableKeys[i]] = cmaTable[cmaTableKeys[i]];
        }
    }
    cmaTable = tempTable;
    localStorage.setItem(tableKey, JSON.stringify(cmaTable));
    refreshDOMTable();
}

let init = () => {
    
    if(localStorage.getItem(tableKey)) {
        cmaTable = JSON.parse(localStorage.getItem(tableKey));
    } else {
        cmaTable = cmaTableDemo;
    }
    refreshDOMTable();
    localStorage.setItem(tableKey, JSON.stringify(cmaTable));
}
// !

init();