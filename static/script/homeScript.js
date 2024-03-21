async function calculator() {
    window.location.href = '/estimator';
}

async function dashboard() {
    window.location.href = '/dashboard';
}

async function Logout() {
    event.preventDefault();
    if (confirm("Are you sure to log out?") == true) {
        window.location.href = "/";
    }
}