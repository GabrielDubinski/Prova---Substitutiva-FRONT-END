let necessidades = [];

document.getElementById("formNecessidade").addEventListener("submit", function(e) {
    e.preventDefault();

    let instituicao = document.getElementById("instituicao").value.trim();
    let tipo = document.getElementById("tipo").value;
    let titulo = document.getElementById("titulo").value.trim();
    let descricao = document.getElementById("descricao").value.trim();
    let cep = document.getElementById("cep").value.trim();
    let contato = document.getElementById("contato").value.trim();

    if (!instituicao || !tipo || !titulo || !descricao || !cep || !contato) {
        alert("Preencha todos os campos obrigatórios!");
        return;
    }

    if (!contato.includes("@") && !contato.match(/\d/)) {
        alert("Informe um e-mail ou telefone válido!");
        return;
    }

    let novaNecessidade = {
        instituicao,
        tipo,
        titulo,
        descricao,
        cep,
        rua: document.getElementById("rua").value,
        bairro: document.getElementById("bairro").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value,
        contato
    };

    necessidades.push(novaNecessidade);

    alert("Necessidade cadastrada com sucesso!");
    this.reset();
});