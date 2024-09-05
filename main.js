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
    return console.log(textEncrypted);
}