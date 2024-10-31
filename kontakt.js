function validateForm() {
    // Name-Feld Validierung
    const name = document.getElementById("name").value.trim();
    if (name === "") {
        alert("Bitte geben Sie Ihren Namen ein.");
        return false;
    }

    // E-Mail-Feld Validierung
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
        return false;
    }

    // Nachricht-Feld Validierung
    const message = document.getElementById("message").value.trim();
    if (message === "") {
        alert("Bitte geben Sie eine Nachricht ein.");
        return false;
    }

    // Wenn alle Felder gültig sind, wird das Formular gesendet
    return true;
}
