diccionarioIngles ={
    "a": "y",
    "b":"p",
    "c":"l",
    "d":"t",
    "e":"a",
    "f":"v",
    "g":"k",
    "h":"r",
    "i":"e",
    "j":"z",
    "k":"g",
    "l":"m",
    "m":"s",
    "n":"h",
    "ñ":"n",
    "o":"u",
    "p":"b",
    "q":"x",
    "r":"n",
    "s":"c",
    "t":"d",
    "u":"i",
    "v":"j",
    "w":"f",
    "x":"q",
    "y":"o",
    "z":"w"
}
diccionarioAlbhed ={
    "a":"e",
    "b":"p",
    "c":"s",
    "d":"t",
    "e":"i",
    "f":"w",
    "g":"k",
    "h":"n",
    "i":"u",
    "j":"v",
    "k":"g",
    "l":"c",
    "m":"l",
    "n":"r",
    "o":"y",
    "p":"b",
    "q":"x",
    "r":"h",
    "s":"m",
    "t":"d",
    "u":"o",
    "v":"f",
    "w":"z",
    "x":"q",
    "y":"a",
    "z":"j"
}
function enviar(){
    var radio1 = document.getElementsByName("eleccion")
    texto = document.getElementById("traducir").value
    textoLower = texto.toLowerCase()
    resultado = document.getElementById("resultado")
    valor = iterarRadio(radio1)
    if(valor == null){
        alert("debe de seleccionar el campo radio!")
    }
    switch(valor){
        case "albhed":
            frase = traducir(textoLower, diccionarioAlbhed)
            resultado.textContent = "Resultado: "+ frase
            break
        case "ingles":
            frase = traducir(textoLower, diccionarioIngles)
            resultado.textContent = "Resultado: "+ frase
            break
    }

}
function iterarRadio(radio){
    if (radio == ""){
        return null
    }
    for(let i = 0; i<= radio.length;i++){
        if(radio[i].checked){
            return radio[i].value
        }
    }
}
function traducir(texto, dict){
    let fraseTraducida = ""
    for(let i = 0; i<texto.length;i++){
        console.log(texto.charAt(i))
        if(esAlfabetico(texto.charAt(i))){
            for(clave in dict){
                if(clave == texto.charAt(i)){
                    fraseTraducida = fraseTraducida + dict[clave]
                }

            }
        }
        else{
            fraseTraducida = fraseTraducida + texto.charAt(i)
        }
    }
    return fraseTraducida
}

function esAlfabetico(caracter) {
  const regex = /^[A-Za-z]$/;
  return regex.test(caracter);
}