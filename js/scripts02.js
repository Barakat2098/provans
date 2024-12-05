// Открыть модальное окно
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

// Закрыть модальное окно
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Закрыть модальное окно при клике вне его области
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}
