let necessidades = JSON.parse(localStorage.getItem("necessidades")) || [];

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

function aplicarFiltros() {
    const texto = document.getElementById("pesquisa").value.toLowerCase();
    const tipo = document.getElementById("filtroTipo").value;

    const filtrados = necessidades.filter(n => {
        const matchTexto =
            n.titulo.toLowerCase().includes(texto) ||
            n.descricao.toLowerCase().includes(texto);

        const matchTipo = tipo === "" || n.tipo === tipo;

        return matchTexto && matchTipo;
    });

    renderizarNecessidades(filtrados);
}

window.onload = function () {
    renderizarNecessidades();

    const pesquisa = document.getElementById("pesquisa");
    const filtroTipo = document.getElementById("filtroTipo");

    if (pesquisa) pesquisa.addEventListener("input", aplicarFiltros);
    if (filtroTipo) filtroTipo.addEventListener("change", aplicarFiltros);
};