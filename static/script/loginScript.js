async function verifyUser() {
    event.preventDefault();
    let username = document.getElementById("username");
    let password = document.getElementById("password");

    if (username.value == "admin" && password.value == "1234") {
        window.location.href = "/home";
    }

    username.value = "";
    password.value = "";
}