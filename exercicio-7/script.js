const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(event) {
    const nav = document.getElementById('nav');
    const button = event.currentTarget;
    if (button instanceof HTMLButtonElement && nav) {
        const active = nav === null || nav === void 0 ? void 0 : nav.classList.contains('active');
        if (active) {
            nav === null || nav === void 0 ? void 0 : nav.classList.remove('active');
            button.setAttribute('area-expanded', 'false');
            button.setAttribute('area-label', 'Abrir Menu');
        }
        else {
            nav === null || nav === void 0 ? void 0 : nav.classList.add('active');
            button.setAttribute('area-expanded', 'true');
            button.setAttribute('area-label', 'Fechar Menu');
        }
    }
}
btnMobile === null || btnMobile === void 0 ? void 0 : btnMobile.addEventListener('pointerdown', toggleMenu);
export {};
//# sourceMappingURL=script.js.map