const birthdayMessages = [
    "Que o seu dia seja repleto de alegria, sorrisos e momentos inesquecíveis! Parabéns! 🥳",
    "Espero que seu dia seja tão incrível quanto você! Aproveite muito o seu aniversário! 🎉",
    "Que este novo ano de vida lhe traga muita paz, saúde e sucesso nas suas conquistas! 🥂",
    "Celebre a vida, ame as pessoas e aproveite cada momento de hoje. Feliz aniversário! ✨",
    "Um ano novo inteirinho para você brilhar. Tudo de mais maravilhoso no seu dia especial! 🍰"
];

const christmasMessages = [
    "Que a magia do Natal ilumine sua vida e de toda sua família! Feliz Natal! 🎄✨",
    "Desejo um Natal cheio de paz, amor e esperança para você! 🎅🎁",
    "Que o espírito natalino traga alegria e momentos inesquecíveis. Feliz Natal! 🌟",
    "Tempo de celebrar a vida e espalhar o amor. Tenha um Natal maravilhoso! ❤️🌲",
    "Que a sua noite de Natal seja tão especial quanto você. Boas Festas! ⛄❄️"
];

const newYearMessages = [
    "Feliz Ano Novo! Que este novo ciclo traga novas oportunidades e grandes conquistas! 🎆🥂",
    "Que o próximo ano seja repleto de paz, saúde e sucesso para você. Feliz Ano Novo! ✨🎇",
    "Desejo um ano novo cheio de amor e realizações incríveis. Feliz Ano Novo! 🍾",
    "Que a virada do ano renove suas esperanças e traga muitas felicidades! 🌟🥳",
    "Adeus ano velho, feliz ano novo! Que você tenha 365 dias de pura alegria. 🎉"
];

const easterMessages = [
    "Feliz Páscoa! Que esta data renove a fé, a esperança e o amor em seu coração. 🐰🥚",
    "Desejo uma Páscoa doce e cheia de bons momentos ao lado de quem você ama! 🍫🌸",
    "Que o coelhinho traga muita alegria e chocolates para você. Feliz Páscoa! 🐇",
    "Tempo de renascimento e paz. Tenha uma Páscoa maravilhosa e abençoada! 🕊️✨",
    "Que sua Páscoa seja tão doce quanto você. Feliz Páscoa! 🍭🌷"
];

const mothersDayMessages = [
    "Feliz Dia das Mães! Você é sinônimo de amor, força e dedicação. Te amo! ❤️🌹",
    "Para a melhor mãe do mundo: um dia repleto de carinho e gratidão. Feliz Dia das Mães! ✨",
    "Seu amor é o meu maior presente. Parabéns pelo seu dia, mamãe! 🌸💖",
    "Obrigado por tudo que você faz por mim. Feliz Dia das Mães! 🥰👑",
    "Que o seu dia seja tão especial quanto você é para mim. Feliz Dia das Mães! 🤱💐"
];

