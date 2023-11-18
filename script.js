
const decimalparaBinario = (numero) =>{
    let binario = numero.toString(2);
    return binario;
}
const decimalparaOctal = (numero) =>{
    let octal = numero.toString(8);
    return octal;
}
const decimalparaHexadecimal = (numero) =>{
    let hexadecimal = numero.toString(16);
    return hexadecimal;
}

document.addEventListener("DOMContentLoaded", function(){
    let addDecimal = document.querySelector(".decimal");
    let addBinario = document.querySelector(".binario");
    let addOctal = document.querySelector(".octal");
    let addHexadecimal = document.querySelector(".hexadecimal")

    addDecimal.addEventListener("input", function() {
        let numeroDecimal = parseInt(addDecimal.value, 10);
        if(!isNaN(numeroDecimal)){
            let numeroBinario = decimalparaBinario(numeroDecimal);
            addBinario.value = numeroBinario;
            let numeroOctal = decimalparaOctal(numeroDecimal);
            addOctal.value = numeroOctal;
            let numerohexadecimal = decimalparaHexadecimal(numeroDecimal);
            addHexadecimal.value = numerohexadecimal

        }else{
            addBinario.value = " ";
            addOctal.value = "";
            addHexadecimal.value = "";
        }
    });

});


const binarioparaDecimal = (numero) =>{
    let decimal = parseInt(numero, 2);
    return decimal;
}
const binarioparaOctal = (numero) =>{
    let decimal = parseInt(numero, 2);
    let octal = decimal.toString(8);
    return octal;
}
const binarioparaHexadecimal = (numero) =>{
    let decimal = parseInt(numero, 2);
    let hexadecimal = decimal.toString(16);
    return hexadecimal;
}

document.addEventListener("DOMContentLoaded", function(){
    let addBinario = document.querySelector(".binario");
    let addDecimal = document.querySelector(".decimal");
    let addOctal = document.querySelector(".octal");
    let addHexadecimal = document.querySelector(".hexadecimal");
    
    addBinario.addEventListener("input", function(){
        let numeroBinario = addBinario.value;
        if(numeroBinario !== ""){
            let numeroDecimal = binarioparaDecimal(numeroBinario);
            addDecimal.value = numeroDecimal;
            let numeroOctal = binarioparaOctal(numeroBinario);
            addOctal.value = numeroOctal;
            let numerohexadecimal = binarioparaHexadecimal(numeroBinario);
            addHexadecimal.value = numerohexadecimal;
        }else{
            addDecimal.value = "";
            addOctal.value = "";
            addHexadecimal.value = "";
        }
    })
})

const octalparaDecimal = (numero) =>{
    let decimal = parseInt(numero, 8);
    return decimal;
}
const octalparaBinario = (numero) =>{
    let decimal = parseInt(numero, 8);
    let binario = decimal.toString(2);
    return binario;
}
const octalparaHexadecimal = (numero) =>{
    let decimal = parseInt(numero, 8);
    let hexadecimal = decimal.toString(16);
    return hexadecimal;
}

document.addEventListener("DOMContentLoaded", function(){
    let addOctal = document.querySelector(".octal");
    let addDecimal = document.querySelector(".decimal");
    let addBinario = document.querySelector(".binario");
    let addHexadecimal = document.querySelector(".hexadecimal");

    addOctal.addEventListener("input", function(){
        let numeroOctal = addOctal.value;
        if(numeroOctal !== ""){
            let numeroDecimal = octalparaDecimal(numeroOctal);
            addDecimal.value = numeroDecimal;
            let numeroBinario = octalparaBinario(numeroOctal);
            addBinario.value = numeroBinario;
            let numerohexadecimal = octalparaHexadecimal(numeroOctal);
            addHexadecimal.value = numerohexadecimal;
        }else{
            addDecimal.value = "";
            addBinario.value = "";
            addHexadecimal.value = "";
        }
    })
})

const hexadecimalparaDecimal = (numero) => {
    let decimal = parseInt(numero, 16);
    return decimal;
}
const hexadecimalparaBinario = (numero) =>{
    let decimal = parseInt(numero, 16);
    let binario = decimal.toString(2);
    return binario;
}
const hexadecimalparaOctal = (numero) =>{
    let decimal = parseInt(numero, 16);
    let octal = decimal.toString(8);
    return octal;
}

document.addEventListener("DOMContentLoaded", function(){
    let addHexadecimal = document.querySelector(".hexadecimal");
    let addDecimal = document.querySelector(".decimal");
    let addBinario = document.querySelector(".binario");
    let addOctal = document.querySelector(".octal");

    addHexadecimal.addEventListener("input", function(){
        let numerohexadecimal = addHexadecimal.value;
        if(numerohexadecimal !== ""){
            let numeroDecimal = hexadecimalparaBinario(numerohexadecimal);
            addDecimal.value = numeroDecimal;
            let numeroBinario = hexadecimalparaBinario(numerohexadecimal);
            addBinario.value = numeroBinario;
            let numeroOctal = hexadecimalparaOctal(numerohexadecimal);
            addOctal.value = numeroOctal;
        }else{
            addDecimal.value = "";
            addBinario.value = "";
            addOctal.value = "";
        }
    })
})
