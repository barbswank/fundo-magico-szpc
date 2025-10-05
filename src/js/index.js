// Objetivo:
// Enviar um texto de um formulário para uma API do n8n e exibir o resultado o código  html, css e colocar a animação no fundo da tela do site.

// Passos:
// 1. No JavaScript, pegar o evento de submit do formulário para evitar o  recarregamento da página.
// 2. Obter o valor digitado pelo usuário no campo de texto.
// 3. Exibir um indicador de carregamento enquanto a requisição está sendo processada.
// 4. Fazer uma requisição HTTP (POST) para a API do n8n, enviando o texto do formulário no corpo da requisição em formato JSON.
// 5. Receber a resposta da API do n8n (esperando um JSON com o código HTML/CSS  do background).
// 6. Se a resposta for válida, exibir o código HTML/CSS retornado na tela:
//    - Mostrar o HTML gerado em uma área de preview.
//    - Inserir o CSS retornado dinamicamente na página para aplicar o background.
// 7. Remover o indicador de carregamento após o recebimento da resposta.

function setLoading(isLoading) {
    const btnSpan = document.getElementById("generate-btn");

    if (isLoading) {
        btnSpan.innerHTML = "Gerando Background...";
    } else {
        btnSpan.innerHTML = "Gerar Background Mágico";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // 1. No JavaScript, pegar o evento de submit do formulário para evitar o  recarregamento da página.

    const form = document.querySelector("form");
    const textArea = document.getElementById("description");
    const htmlCode = document.getElementById("html-code");
    const cssCode = document.getElementById("css-code");
    const preview = document.getElementById("preview-section");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        // 2. Obter o valor digitado pelo usuário no campo de texto.
        const description = textArea.value.trim();

        if (!description) {
            return;
        }

        // 3. Exibir um indicador de carregamento enquanto a requisição está sendo processada.
        setLoading(true);

        // 4. Fazer uma requisição HTTP (POST) para a API do n8n, enviando o texto do formulário no corpo da requisição em formato JSON.
        try {

            const response = await fetch("https://barbswank.app.n8n.cloud/webhook/gerador-fundo", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ description })
            });

            const data = await response.json();
            console.log("🔍 Resposta da API:", data);
            htmlCode.textContent = data.code || "";
            cssCode.textContent = data.style || "";

            preview.style.display = "block";
            preview.innerHTML = data.code || "";

            let styleTag = document.getElementById("dynamic-style");

            if (styleTag) styleTag.remove();

            if (data.style) {
                styleTag = document.createElement('style');
                styleTag.id = "dinamic-style";

                styleTag.textContent = data.style;
                document.head.appendChild(styleTag);
            }


        } catch (error) {
            console.error("Erro ao gerar o fundo:", error);
            htmlCode.textContent = "Não consegui gerar o código HTML, tente novamente";
            cssCode.textContent = "Não consegui gerar o código CSS, tente novamente"
            preview.innerHTML = "";

        } finally {
            setLoading(false);
        }

    });
});