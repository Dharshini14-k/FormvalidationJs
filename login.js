function validateForm() {
    var email = document.querySelector('input[type="text"]').value;
    var password = document.querySelector('input.password').value;
 
    var errorElements = document.querySelectorAll('.error');
    for (var i = 0; i < errorElements.length; i++) {
        errorElements[i].textContent = "";
    }

    var isValid = true;

    if (email.trim() === "") {
        document.querySelector('.input-field:nth-child(1) .error').textContent = "Email is required";
        isValid = false;
    }

    if (password.trim() === "") {
        document.querySelector('.input-field:nth-child(2) .error').textContent = "Password is required";
        isValid = false;
    }

    if (isValid) {
         
        window.location.href = "todolist.html";
    }
}