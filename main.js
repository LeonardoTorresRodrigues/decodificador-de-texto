function Criptografar() {
    const textInput = document.getElementById("text_input").value;
    const textSplited = textInput.split('');

    let textEncrypted = '';

    textSplited.forEach(letter => {
        switch (letter.toLowerCase()) {
            case 'a':
                textEncrypted += "ai";
                break;
            case 'e':
                textEncrypted += "enter";
                break;
            case 'i':
                textEncrypted += "imes";
                break;
            case 'o':
                textEncrypted += "ober";
                break;
            case 'u':
                textEncrypted += "ufat";
                break;
            default:
                textEncrypted += letter;
        }
    });
    EncryptOutput(textEncrypted)
}

function Descriptografar() {
    const textInput = document.getElementById("text_input").value;
    const dicionario = {
      ober: 'o', // Ordenado por tamanho decrescente
      imes: 'i',
      ufat: 'u',
      enter: 'e',
      ai: 'a'
    };
  
    textoCriptografado = textInput.toLowerCase();
  
    let textoDescriptografado = '';
    let i = 0;
  
    while (i < textoCriptografado.length) {
      let achouSubstituicao = false;
      for (const chave in dicionario) {
        if (textoCriptografado.substring(i).startsWith(chave)) {
          textoDescriptografado += dicionario[chave];
          i += chave.length;
          achouSubstituicao = true;
          break;
        }
      }
      if (!achouSubstituicao) {
        textoDescriptografado += textoCriptografado[i];
        i++;
      }
    }
  
    EncryptOutput(textoDescriptografado);
  }
  

function EncryptOutput(textEncrypted) {
    const asideContent = document.getElementById("aside_content");

    while (asideContent.firstChild) {
        asideContent.removeChild(asideContent.firstChild);
    }

    const newParagraph = document.createElement("p");
    newParagraph.textContent = textEncrypted;

    asideContent.appendChild(newParagraph);
}