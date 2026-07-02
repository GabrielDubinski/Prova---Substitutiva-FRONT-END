let necessidades = JSON.parse(localStorage.getItem("necessidades")) || [];

function renderizarNecessidades(lista = necessidades) {
    const container = document.getElementById("listaNecessidades");

    if (!container) return;

    container.innerHTML = "";

if (!Array.isArray(necessidades)) {
    necessidades = [];
}
    if (lista.length === 0) {
        container.innerHTML = `
        <p style="text-align:center; color:#0a2a66;">
            Nenhuma necessidade cadastrada ainda.
        </p>
        `;
        return;
    }

    lista.forEach((n, index) => {
        container.innerHTML += `
        <div class="card">
            <h3>${n.titulo}</h3>
            <p><strong>Instituição:</strong> ${n.instituicao}</p>
            <p><strong>Tipo:</strong> ${n.tipo}</p>
            <p>${n.descricao}</p>

            <button onclick="deletar(${index})">Excluir</button>
        </div>
        `;
    });
}

function deletar(index) {
    necessidades.splice(index, 1);
    localStorage.setItem("necessidades", JSON.stringify(necessidades));
    renderizarNecessidades();
}

window.onload = function () {
    renderizarNecessidades();
};