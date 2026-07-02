let necessidades = [];

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

    alert("Necessidade cadastrada com sucesso!");
    this.reset();

    document.getElementById("cep").addEventListener("blur", async function () {
    let cep = this.value.replace(/\D/g, "");

    if (cep.length !== 8) {
        alert("CEP inválido");
        return;
    }

    try {
        let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let data = await resposta.json();

        if (data.erro) {
            alert("CEP não encontrado");
            return;
        }

        document.getElementById("rua").value = data.logradouro;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("estado").value = data.uf;

    } catch (error) {
        alert("Erro ao buscar CEP");
    }
});
});
