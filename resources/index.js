let converter = new showdown.Converter()
let inputMD = document.querySelector('#inputMD')

inputMD.addEventListener("keyup", update)
function update() {
  let outputMD = document.querySelector('#outputMD')
  outputMD.innerHTML = converter.makeHtml(inputMD.value)
}
update()




// Funzioni tasti //
let fileName = document.querySelector('#fileName')
let saveBtn = document.querySelector('#saveBtn')
let deleteBtn = document.querySelector('#deleteBtn')
saveBtn.addEventListener("click", download)
deleteBtn.addEventListener("click", deleteFile)


function download() {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(inputMD.value));
  element.setAttribute('download', fileName.value);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function deleteFile() {
  inputMD.value = ''
  update()
}