document.addEventListener('DOMContentLoaded', () => {
    // Referências dos elementos na Home
    const nameInput = document.getElementById('nameInput');
    const generateBtn = document.getElementById('generateBtn');
    const errorMsg = document.getElementById('errorMsg');
    const pageTitle = document.getElementById('pageTitle');

    // Pega o tema da URL
    const urlParams = new URLSearchParams(window.location.search);
    const theme = urlParams.get('theme') || 'birthday';

    if (pageTitle) {
        const themeTitles = {
            'birthday': '🎉 Criar mensagem<br>de aniversário',
            'christmas': '🎄 Criar mensagem<br>de Natal',
            'newyear': '🥂 Criar mensagem<br>de Ano Novo',
            'easter': '🐰 Criar mensagem<br>de Páscoa',
            'mothersday': '🌹 Criar mensagem<br>de Dia das Mães',
            'fathersday': '👔 Criar mensagem<br>de Dia dos Pais'
        };

        if (themeTitles[theme]) {
            pageTitle.innerHTML = themeTitles[theme];
        }
    }

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
            
            // O tema já foi pego da URL no início do script
            
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
