function validateForm() {
     
    var emailInput = document.querySelector(".email");
    var passwordInput = document.querySelector(".password");

     
    var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

     
    var errorElement = document.getElementById("error-message");

     
    errorElement.innerText = "";
 
    if (!emailRegex.test(emailInput.value)) {
        errorElement.innerText = "Please enter a valid email address.";
        return false;
    }
 
    if (passwordInput.value.length < 8) {
        errorElement.innerText = "Password must be at least 8 characters long.";
        return false;
    }
 
    window.location.href = "todolist.html";
}
