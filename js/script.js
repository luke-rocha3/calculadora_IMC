
const form = document.querySelector(".form");

form.addEventListener("submit", function(evento) {
    evento.preventDefault(); 

   
    const inputPeso = evento.target.querySelector("#peso");
    const inputAltura = evento.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado("Peso inválido", false);
        return;
    }
    if (!altura) {
        setResultado("Altura inválida", false);
        return;
    }

    const imc = getImc(peso, altura);
    const tiposImc = getTiposImc(imc);

    
    setResultado(`Seu IMC é ${imc} (${tiposImc})`, true);
});


function setResultado(msg, isvalid) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = ''; 
    const p = criarP();
    if(isvalid){ 
        p.classList.add('paragrafo-resultado');
    }else{
       p.classList.add('erro');
    }
    p.innerHTML = msg;

    
    resultado.appendChild(p);
}


function criarP(className) {
    const p = document.createElement('p');
    p.classList.add(className); 
    return p; 
}


function getImc(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2); 
}

function getTiposImc(imc) {
    const tipos = ["abaixo do peso", "peso normal", "sobrepeso", "obesidade grau 1", "obesidade grau 2", "obesidade grau 3"];

    if (imc >= 39.9) {
        return tipos[5];
    } else if (imc >= 34.9) {
        return tipos[4];
    } else if (imc >= 29.9) {
        return tipos[3];
    } else if (imc >= 24.9) {
        return tipos[2];
    } else if (imc >= 18.5) {
        return tipos[1];
    } else {
        return tipos[0];
    }
}
