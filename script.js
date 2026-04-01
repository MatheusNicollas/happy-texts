document.addEventListener('DOMContentLoaded', () => {
    // Referências dos elementos na Home
    const nameInput = document.getElementById('nameInput');
    const generateBtn = document.getElementById('generateBtn');
    const errorMsg = document.getElementById('errorMsg');

    // Ao clicar em gerar mensagem
    generateBtn.addEventListener('click', () => {
        const nomeDigitado = nameInput.value.trim();

        // Faz a validação
        if (nomeDigitado === '') {
            errorMsg.classList.add('visible');
            nameInput.classList.add('shake');
            
            // Remove a classe "shake" após a animação de erro acabar, 
            // permitindo que possa tremer de novo no próximo clique inválido.
            setTimeout(() => {
                nameInput.classList.remove('shake');
            }, 400);
            
            nameInput.focus();
        } else {
            // Tudo certo!
            errorMsg.classList.remove('visible');
            
            // Pega o tema da URL da página name.html
            const urlParams = new URLSearchParams(window.location.search);
            const theme = urlParams.get('theme') || 'birthday'; // fallback caso não tenha
            
            // A codificação garante que caracteres como acentos ou espaços vá corretamente via URL HTTP
            const encodedName = encodeURIComponent(nomeDigitado);
            
            // Redireciona para a página do tema selecionado
            window.location.href = `${theme}.html?name=${encodedName}`;
        }
    });

    // Permite apertar "Enter" também para ativar o botão
    nameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            generateBtn.click();
        }
    });
});
