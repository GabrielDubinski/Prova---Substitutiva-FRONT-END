let necessidades = [];

function renderizarNecessidades(lista = necessidades) {
    const container = document.getElementById("listaNecessidades");

    if (!container) return;

    container.innerHTML = "";

    lista.forEach((n) => {
        container.innerHTML += `
        <div class="card">
            <h3>${n.titulo}</h3>
            <p><strong>Instituição:</strong> ${n.instituicao}</p>
            <p><strong>Tipo:</strong> ${n.tipo}</p>
            <p>${n.descricao}</p>
        </div>
        `;
    });
}

window.onload = function () {
    renderizarNecessidades();
};