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

function EncryptOutput(textEncrypted) {
    const asideContent = document.getElementById("aside_content");

    while (asideContent.firstChild) {
        asideContent.removeChild(asideContent.firstChild);
    }

    const newParagraph = document.createElement("p");
    newParagraph.textContent = textEncrypted;

    asideContent.appendChild(newParagraph);
}