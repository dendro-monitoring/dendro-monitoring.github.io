const words = ["collecting","transforming", "transporting", "centralizing", "storing", "exploring"];
let i = 0;

const _changeText = () => {
  i = (i + 1) % words.length;
  document.getElementById("spin").innerHTML = words[i];
}

setInterval("_changeText()", 800);