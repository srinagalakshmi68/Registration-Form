function validate() {
    let firstNameInput = document.getElementById('first-name').value
    let lastNameInput = document.getElementById('last-name').value
    let emailInput = document.getElementById('email').value
    let phoneNumber = document.getElementById('phonenumber').value
    let batchNo = document.getElementById('batchno').value
    let currentModule = document.getElementById('module').value
    let tnCInput = document.getElementById('tnC').checked

    let error = false


    if (firstNameInput && firstNameInput.length >= 3 && !parseInt(firstNameInput)) {
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
    } else {
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
        error = true
    }

    if (lastNameInput && lastNameInput.length >= 3 && !parseInt(lastNameInput)) {
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    } else {
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
        error = true
    }

    if (
        emailInput &&
        emailInput.includes("@") &&
        emailInput.includes(".") &&
        emailInput.lastIndexOf(".") <= emailInput.length - 3 &&
        emailInput.indexOf('@') !== 0
    ) {
        document.getElementById("email-valid").style.display = "block";
        document.getElementById("email-invalid").style.display = "none";
    } else {
        document.getElementById("email-invalid").style.display = "block";
        document.getElementById("email-valid").style.display = "none";
        error = true
    }

    if (phoneNumber && phoneNumber.length >= 10) {
        document.getElementById('phonenumber-valid').style.display = 'block'
        document.getElementById('phonenumber-invalid').style.display = 'none'
    } else {
        document.getElementById('phonenumber-invalid').style.display = 'block'
        document.getElementById('phonenumber-valid').style.display = 'none'
        error = true
    }



    if (batchNo !== 'None') {
        document.getElementById('batch-valid').style.display = "block";
        document.getElementById('batch-invalid').style.display = "none";
    } else {
        document.getElementById('batch-invalid').style.display = "block";
        document.getElementById('batch-valid').style.display = "none";
        error = true
    }

    if (currentModule !== 'None') {
        document.getElementById('module-valid').style.display = "block";
        document.getElementById('module-invalid').style.display = "none";
    } else {
        document.getElementById('module-invalid').style.display = "block";
        document.getElementById('module-valid').style.display = "none";
        error = true
    }


    if (tnCInput) {
        document.getElementById("tnC-invalid").style.display = "none";
    } else {
        document.getElementById("tnC-invalid").style.display = "block";
        error = true
    }

    if (!error) {
        alert('Your details have been saved successfully!')
        document.getElementById('first-name').value = ''
        document.getElementById('last-name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('phonenumber').value = ''
        document.getElementById('batchno').value = 'None'
        document.getElementById('module').value = 'None'
        document.getElementById('tnC').checked = false

        document.getElementById('first-name-valid').style.display = 'none'
        document.getElementById('last-name-valid').style.display = 'none'
        document.getElementById("email-valid").style.display = "none"
        document.getElementById('phonenumber-valid').style.display = "none"
        document.getElementById('batch-valid').style.display = "none"
        document.getElementById('module-valid').style.display = "none"


    }
}