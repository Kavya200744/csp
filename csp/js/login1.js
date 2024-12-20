function validateLogin() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;
    
    if (username === "admin" && password === "password") {
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
    }
}
