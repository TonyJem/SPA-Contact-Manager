"use strict";
console.log("script.js file is connected.");

let cmaTableArrayDemo = [
    {   firstName: 'Johnny',
        lastName: 'Aplleseed',
        dateOfBirth: '1845-03-18',
        phone: '+37069085856',
        email: 'j.aplleseed@icloud.com',
        address: 'Cupertino, California, United States'
        },
    {
        firstName: 'Sarah',
        lastName: 'Connor',
        dateOfBirth: '1964-02-13',
        phone: '+37060080805',
        email: 's.connor@sky.net',
        address: '14239 Judgment Avenue, Stars Hollow'
        }
];

console.log("cmaTableArrayDemo Below:");
console.log(cmaTableArrayDemo);



/*

function Exmaple() {
}

    // **** Create Array from Table content:
        console.log("cmaTable Below:");
        console.log(cmaTable);

        let cmaTableArray = [];
        for (let i = 0; i < cmaTableKeys.length; i++) {
            cmaTableArray[i] = {
                firstName: cmaTable[i].firstName,
                lastName: cmaTable[i].lastName,
                dateOfBirth: cmaTable[i].dateOfBirth,
                phone: cmaTable[i].phone,
                email: cmaTable[i].email,
                address: cmaTable[i].address,
            };
        };
        console.log("cmaTableArray Below:");
        console.log(cmaTableArray);

    // ---- Create Array from Table content.

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
        currentIdNumCol.innerHTML = i;
        currentFirstNameCol.innerHTML = cmaTableArray[i].firstName;
        currentLastNameCol.innerHTML = cmaTableArray[i].lastName;
        currentDateOfBirthCol.innerHTML = cmaTableArray[i].dateOfBirth;
        currentPhoneCol.innerHTML = cmaTableArray[i].phone;
        currentEmailCol.innerHTML = cmaTableArray[i].email;
        currentAddressCol.innerHTML = cmaTableArray[i].address;
        
        // Create Edit and Delete Buttons in row:
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

    */