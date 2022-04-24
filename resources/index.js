a = JSON.parse(localStorage.getItem('files')) || [];
if (a.length == 0) {
  fetch('https://raw.githubusercontent.com/Hyper2109/WebMarkdownEditor/master/resources/infos.md')
    .then(res => res.text())
    .then(data => {
      a.push({ "fileName": "README.md", "fileContent": data });
      localStorage.setItem('files', JSON.stringify(a));
      inputMD.value = data
      update()
      getFiles()
    })
}


let converter = new showdown.Converter()
let inputMD = document.querySelector('#inputMD')

inputMD.addEventListener("keyup", update)
function update() {
  let outputMD = document.querySelector('#outputMD')
  outputMD.innerHTML = converter.makeHtml(inputMD.value)
}
update()




// Buttons fn //
let fileName = document.querySelector('#fileName')
let saveBtn = document.querySelector('#saveBtn')
let clearBtn = document.querySelector('#deleteBtn')

clearBtn.addEventListener("click", clearFile)


function download() {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(inputMD.value));
  element.setAttribute('download', fileName.value);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function clearFile() {
  inputMD.value = ''
  update()
}


// Files
let filesContainer = document.querySelector('.filesContainer')
let showFilesCheckbox = document.querySelector('#showFilesCheckbox')
let nav = document.querySelector('.nav')
showFilesCheckbox.addEventListener("click", showFiles)

function showFiles() {
  if (showFilesCheckbox.checked) {
    filesContainer.style.height = "250px"
    nav.style.backgroundImage = "url('./resources/close.svg')"
  } else {
    filesContainer.style.height = "0";
    nav.style.backgroundImage = "url('./resources/hamb.svg')"
  }

}