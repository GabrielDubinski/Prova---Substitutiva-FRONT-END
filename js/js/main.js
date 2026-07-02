let necessidades = JSON.parse(localStorage.getItem("necessidades")) || [];

function deletar(index) {
    necessidades.splice(index, 1);
    localStorage.setItem("necessidades", JSON.stringify(necessidades));
    renderizarNecessidades();
}
    if (!container) return;

    container.innerHTML = "";

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

window.onload = function () {
    renderizarNecessidades();
};