document.getElementById("formCadastro").addEventListener("submit", async function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const endereco = document.getElementById("endereco").value;

    try {
        const response = await fetch("http://localhost:3000/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nome, email, telefone, endereco })
        });
        const data = await response.json();
        document.getElementById("mensagem").innerText = data.message;
    } catch (error) {
        document.getElementById("mensagem").innerText = "Erro no cadastro.";
    }
});
