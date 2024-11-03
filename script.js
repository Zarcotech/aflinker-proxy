const canvas = document.getElementById('starsCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numberOfStars = 100;

// Create stars
for (let i = 0; i < numberOfStars; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        alpha: Math.random(),
        alphaChange: Math.random() * 0.02 + 0.01,
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ffffff'; // Star color

    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();

        // Update star's alpha for twinkling effect
        star.alpha += star.alphaChange;
        if (star.alpha > 1 || star.alpha < 0) {
            star.alphaChange = -star.alphaChange; // Change direction
        }
    });
}

function animate() {
    drawStars();
    requestAnimationFrame(animate);
}

animate();
