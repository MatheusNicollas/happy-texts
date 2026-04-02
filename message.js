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

    // Neve, Árvores e Bolinhas para o Natal
    const snowCanvas = document.getElementById('snowCanvas');
    if (snowCanvas) {
        const ctx = snowCanvas.getContext('2d');
        let particles = [];
        const numParticles = 120; // Um pouco mais de partículas para preencher bem

        function resizeCanvas() {
            snowCanvas.width = window.innerWidth;
            snowCanvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class ChristmasParticle {
            constructor() {
                this.x = Math.random() * snowCanvas.width;
                this.y = Math.random() * snowCanvas.height - snowCanvas.height;
                
                // Distribuição: 60% neve, 20% bolinhas vermelhas, 20% pinheirinhos
                let r = Math.random();
                if (r < 0.6) {
                    this.type = 'snow';
                    this.size = Math.random() * 3 + 1;
                    this.speedY = Math.random() * 2 + 1;
                    this.speedX = Math.random() * 1 - 0.5;
                    this.rotation = 0;
                    this.rotationSpeed = 0;
                } else if (r < 0.8) {
                    this.type = 'bauble';
                    this.size = Math.random() * 5 + 4; // tamanho 4 a 9
                    this.speedY = Math.random() * 1.5 + 1;
                    this.speedX = Math.random() * 1 - 0.5;
                    this.rotation = Math.random() * Math.PI * 2;
                    this.rotationSpeed = (Math.random() - 0.5) * 0.05;
                } else {
                    this.type = 'tree';
                    this.size = Math.random() * 6 + 6; // tamanho 6 a 12
                    this.speedY = Math.random() * 1.2 + 0.8;
                    this.speedX = Math.random() * 0.5 - 0.25;
                    this.rotation = (Math.random() - 0.5) * 0.3; // leve balanço
                    this.rotationSpeed = (Math.random() - 0.5) * 0.015;
                }
            }
            update() {
                this.y += this.speedY;
                this.x += this.speedX;
                
                if (this.type === 'snow') {
                    this.x += Math.sin(this.y * 0.02) * 0.5;
                } else {
                    this.x += Math.sin(this.y * 0.01) * 0.3;
                    this.rotation += this.rotationSpeed;
                }
                
                if (this.y > snowCanvas.height + 20) {
                    this.y = -20;
                    this.x = Math.random() * snowCanvas.width;
                }
            }
            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);
                
                if (this.type === 'snow') {
                    ctx.beginPath();
                    ctx.arc(0, 0, this.size, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                    ctx.fill();
                    ctx.closePath();
                } else if (this.type === 'bauble') {
                    // Topo dourado (onde pendura)
                    ctx.fillStyle = '#facc15';
                    ctx.fillRect(-this.size/4, -this.size - 2, this.size/2, 3);
                    // Bolinha vermelha
                    ctx.beginPath();
                    ctx.arc(0, 0, this.size, 0, Math.PI * 2);
                    ctx.fillStyle = '#dc2626'; // Vermelho
                    ctx.fill();
                    ctx.closePath();
                    // Reflexo de luz (brilho)
                    ctx.beginPath();
                    ctx.arc(-this.size/3, -this.size/3, this.size/3, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
                    ctx.fill();
                    ctx.closePath();
                } else if (this.type === 'tree') {
                    // Tronco
                    ctx.fillStyle = '#78350f'; // Marrom
                    ctx.fillRect(-this.size*0.2, this.size, this.size*0.4, this.size*0.7);
                    // Folhas (Triângulo)
                    ctx.fillStyle = '#16a34a'; // Verde vibrante
                    ctx.beginPath();
                    ctx.moveTo(0, -this.size);
                    ctx.lineTo(-this.size * 1.2, this.size);
                    ctx.lineTo(this.size * 1.2, this.size);
                    ctx.closePath();
                    ctx.fill();
                    // Estrela no topo
                    ctx.fillStyle = '#facc15'; // Amarelo
                    ctx.beginPath();
                    ctx.arc(0, -this.size, this.size*0.3, 0, Math.PI * 2);
                    ctx.fill();
                }
                
                ctx.restore();
            }
        }

        function initParticles() {
            for (let i = 0; i < numParticles; i++) {
                particles.push(new ChristmasParticle());
            }
        }
        function animateParticles() {
            ctx.clearRect(0, 0, snowCanvas.width, snowCanvas.height);
            for (let p of particles) {
                p.update();
                p.draw();
            }
            requestAnimationFrame(animateParticles);
        }
        initParticles();
        animateParticles();
    }
    // Coelhinhos e Ovos para a Páscoa
    const easterCanvas = document.getElementById('easterCanvas');
    if (easterCanvas) {
        const ctx = easterCanvas.getContext('2d');
        let easterParticles = [];
        const numEasterParticles = 60; // Número menor para os coelhinhos e ovos ficarem com espaço

        function resizeCanvas() {
            easterCanvas.width = window.innerWidth;
            easterCanvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class EasterParticle {
            constructor() {
                this.x = Math.random() * easterCanvas.width;
                this.y = Math.random() * easterCanvas.height - easterCanvas.height;
                
                // Distribuição: 70% ovinhos de páscoa, 30% coelhinhos
                let r = Math.random();
                if (r < 0.7) {
                    this.type = 'egg';
                    this.size = Math.random() * 6 + 5; // tamanho 5 a 11
                    this.color = ['#fbcfe8', '#bfdbfe', '#fef08a', '#d9f99d', '#e9d5ff'][Math.floor(Math.random() * 5)]; // Tons pastéis
                    this.speedY = Math.random() * 1.5 + 1.5;
                    this.speedX = Math.random() * 1 - 0.5;
                    this.rotation = Math.random() * Math.PI * 2;
                    this.rotationSpeed = (Math.random() - 0.5) * 0.05;
                } else {
                    this.type = 'bunny';
                    this.size = Math.random() * 5 + 4; // tamanho 4 a 9
                    this.speedY = Math.random() * 1.2 + 1.2;
                    this.speedX = Math.random() * 1 - 0.5;
                    this.rotation = (Math.random() - 0.5) * 0.3; // leve balanço
                    this.rotationSpeed = (Math.random() - 0.5) * 0.02;
                }
            }
            update() {
                this.y += this.speedY;
                this.x += this.speedX;
                
                this.x += Math.sin(this.y * 0.01) * 0.3;
                this.rotation += this.rotationSpeed;
                
                if (this.y > easterCanvas.height + 30) {
                    this.y = -30;
                    this.x = Math.random() * easterCanvas.width;
                }
            }
            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);
                
                if (this.type === 'egg') {
                    // Ovo: um círculo alongado verticalmente
                    ctx.scale(1, 1.3);
                    ctx.beginPath();
                    ctx.arc(0, 0, this.size, 0, Math.PI * 2);
                    ctx.fillStyle = this.color;
                    ctx.fill();
                    ctx.closePath();
                    // Leve brilho
                    ctx.beginPath();
                    ctx.arc(-this.size/3, -this.size/3, this.size/3, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
                    ctx.fill();
                    ctx.closePath();
                } else if (this.type === 'bunny') {
                    ctx.fillStyle = '#ffffff'; // Coelho branco
                    
                    // Orelha esquerda
                    ctx.beginPath();
                    ctx.ellipse(-this.size/2.5, -this.size, this.size/3.5, this.size, -Math.PI/8, 0, Math.PI * 2);
                    ctx.fill();
                    
                    // Orelha direita
                    ctx.beginPath();
                    ctx.ellipse(this.size/2.5, -this.size, this.size/3.5, this.size, Math.PI/8, 0, Math.PI * 2);
                    ctx.fill();
                    
                    // Detalhe orelha esquerda
                    ctx.fillStyle = '#fbcfe8'; // Rosa pastel
                    ctx.beginPath();
                    ctx.ellipse(-this.size/2.5, -this.size, this.size/7, this.size/1.5, -Math.PI/8, 0, Math.PI * 2);
                    ctx.fill();
                    
                    // Detalhe orelha direita
                    ctx.beginPath();
                    ctx.ellipse(this.size/2.5, -this.size, this.size/7, this.size/1.5, Math.PI/8, 0, Math.PI * 2);
                    ctx.fill();

                    // Cabeça do coelho
                    ctx.fillStyle = '#ffffff'; 
                    ctx.beginPath();
                    ctx.arc(0, 0, this.size, 0, Math.PI * 2);
                    ctx.fill();

                    // Focinho rosa
                    ctx.fillStyle = '#fbcfe8';
                    ctx.beginPath();
                    ctx.arc(0, this.size/3, this.size/4, 0, Math.PI * 2);
                    ctx.fill();
                }
                
                ctx.restore();
            }
        }

        function initEasterParticles() {
            for (let i = 0; i < numEasterParticles; i++) {
                easterParticles.push(new EasterParticle());
            }
        }
        function animateEasterParticles() {
            ctx.clearRect(0, 0, easterCanvas.width, easterCanvas.height);
            for (let p of easterParticles) {
                p.update();
                p.draw();
            }
            requestAnimationFrame(animateEasterParticles);
        }
        initEasterParticles();
        animateEasterParticles();
    }
    // Rosas e Pétalas para o Dia das Mães
    const mothersdayCanvas = document.getElementById('mothersdayCanvas');
    if (mothersdayCanvas) {
        const ctx = mothersdayCanvas.getContext('2d');
        let roseParticles = [];
        const numRoseParticles = 70; // Uma quantidade delicada

        function resizeCanvas() {
            mothersdayCanvas.width = window.innerWidth;
            mothersdayCanvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class RoseParticle {
            constructor() {
                this.x = Math.random() * mothersdayCanvas.width;
                this.y = Math.random() * mothersdayCanvas.height - mothersdayCanvas.height;
                
                // 70% pétalas soltas, 30% rosas inteiras
                let r = Math.random();
                if (r < 0.7) {
                    this.type = 'petal';
                    this.size = Math.random() * 4 + 3; // 3 a 7
                    this.color = ['#fb7185', '#f43f5e', '#e11d48'][Math.floor(Math.random() * 3)];
                    this.speedY = Math.random() * 1.5 + 0.8;
                    this.speedX = Math.random() * 1.5 - 0.75;
                    this.rotation = Math.random() * Math.PI * 2;
                    this.rotationSpeed = (Math.random() - 0.5) * 0.08;
                } else {
                    this.type = 'rose';
                    this.size = Math.random() * 5 + 5; // 5 a 10
                    this.color = ['#f43f5e', '#e11d48', '#be123c'][Math.floor(Math.random() * 3)];
                    this.speedY = Math.random() * 2 + 1.2;
                    this.speedX = Math.random() * 1 - 0.5;
                    this.rotation = (Math.random() - 0.5) * 0.4;
                    this.rotationSpeed = (Math.random() - 0.5) * 0.03;
                }
            }
            update() {
                this.y += this.speedY;
                this.x += this.speedX;
                
                if (this.type === 'petal') {
                    this.x += Math.sin(this.y * 0.02) * 1.0;
                    this.rotation += this.rotationSpeed;
                } else {
                    this.x += Math.sin(this.y * 0.01) * 0.5;
                    this.rotation += Math.sin(this.y * 0.01) * 0.02; // Leve balanço tipo pêndulo
                }
                
                if (this.y > mothersdayCanvas.height + 40) {
                    this.y = -40;
                    this.x = Math.random() * mothersdayCanvas.width;
                }
            }
            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);
                
                if (this.type === 'petal') {
                    ctx.fillStyle = this.color;
                    ctx.beginPath();
                    // Forma delicada de gota/pétala
                    ctx.moveTo(0, -this.size);
                    ctx.quadraticCurveTo(this.size, 0, 0, this.size);
                    ctx.quadraticCurveTo(-this.size, 0, 0, -this.size);
                    ctx.fill();
                } else if (this.type === 'rose') {
                    // Caule
                    ctx.strokeStyle = '#22c55e'; // Verde claro para maté-lo vibrante
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.quadraticCurveTo(this.size, this.size*2, 0, this.size*3.5);
                    ctx.stroke();
                    
                    // Folha
                    ctx.fillStyle = '#16a34a'; // Verde ligeiramente mais escuro
                    ctx.beginPath();
                    ctx.ellipse(-this.size/1.5, this.size*1.5, this.size/1.2, this.size/2.5, -Math.PI/4, 0, Math.PI * 2);
                    ctx.fill();
                    
                    // Corpo da rosa
                    ctx.fillStyle = this.color;
                    ctx.beginPath();
                    ctx.arc(0, 0, this.size, 0, Math.PI * 2);
                    ctx.fill();
                    
                    // Brilho superior
                    ctx.fillStyle = 'rgba(255,255,255,0.2)';
                    ctx.beginPath();
                    ctx.arc(-this.size/4, -this.size/4, this.size/1.5, 0, Math.PI * 2);
                    ctx.fill();
                    
                    // Espiral interna para dar aparência de botão/pétalas fechadas
                    ctx.strokeStyle = 'rgba(0,0,0,0.15)';
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.arc(0, 0, this.size/2, 0, Math.PI);
                    ctx.stroke();
                }
                
                ctx.restore();
            }
        }

        function initRoseParticles() {
            for (let i = 0; i < numRoseParticles; i++) {
                roseParticles.push(new RoseParticle());
            }
        }
        function animateRoseParticles() {
            ctx.clearRect(0, 0, mothersdayCanvas.width, mothersdayCanvas.height);
            for (let p of roseParticles) {
                p.update();
                p.draw();
            }
            requestAnimationFrame(animateRoseParticles);
        }
        initRoseParticles();
        animateRoseParticles();
    }
    // Animação para o Dia dos Pais (Gravatas, Bigodes e Estrelas)
    const fathersdayCanvas = document.getElementById('fathersdayCanvas');
    if (fathersdayCanvas) {
        const ctx = fathersdayCanvas.getContext('2d');
        let fathersdayParticles = [];
        const numFathersParticles = 60; 

        function resizeCanvas() {
            fathersdayCanvas.width = window.innerWidth;
            fathersdayCanvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class FathersdayParticle {
            constructor() {
                this.x = Math.random() * fathersdayCanvas.width;
                this.y = Math.random() * fathersdayCanvas.height - fathersdayCanvas.height;
                
                // Distribuição: 45% gravatas, 35% bigodes, 20% estrelas
                let r = Math.random();
                if (r < 0.45) {
                    this.type = 'tie';
                    this.size = Math.random() * 8 + 6; 
                    this.color = ['#0284c7', '#0369a1', '#cbd5e1'][Math.floor(Math.random() * 3)]; // Tons de azul/cinza
                    this.speedY = Math.random() * 1.5 + 1.0;
                    this.speedX = Math.random() * 1 - 0.5;
                    this.rotation = (Math.random() - 0.5) * 0.5;
                    this.rotationSpeed = (Math.random() - 0.5) * 0.02;
                } else if (r < 0.8) {
                    this.type = 'moustache';
                    this.size = Math.random() * 6 + 5; 
                    this.color = ['#1e293b', '#334155', '#475569'][Math.floor(Math.random() * 3)]; // Tons escuros
                    this.speedY = Math.random() * 1.2 + 0.8;
                    this.speedX = Math.random() * 1.5 - 0.75;
                    this.rotation = (Math.random() - 0.5) * 0.3;
                    this.rotationSpeed = (Math.random() - 0.5) * 0.03;
                } else {
                    this.type = 'star';
                    this.size = Math.random() * 5 + 4; 
                    this.color = '#facc15'; // Estrela dourada
                    this.speedY = Math.random() * 2 + 1.5;
                    this.speedX = Math.random() * 1 - 0.5;
                    this.rotation = Math.random() * Math.PI * 2;
                    this.rotationSpeed = (Math.random() - 0.5) * 0.1;
                }
            }
            update() {
                this.y += this.speedY;
                this.x += this.speedX;
                
                if (this.type === 'star') {
                    this.x += Math.sin(this.y * 0.02) * 1.0; // Movimento leve das estrelas
                    this.rotation += this.rotationSpeed;
                } else if (this.type === 'tie') {
                    this.x += Math.sin(this.y * 0.01) * 0.5;
                    this.rotation += Math.sin(this.y * 0.02) * 0.03; // balanço da gravata
                } else {
                    this.x += this.speedX;
                    this.rotation += this.rotationSpeed;
                }
                
                if (this.y > fathersdayCanvas.height + 40) {
                    this.y = -40;
                    this.x = Math.random() * fathersdayCanvas.width;
                }
            }
            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);
                
                if (this.type === 'tie') {
                    ctx.fillStyle = this.color;
                    
                    // Nó da gravata
                    ctx.beginPath();
                    ctx.moveTo(-this.size/2, -this.size);
                    ctx.lineTo(this.size/2, -this.size);
                    ctx.lineTo(this.size/3, -this.size/2);
                    ctx.lineTo(-this.size/3, -this.size/2);
                    ctx.closePath();
                    ctx.fill();

                    // Corpo da gravata
                    ctx.beginPath();
                    ctx.moveTo(-this.size/3, -this.size/2);
                    ctx.lineTo(this.size/3, -this.size/2);
                    ctx.lineTo(this.size/1.2, this.size*1.5);
                    ctx.lineTo(0, this.size*2.2);
                    ctx.lineTo(-this.size/1.2, this.size*1.5);
                    ctx.closePath();
                    ctx.fill();
                    
                } else if (this.type === 'moustache') {
                    ctx.fillStyle = this.color;
                    
                    // Parte esquerda do bigode
                    ctx.beginPath();
                    ctx.ellipse(-this.size/1.2, 0, this.size, this.size*0.4, Math.PI/6, 0, Math.PI*2);
                    ctx.fill();
                    
                    // Parte direita do bigode
                    ctx.beginPath();
                    ctx.ellipse(this.size/1.2, 0, this.size, this.size*0.4, -Math.PI/6, 0, Math.PI*2);
                    ctx.fill();
                    
                } else if (this.type === 'star') {
                    ctx.fillStyle = this.color;
                    ctx.beginPath();
                    for (let i = 0; i < 5; i++) {
                        ctx.lineTo(Math.cos((18+i*72)*Math.PI/180)*this.size, -Math.sin((18+i*72)*Math.PI/180)*this.size);
                        ctx.lineTo(Math.cos((54+i*72)*Math.PI/180)*this.size*0.4, -Math.sin((54+i*72)*Math.PI/180)*this.size*0.4);
                    }
                    ctx.closePath();
                    ctx.fill();
                }
                
                ctx.restore();
            }
        }

        function initFathersParticles() {
            for (let i = 0; i < numFathersParticles; i++) {
                fathersdayParticles.push(new FathersdayParticle());
            }
        }
        function animateFathersParticles() {
            ctx.clearRect(0, 0, fathersdayCanvas.width, fathersdayCanvas.height);
            for (let p of fathersdayParticles) {
                p.update();
                p.draw();
            }
            requestAnimationFrame(animateFathersParticles);
        }
        initFathersParticles();
        animateFathersParticles();
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
