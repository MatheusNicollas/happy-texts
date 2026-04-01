document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica para ler o nome da querystring e mostrar a mensagem ---

    const urlParams = new URLSearchParams(window.location.search);
    const nome = urlParams.get('name');
    
    // Se por acaso alguém entrar direto na message.html sem nome
    // Fallback básico para não quebrar.
    const titulo = document.getElementById('bdayMessage');
    if (nome) {
        titulo.textContent = `Feliz aniversário, ${nome}! 🎂🎈`;
    } else {
        titulo.textContent = 'Feliz aniversário! 🎂🎈';
    }

    // Botão de Nova mensagem
    const newBtn = document.getElementById('newBtn');
    newBtn.addEventListener('click', () => {
        // Volta pra pagina inicial
        window.location.href = 'index.html';
    });


    // --- Animação Vanilla JS de Confetes no Canvas ---
    
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');

    let confettis = [];
    const numConfettis = 150; // Quantidade de papelzinhos na tela

    // Paleta de cores dos confetes
    const colors = ['#F59E0B', '#42A5F5', '#FFCE54', '#48CFAD', '#6366F1'];

    // Ajusta o tamanho do canvas com a tela
    function resizeCanvas() {
        // Pega a exata largura e altura da janela
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    // Mantém atualizado ao redimensionar navegador
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // Configuração inicial

    // Cria a estrutura para cada confete
    class Confetti {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height; // Começa a cair de cima (fora da tela)
            this.color = colors[Math.floor(Math.random() * colors.length)];
            
            // Variabilidade nos tamanhos
            this.size = Math.random() * 8 + 4; 
            
            // Velocidade X (vento/ondulação) e velocidade Y (gravidade)
            this.speedY = Math.random() * 3 + 2;
            this.speedX = Math.random() * 2 - 1;

            // Rotação do confete no ar em 3D virtual
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 10 - 5;
        }

        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.rotation += this.rotationSpeed;

            // Ondulação leve para simular o papel caindo
            this.x += Math.sin(this.y * 0.01) * 1; 

            // Se bater no fundo, ressuscita no topo para chuva infinita (ou pare se quiser)
            if (this.y > canvas.height) {
                this.y = -10;
                this.x = Math.random() * canvas.width;
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            // Rotacionar em 2D
            ctx.rotate((this.rotation * Math.PI) / 180);

            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 0.5); // Confetes retangulares e finos
            
            ctx.restore();
        }
    }

    // Inicializa a matriz de confetes
    function initConfetti() {
        for (let i = 0; i < numConfettis; i++) {
            confettis.push(new Confetti());
        }
    }

    // Loop de renderização com RequestAnimationFrame
    function animateConfetti() {
        // Limpa o frame anterior pra desenhar o novo
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Atualiza e desenha cada particula
        for (let c of confettis) {
            c.update();
            c.draw();
        }

        requestAnimationFrame(animateConfetti);
    }

    // Inicia a diversão!
    initConfetti();
    animateConfetti();
});
