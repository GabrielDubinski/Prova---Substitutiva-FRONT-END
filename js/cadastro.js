let necessidades = JSON.parse(localStorage.getItem("necessidades")) || [];
document.getElementById("formNecessidade").addEventListener("submit", function(e) {
    e.preventDefault();

    let novaNecessidade = {
        instituicao: document.getElementById("instituicao").value,
        tipo: document.getElementById("tipo").value,
        titulo: document.getElementById("titulo").value,
        descricao: document.getElementById("descricao").value,
        cep: document.getElementById("cep").value,
        rua: document.getElementById("rua").value,
        bairro: document.getElementById("bairro").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value,
        contato: document.getElementById("contato").value
    };

    necessidades.push(novaNecessidade);

    localStorage.setItem("necessidades", JSON.stringify(necessidades));

    alert("Necessidade cadastrada com sucesso!");
    this.reset();
});