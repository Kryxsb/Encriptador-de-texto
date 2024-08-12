const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for(let i = 0; i<matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replace(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
   }


function btnDesencriptar(){
    const textoDesencriptado = desencriptar(mensaje.value)
    textArea.value = textoDesencriptado
    mensaje.value = "";
}
function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
    for(let i = 0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replace(matrizCodigo[i][1], matrizCodigo[i][0]);
            }
        }
        return stringDesencriptada;
    
    }

function btnCopiar(){
    const textoElement = document.getElementById("mensaje");
    const textoValue = textoElement.value;
      
    textoElement.select();
    textoElement.setSelectionRange(0, 99999); 
      
    navigator.clipboard.writeText(textoValue)
        .then(() => {
        alert(`Texto copiado: ${textoValue}`);
          })
        .catch((error) => {
        console.error(`Error al copiar el texto: ${error}`);
        });
    }

function btnComenzar(){
    textArea.value = "";
    mensaje.value = "";
}



