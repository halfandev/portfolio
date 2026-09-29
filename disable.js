document.addEventListener('keydown', function (e) {

    // Disable F12
    if (e.key === 'F12') {
        e.preventDefault();
        return false;
    }

    // Disable Ctrl + U
    if (e.ctrlKey && e.key.toLowerCase() === 'u') {
        e.preventDefault();
        return false;
    }

    // Disable Ctrl + Shift + I
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') {
        e.preventDefault();
        return false;
    }

    // Disable Ctrl + Shift + J
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'j') {
        e.preventDefault();
        return false;
    }

    // Disable Ctrl + Shift + C
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'c') {
        e.preventDefault();
        return false;
    }
});

// Disable right click
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    return false;
});
