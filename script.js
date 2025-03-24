document.addEventListener("DOMContentLoaded", function () {
    // Quando a tecla Alt + C ou Alt + S é usada, o foco vai direto ao conteúdo
    document.querySelectorAll('a[accesskey]').forEach(link => {
        link.addEventListener('click', function (e) {
            const destinoId = link.getAttribute('href').substring(1);
            const destino = document.getElementById(destinoId);
            if (destino) {
                destino.focus();
            }
        });
    });
});