const fathersDayMessages = [
    "Feliz Dia dos Pais! Você é meu maior exemplo e minha grande inspiração. 👔💙",
    "Pai, obrigado por todo o amor, apoio e conselhos. Tenha um dia maravilhoso! ✨",
    "Para o melhor pai de todos: um dia cheio de alegria e comemoração. Feliz Dia dos Pais! 🏆",
    "Você é meu herói, pai! Parabéns pelo seu dia. 🦸‍♂️🍻",
    "Obrigado por estar sempre ao meu lado. Feliz Dia dos Pais e muito amor para você! 💼"
];

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const nome = urlParams.get('name');
    
    // Identificar a página base pelo nome do arquivo
    const pathname = window.location.pathname;
    let theme = 'birthday';
    let mensagens = birthdayMessages;
    let fallbackTitle = 'Feliz aniversário! 🎂🎈';
    let personalizedTitle = 'Feliz aniversário, {nome}! 🎂🎈';
    let shareTitle = 'Feliz Aniversário!';

    if (pathname.includes('christmas')) {
        theme = 'christmas';
        mensagens = christmasMessages;
        fallbackTitle = 'Feliz Natal! 🎄✨';
        personalizedTitle = 'Feliz Natal, {nome}! 🎄✨';
        shareTitle = 'Feliz Natal!';
    } else if (pathname.includes('newyear')) {
        theme = 'newyear';
        mensagens = newYearMessages;
        fallbackTitle = 'Feliz Ano Novo! 🎆🥂';
        personalizedTitle = 'Feliz Ano Novo, {nome}! 🎆🥂';
        shareTitle = 'Feliz Ano Novo!';
    } else if (pathname.includes('easter')) {
        theme = 'easter';
        mensagens = easterMessages;
        fallbackTitle = 'Feliz Páscoa! 🐰🥚';
        personalizedTitle = 'Feliz Páscoa, {nome}! 🐰🥚';
        shareTitle = 'Feliz Páscoa!';
    } else if (pathname.includes('mothersday')) {
        theme = 'mothersday';
        mensagens = mothersDayMessages;
        fallbackTitle = 'Feliz Dia das Mães! ❤️🌹';
        personalizedTitle = 'Feliz Dia das Mães, {nome}! ❤️🌹';
        shareTitle = 'Feliz Dia das Mães!';
    } else if (pathname.includes('fathersday')) {
        theme = 'fathersday';
        mensagens = fathersDayMessages;
        fallbackTitle = 'Feliz Dia dos Pais! 👔💙';
        personalizedTitle = 'Feliz Dia dos Pais, {nome}! 👔💙';
        shareTitle = 'Feliz Dia dos Pais!';
    }

    const mainTitle = document.getElementById('mainTitle');
    if (mainTitle) {
        if (nome) {
            mainTitle.textContent = personalizedTitle.replace('{nome}', nome);
        } else {
            mainTitle.textContent = fallbackTitle;
        }
    }

    // --- Escolhe uma mensagem aleatória ---
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    const paragrafoDesejo = document.querySelector('.wishes');
    if (paragrafoDesejo) {
        paragrafoDesejo.textContent = mensagemAleatoria;
    }

    // Botão de Nova mensagem
    const newBtn = document.getElementById('newBtn');
    if (newBtn) {
        newBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    // Botão de Compartilhar
    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
        shareBtn.addEventListener('click', async () => {
            const shareData = {
                title: shareTitle,
                text: `Olha só essa mensagem especial! 🎉`,
                url: window.location.href 
            };

            if (navigator.share) {
                try {
                    await navigator.share(shareData);
                } catch (err) {
                    console.log('Compartilhamento cancelado', err);
                }
            } else {
                const whatsappText = encodeURIComponent(`${shareTitle} - ${shareData.text} \nAcesse aqui: ${shareData.url}`);
                window.open(`https://api.whatsapp.com/send?text=${whatsappText}`, '_blank');
            }
        });
    }

    // --- ANIMAÇÕES ---
    // Confetes para Aniversário
    const confettiCanvas = document.getElementById('confettiCanvas');
    if (confettiCanvas) {
        const ctx = confettiCanvas.getContext('2d');
        let confettis = [];
        const numConfettis = 150;
        const colors = ['#F59E0B', '#42A5F5', '#FFCE54', '#48CFAD', '#6366F1'];

        function resizeCanvas() {
            confettiCanvas.width = window.innerWidth;
            confettiCanvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Confetti {
            constructor() {
                this.x = Math.random() * confettiCanvas.width;
                this.y = Math.random() * confettiCanvas.height - confettiCanvas.height;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.size = Math.random() * 8 + 4; 
                this.speedY = Math.random() * 3 + 2;
                this.speedX = Math.random() * 2 - 1;
                this.rotation = Math.random() * 360;
                this.rotationSpeed = Math.random() * 10 - 5;
            }
            update() {
                this.y += this.speedY;
                this.x += this.speedX;
                this.rotation += this.rotationSpeed;
                this.x += Math.sin(this.y * 0.01) * 1; 
                if (this.y > confettiCanvas.height) {
                    this.y = -10;
                    this.x = Math.random() * confettiCanvas.width;
                }
            }
            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate((this.rotation * Math.PI) / 180);
                ctx.fillStyle = this.color;
                ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 0.5);
                ctx.restore();
            }
        }

        function initConfetti() {
            for (let i = 0; i < numConfettis; i++) {
                confettis.push(new Confetti());
            }
        }
        function animateConfetti() {
            ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
            for (let c of confettis) {
                c.update();
                c.draw();
            }
            requestAnimationFrame(animateConfetti);
        }
        initConfetti();
        animateConfetti();
    }

    // Neve para o Natal
    const snowCanvas = document.getElementById('snowCanvas');
    if (snowCanvas) {
        const ctx = snowCanvas.getContext('2d');
        let snowflakes = [];
        const numSnowflakes = 100;

        function resizeCanvas() {
            snowCanvas.width = window.innerWidth;
            snowCanvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Snowflake {
            constructor() {
                this.x = Math.random() * snowCanvas.width;
                this.y = Math.random() * snowCanvas.height - snowCanvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedY = Math.random() * 2 + 1;
                this.speedX = Math.random() * 1 - 0.5;
            }
            update() {
                this.y += this.speedY;
                this.x += this.speedX;
                this.x += Math.sin(this.y * 0.02) * 0.5;
                if (this.y > snowCanvas.height) {
                    this.y = -10;
                    this.x = Math.random() * snowCanvas.width;
                }
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = 'white';
                ctx.fill();
                ctx.closePath();
            }
        }

        function initSnow() {
            for (let i = 0; i < numSnowflakes; i++) {
                snowflakes.push(new Snowflake());
            }
        }
        function animateSnow() {
            ctx.clearRect(0, 0, snowCanvas.width, snowCanvas.height);
            for (let s of snowflakes) {
                s.update();
                s.draw();
            }
            requestAnimationFrame(animateSnow);
        }
        initSnow();
        animateSnow();
    }
    
    // Fogos de artifício para Ano Novo
    const fireworksCanvas = document.getElementById('fireworksCanvas');
    if (fireworksCanvas) {
        const ctx = fireworksCanvas.getContext('2d');
        let particles = [];
        const colors = ['#FFD700', '#FFA500', '#FFFFFF', '#FF8C00'];

        function resizeCanvas() {
            fireworksCanvas.width = window.innerWidth;
            fireworksCanvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor(x, y, color) {
                this.x = x;
                this.y = y;
                this.color = color;
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 5 + 2;
                this.speedX = Math.cos(angle) * speed;
                this.speedY = Math.sin(angle) * speed;
                this.size = Math.random() * 3 + 1;
                this.life = 100;
                this.opacity = 1;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.speedY += 0.05; // gravity
                this.opacity -= 0.015;
                this.life--;
            }
            draw() {
                ctx.save();
                ctx.globalAlpha = Math.max(0, this.opacity);
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.closePath();
                ctx.restore();
            }
        }

        function createFirework(x, y) {
            for (let i = 0; i < 50; i++) {
                particles.push(new Particle(x, y, colors[Math.floor(Math.random() * colors.length)]));
            }
        }

        function animateFireworks() {
            ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
            
            if (Math.random() < 0.03) {
                createFirework(Math.random() * fireworksCanvas.width, Math.random() * (fireworksCanvas.height / 2));
            }

            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.update();
                p.draw();
                if (p.life <= 0) {
                    particles.splice(i, 1);
                }
            }
            requestAnimationFrame(animateFireworks);
        }
        animateFireworks();
    }
});
