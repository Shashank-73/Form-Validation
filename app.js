let firstNameValid = document.getElementById('firstNameValid');
let firstNameInvalid = document.getElementById('firstNameInvalid');
let lastNameValid = document.getElementById('lastNameValid');
let lastNameInvalid = document.getElementById('lastNameInvalid');
let emailValid = document.getElementById('emailValid');
let emailInvalid = document.getElementById('emailInvalid');
let phoneNumberValid = document.getElementById('phoneNumberValid');
let phoneNumberInvalid = document.getElementById('phoneNumberInvalid');
let zipCodeValid = document.getElementById('zipCodeValid');
let zipCodeInvalid = document.getElementById('zipCodeInvalid');
let tNcCheckInvalid = document.getElementById('tNcCheckInvalid');
let stateInvalid = document.getElementById('stateInvalid');

// touch events
let fields = {
    firstName: false,
    lastName: false,
    email: false,
    phoneNUmber: false,
    state: false,
    zipCode: false,
    tNcCheckbox: false,
}


function validation() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let state = document.getElementById("state").value;
    let zipCode = document.getElementById("zipCode").value;
    let tNcCheckbox = document.getElementById('tNcCheckbox').checked;

    console.log(firstName, lastName, email, phoneNumber, state, zipCode);
    // for first name
    if (fields['firstName']) {
        if (firstName === '') {
            firstNameInvalid.style.display = 'block';
            firstNameValid.style.display = 'none';
        }
        else {
            firstNameValid.style.display = 'block';
            firstNameInvalid.style.display = 'none';
        }
    }
    //for last name
    if (fields['lastName']) {
        if (lastName === '') {
            lastNameInvalid.style.display = 'block';
            lastNameValid.style.display = 'none';
        }
        else {
            lastNameValid.style.display = 'block';
            lastNameInvalid.style.display = 'none';
        }
    }

    //for userName /*email.indexOf('@') == 0*/
    if (fields['email']) {
        if (email === '' || !email.includes('@') || !email.includes('.') || email.startsWith('@') || email.slice(email.lastIndexOf('.')).length < 3) {
            emailInvalid.style.display = 'block';
            emailValid.style.display = 'none';
        }
        else {
            emailValid.style.display = 'block';
            emailInvalid.style.display = 'none';
        }
    }

    // for phone number
    if (fields['phoneNumber']) {
        if (phoneNumber === '' || phoneNumber.length != 10 || Number(phoneNumber[0]) < 6) {
            phoneNumberInvalid.style.display = 'block';
            phoneNumberValid.style.display = 'none';
        }
        else {
            phoneNumberValid.style.display = 'block';
            phoneNumberInvalid.style.display = 'none';
        }
    }

    // for zipCode
    if (fields['zipCode']) {
        if (zipCode === '' || zipCode.length != 6) {
            zipCodeInvalid.style.display = 'block';
            zipCodeValid.style.display = 'none';
        }
        else {
            zipCodeValid.style.display = 'block';
            zipCodeInvalid.style.display = 'none';
        }
    }

    // for terms and conditions
    if (fields['tNcCheckbox']) {
        if (!tNcCheckbox) {
            tNcCheckInvalid.style.display = 'block';
            //console.log(tNcCheckbox);
        }
        else {
            tNcCheckInvalid.style.display = 'none';
            //console.log(tNcCheckbox);
        }
    }

    // for state 
    if (fields['state']) {
        if (state === '') {
            stateInvalid.style.display = 'block';
        }
        else {
            stateInvalid.style.display = 'none';
        }
    }
}

function setTouched(fieldName) {
    fields[fieldName] = true;
    validation();
    console.log(fields);
}