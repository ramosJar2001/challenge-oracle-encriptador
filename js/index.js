function encriptar (){
    document.querySelector(".contenido").innerHTML = "";
    var texto = document.querySelector("#text_ingresado").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".salida").textContent = textoCifrado;
    document.querySelector("#text_ingresado").value = "";
    document.querySelector("#btn_copiar").style.visibility = "visible";
}

function desencriptar (){ 
    var texto = document.querySelector("#text_ingresado").value; 
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector(".salida").textContent = textoCifrado; 
    document.querySelector("#text_ingresado").value = "";
    document.querySelector("#btn_copiar").style.visibility = "visible";
}

function copyTextFromElement(elementID) {
    let element = document.getElementById(elementID); //select the element
    let elementText = element.textContent; //get the text content from the element
    copyText(elementText); //use the copyText function below
  }
  
  //If you only want to put some Text in the Clipboard just use this function
  // and pass the string to copied as the argument.
function copyText(text) {
    let element = document.querySelector(".salida"); 
    let elementText = element.textContent;
    navigator.clipboard.writeText(elementText);
}

var boton1 = document.querySelector("#btn_encriptar"); 
boton1.onclick = encriptar;

var boton2 = document.querySelector("#btn_desencriptar"); 
boton2.onclick = desencriptar;

var boton3 = document.querySelector("#btn_copiar"); 
boton3.onclick = copyText;