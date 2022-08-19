// Funcion para encriptar texto y mostrar:
function encrypt(){
    var text = textArea.value;
    text = text.toLowerCase();
    var newText = "";
    var lengthText = text.length;
    for(i=0;i<lengthText;i++){
        var letter = text.charAt(i);
        switch (letter){
            case "a":
                newText = newText+"ai";
            break;
            case "e":
                newText = newText+"enter";
            break;
            case "i":
                newText = newText+"imes";
            break;
            case "o":
                newText = newText+"ober";
            break;
            case "u":
                newText = newText+"ufat";
            break;
            default:
                newText = newText+letter;
        }
    }
    //Aqui desaparece la imagen y los texto, y aparece el texto traducido
    document.getElementById("translatedTextAreaImage").style.display = "none";
    document.getElementById("translatedTextAreaTitle").style.display = "none";
    translationArea.innerText = newText;
}

//Funcion para desencriptar:
function decrypt(){
    var text = textArea.value;
    text = text.toLowerCase();
    var newText = "";
    var i=0;
    while(i<text.length){
        var letter = text.charAt(i);
        switch (letter){
            case "a":
                newText = newText+"a";
                text = text.replace("ai","a");
            break;
            case "e":
                newText = newText+"e";
                text = text.replace("enter","e");
            break;
            case "i":
                newText = newText+"i";
                text = text.replace("imes","i");
            break;
            case "o":
                newText = newText+"o";
                text = text.replace("ober","o");
            break;
            case "u":
                newText = newText+"u";
                text = text.replace("ufat","u");
            break;
            default:
                newText = newText+letter;
        }
        i++;   
    }
    //Aqui desaparece la imagen y los texto, y aparece el texto traducido
    document.getElementById("translatedTextAreaImage").style.display = "none";
    document.getElementById("translatedTextAreaTitle").style.display = "none";
    translationArea.innerText = newText;

}


//Desarrollo:

//Se obtienen los elementos del html
var textArea = document.getElementById("textArea");

var buttonEncrypt = document.getElementById("buttonEncrypt");

var buttonDecrypt = document.getElementById("buttonDecrypt");

var translationArea = document.getElementById("translationArea")

buttonEncrypt.onclick = encrypt;

buttonDecrypt.onclick = decrypt;