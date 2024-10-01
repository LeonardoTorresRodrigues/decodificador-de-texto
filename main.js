function createCharacterMap() {
    return {
      a: 'ai',
      e: 'enter',
      i: 'imes',
      o: 'ober',
      u: 'ufat'
    };
  }
  
  function substituteCharacters(text, map) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      let found = false;
      for (const key in map) {
        if (text.substring(i).startsWith(key)) {
          result += map[key];
          i += key.length - 1;
          found = true;
          break;
        }
      }
      if (!found) {
        result += text[i];
      }
    }
    return result;
  }
  
  function Criptografar() {
    const textInput = document.getElementById("text__input").value;
    const map = createCharacterMap();
    const textEncrypted = substituteCharacters(textInput, map);
    TextOutput(textEncrypted);
  }
  
  function Descriptografar() {
    const textInput = document.getElementById("text__input").value;
    const map = createCharacterMap();
    const invertedMap = Object.entries(map).reduce((acc, [key, value]) => ({ ...acc, [value]: key }), {});
    const textDecrypted = substituteCharacters(textInput, invertedMap);
    TextOutput(textDecrypted);
  }

function TextOutput(text) {
    const asideContent = document.getElementById("output__content");

    while (asideContent.firstChild) {
        asideContent.removeChild(asideContent.firstChild);
    }

    const newParagraph = document.createElement("figcaption");
    newParagraph.textContent = text;

    asideContent.appendChild(newParagraph);
}