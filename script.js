const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');
const wavelengthInput = document.getElementById('wavelength');
const amplitudeInput = document.getElementById('amplitude');
const updateButton = document.getElementById('update');

let wavelength = 50; // Default wavelength
let amplitude = 20;  // Default amplitude
let waveType = 'transverse'; // Default wave type
let time = 0;

// Function to draw transverse wave
function drawTransverseWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;

    for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + amplitude * Math.sin((2 * Math.PI * x / wavelength) - time);
        ctx.lineTo(x, y);
    }
    ctx.stroke();
}

// Function to draw longitudinal wave
function drawLongitudinalWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = 'green';
    for (let x = 0; x < canvas.width; x += 10) {
        const y = canvas.height / 2 + Math.sin((2 * Math.PI * x / wavelength) - time) * amplitude;
        ctx.fillRect(x, y, 10, 5);
    }
}

// Update the wave based on selected type
function drawWave() {
    if (waveType === 'transverse') {
        drawTransverseWave();
    } else {
        drawLongitudinalWave();
    }
}

// Animation loop
function animate() {
    time += 0.1;
    drawWave();
    requestAnimationFrame(animate);
}

// Event listeners
updateButton.addEventListener('click', () => {
    wavelength = parseFloat(wavelengthInput.value);
    amplitude = parseFloat(amplitudeInput.value);
});

document.getElementById('transverse').addEventListener('click', () => {
    waveType = 'transverse';
});

document.getElementById('longitudinal').addEventListener('click', () => {
    waveType = 'longitudinal';
});

// Start the animation
animate();
