const waterLevel = document.getElementById('waterLevel');
const percentageDisplay = document.getElementById('percentage');
const fillButton = document.getElementById('fillButton');

let currentLevel = 0;

fillButton.addEventListener('click', () => {
    if (currentLevel < 100) {
        currentLevel += 25;
        updateWaterLevel();
    }
    
    if (currentLevel >= 100) {
        fillButton.disabled = true;
        fillButton.style.backgroundColor = '#cccccc';
    }
});

function updateWaterLevel() {
    waterLevel.style.height = `${currentLevel}%`;
    percentageDisplay.textContent = `${currentLevel}%`;
    
    // Mudar a cor da água baseado no nível
    if (currentLevel < 30) {
        waterLevel.style.backgroundColor = '#ff4444'; // Vermelho para nível baixo
    } else if (currentLevel < 70) {
        waterLevel.style.backgroundColor = '#ffbb33'; // Amarelo para nível médio
    } else {
        waterLevel.style.backgroundColor = '#4CAF50'; // Verde para nível alto
    }
} 