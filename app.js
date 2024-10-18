// Función para verificar si un año es bisiesto
function esBisiesto(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Manejo de navegación para volver al menú
document.querySelectorAll('.back-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.screen').forEach(screen => screen.style.display = 'none');
        document.getElementById('menu').style.display = 'flex';
    });
});

// Navegación desde el menú principal
document.querySelector('.menu-button:nth-child(1)').addEventListener('click', () => {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('conversor').style.display = 'flex';
});

document.querySelector('.menu-button:nth-child(2)').addEventListener('click', () => {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('bisiesto').style.display = 'flex';
});

document.querySelector('.menu-button:nth-child(3)').addEventListener('click', () => {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('creditos').style.display = 'flex';
});

// Funcionalidad del botón "Continuar" en la pantalla de "Bisiesto"
document.querySelector('.continue-button').addEventListener('click', () => {
    const year = document.getElementById('year').value;
    const resultScreen = document.getElementById('result-bisiesto');
    
    if (year && !isNaN(year)) {
        const isLeap = esBisiesto(year);
        const resultMessage = isLeap ? `El año ${year} es bisiesto` : `El año ${year} no es bisiesto`;
        resultScreen.querySelector('p').textContent = resultMessage;

        // Ocultar la pantalla de bisiesto y mostrar el resultado
        document.getElementById('bisiesto').style.display = 'none';
        resultScreen.style.display = 'flex';
    } else {
        alert('Por favor, ingresa un año válido.');
    }
});

//Funcionalidad de boton farenheit
document.getElementById('btnF').addEventListener('click', () => {
    let num = document.getElementById('temp').value;
    const resultScreen = document.getElementById('showRes');
    let res = ((num * 9/5) + 32).toFixed(); 
    if(num.trim()===''){
        resultScreen.textContent = "Ingresa un numero"
    }else{
        const result = `${num}° Celsius a Fahrenheit son: ${res}°`;
        resultScreen.textContent = result;
    }
});
//Funcionalidad de boton celcius
document.getElementById('btnC').addEventListener('click', () => {
    let num = document.getElementById('temp').value;
    const resultScreen = document.getElementById('showRes');
    let res = ((num - 32) * 5/9).toFixed(2); 
    if(num.trim()===''){
        resultScreen.textContent = "Ingresa un numero"
    }else{
        const result = `${num}° Farenheit a Celcius son: ${res}°`;
        resultScreen.textContent = result;
    }
});
