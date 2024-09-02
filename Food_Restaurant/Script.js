document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    // Full Name validation
    const name = document.getElementById('fullname').value;
    if (name === '') {
        document.getElementById('nameError').textContent = 'Full Name is required';
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid Email Address';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Phone number validation
    const phone = document.getElementById('ph_no').value;
    const phonePattern = /^[0-9]{10}$/;
    if (phone === '') {
        document.getElementById('phoneError').textContent = 'Phone Number is required';
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Invalid Phone Number';
        isValid = false;
    } else {
        document.getElementById('phoneError').textContent = '';
    }

    // Time validation
    const time = document.getElementById('time1').value;
    if (time === '') {
        document.getElementById('timeError').textContent = 'Time is required';
        isValid = false;
    } else {
        document.getElementById('timeError').textContent = '';
    }

    // Date validation
    const date = document.getElementById('date1').value;
    if (date === '') {
        document.getElementById('dateError').textContent = 'Date is required';
        isValid = false;
    } else {
        document.getElementById('dateError').textContent = '';
    }

    // Gender validation
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById('genderError').textContent = 'Gender is required';
        isValid = false;
    } else {
        document.getElementById('genderError').textContent = '';
    }

    // Number of persons validation
    const persons = document.getElementById('no_of_person').value;
    if (persons === '' || persons <= 0) {
        document.getElementById('personsError').textContent = 'Number of Persons is required';
        isValid = false;
    } else {
        document.getElementById('personsError').textContent = '';
    }

    // Address validation
    const address = document.getElementById('address').value;
    if (address === '') {
        document.getElementById('addressError').textContent = 'Address is required';
        isValid = false;
    } else {
        document.getElementById('addressError').textContent = '';
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});
