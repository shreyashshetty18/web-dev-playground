const gameContainer = document.getElementById('game-container');
const bird = document.getElementById('bird');
const scoreElement = document.getElementById('score');
const startMessage = document.getElementById('start-message');
const gameOverMessage = document.getElementById('game-over-message');
const finalScoreElement = document.getElementById('final-score');

// Game variables
let gameLoop;
let isGameOver = false;
let isGameStarted = false;
let score = 0;

// Bird variables
let birdY = 50; // Percentage
let birdVelocity = 0;
const gravity = 0.25;
const jumpStrength = -5.5;

// Pipe variables
let pipes = [];
const pipeWidth = 60;
const pipeGap = 150; // Gap between top and bottom pipes
const pipeSpeed = 2.5;
const pipeSpawnRate = 1500; // ms
let lastPipeSpawn = 0;

// Container dimensions
let containerWidth, containerHeight;

function init() {
    updateContainerDimensions();
    window.addEventListener('resize', updateContainerDimensions);
    
    // Input listeners
    document.addEventListener('keydown', handleInput);
    gameContainer.addEventListener('touchstart', handleInput, { passive: false });
    gameContainer.addEventListener('mousedown', handleInput);
    
    resetGame();
}

function updateContainerDimensions() {
    containerWidth = gameContainer.clientWidth;
    containerHeight = gameContainer.clientHeight;
}

function handleInput(e) {
    if (e.type === 'touchstart') {
        e.preventDefault(); // Prevent default touch behavior like scrolling
    }
    
    if (e.code === 'Space' || e.type === 'touchstart' || e.type === 'mousedown') {
        if (!isGameStarted) {
            startGame();
        } else if (!isGameOver) {
            jump();
        } else {
            resetGame();
        }
    }
}

function jump() {
    birdVelocity = jumpStrength;
    // Rotate bird upwards
    bird.style.transform = `translateY(-50%) rotate(-20deg)`;
}

function startGame() {
    isGameStarted = true;
    startMessage.classList.add('hidden');
    lastPipeSpawn = performance.now();
    gameLoop = requestAnimationFrame(update);
}

function resetGame() {
    isGameOver = false;
    isGameStarted = false;
    score = 0;
    scoreElement.innerText = score;
    
    birdY = 50;
    birdVelocity = 0;
    bird.style.top = `${birdY}%`;
    bird.style.transform = `translateY(-50%) rotate(0deg)`;
    
    // Remove all pipes
    pipes.forEach(pipe => {
        pipe.top.remove();
        pipe.bottom.remove();
    });
    pipes = [];
    
    startMessage.classList.remove('hidden');
    gameOverMessage.classList.add('hidden');
    
    if (gameLoop) {
        cancelAnimationFrame(gameLoop);
    }
}

function gameOver() {
    isGameOver = true;
    cancelAnimationFrame(gameLoop);
    
    finalScoreElement.innerText = score;
    gameOverMessage.classList.remove('hidden');
    
    // Fall to ground animation
    bird.style.transform = `translateY(-50%) rotate(90deg)`;
}

function spawnPipe() {
    const minPipeHeight = 50;
    const maxPipeHeight = containerHeight - pipeGap - minPipeHeight - 20; // 20 is ground height
    
    const topPipeHeight = Math.floor(Math.random() * (maxPipeHeight - minPipeHeight + 1)) + minPipeHeight;
    
    const topPipe = document.createElement('div');
    topPipe.classList.add('pipe', 'pipe-top');
    topPipe.style.height = `${topPipeHeight}px`;
    topPipe.style.left = `${containerWidth}px`;
    
    const bottomPipe = document.createElement('div');
    bottomPipe.classList.add('pipe', 'pipe-bottom');
    bottomPipe.style.height = `${containerHeight - topPipeHeight - pipeGap - 20}px`; // 20 is ground height
    bottomPipe.style.left = `${containerWidth}px`;
    
    gameContainer.appendChild(topPipe);
    gameContainer.appendChild(bottomPipe);
    
    pipes.push({
        x: containerWidth,
        top: topPipe,
        bottom: bottomPipe,
        passed: false
    });
}

function update(timestamp) {
    if (isGameOver) return;
    
    // Update bird physics
    birdVelocity += gravity;
    
    // Convert percentage to pixels for physics, then back to percentage for CSS
    let birdYPx = (birdY / 100) * containerHeight;
    birdYPx += birdVelocity;
    birdY = (birdYPx / containerHeight) * 100;
    
    bird.style.top = `${birdY}%`;
    
    // Rotate bird downwards as it falls
    if (birdVelocity > 0) {
        const rotation = Math.min(birdVelocity * 3, 90);
        bird.style.transform = `translateY(-50%) rotate(${rotation}deg)`;
    }
    
    // Check boundaries (floor and ceiling)
    if (birdYPx + 12 >= containerHeight - 20 || birdYPx - 12 <= 0) { // 12 is half bird height, 20 is ground
        gameOver();
        return;
    }
    
    // Spawn pipes
    if (timestamp - lastPipeSpawn > pipeSpawnRate) {
        spawnPipe();
        lastPipeSpawn = timestamp;
    }
    
    // Update pipes
    for (let i = pipes.length - 1; i >= 0; i--) {
        const pipe = pipes[i];
        pipe.x -= pipeSpeed;
        
        pipe.top.style.left = `${pipe.x}px`;
        pipe.bottom.style.left = `${pipe.x}px`;
        
        // Check collision
        const birdRect = bird.getBoundingClientRect();
        const topPipeRect = pipe.top.getBoundingClientRect();
        const bottomPipeRect = pipe.bottom.getBoundingClientRect();
        
        // Shrink bird hitbox slightly for fairer gameplay
        const hitboxPadding = 4;
        
        if (
            birdRect.right - hitboxPadding > topPipeRect.left &&
            birdRect.left + hitboxPadding < topPipeRect.right &&
            (birdRect.top + hitboxPadding < topPipeRect.bottom || birdRect.bottom - hitboxPadding > bottomPipeRect.top)
        ) {
            gameOver();
            return;
        }
        
        // Update score
        if (!pipe.passed && pipe.x + pipeWidth < 50) { // 50 is bird left position
            pipe.passed = true;
            score++;
            scoreElement.innerText = score;
        }
        
        // Remove off-screen pipes
        if (pipe.x + pipeWidth < 0) {
            pipe.top.remove();
            pipe.bottom.remove();
            pipes.splice(i, 1);
        }
    }
    
    gameLoop = requestAnimationFrame(update);
}

// Start the game initialization
init();
