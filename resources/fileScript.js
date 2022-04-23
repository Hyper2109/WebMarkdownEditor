// Save File //
let fileContent = document.querySelector('#inputMD')
saveBtn.addEventListener("click", saveFile)
function saveFile() {
  var a = [];
  a = JSON.parse(localStorage.getItem('files')) || [];
  if (a.length == 0) {
    a.push({ "fileName": fileName.value, "fileContent": fileContent.value });
    localStorage.setItem('files', JSON.stringify(a));

    let newFile = document.createElement('div')
    newFile.addEventListener('click', openFile)
    newFile.setAttribute('class', 'file')
    fileContainer.appendChild(newFile)
    let fileTitle = document.createElement('p')
    fileTitle.innerText = fileName.value
    newFile.appendChild(fileTitle)
    let fileOptions = document.createElement('div')
    fileOptions.setAttribute('class', 'fileOptions')
    newFile.appendChild(fileOptions)
    let downloadBtn = document.createElement('div')
    let deleteBtn = document.createElement('div')
    downloadBtn.setAttribute('id', 'downloadFileBtn')
    deleteBtn.setAttribute('id', 'deleteFileBtn')
    downloadBtn.addEventListener('click', download)
    deleteBtn.addEventListener('click', deleteFile)
    downloadBtn.setAttribute('class', 'downloadFileBtn')
    deleteBtn.setAttribute('class', 'deleteFileBtn')
    fileOptions.appendChild(downloadBtn)
    fileOptions.appendChild(deleteBtn)
  }
  let c = 0
  let found = false
  a.forEach(element => {
    c++
    if (element.fileName == fileName.value) {
      found = true
    } else if (c == a.length && found == false) {
      a.push({ "fileName": fileName.value, "fileContent": fileContent.value });
      localStorage.setItem('files', JSON.stringify(a));

      let newFile = document.createElement('div')
      newFile.addEventListener('click', openFile)
      newFile.setAttribute('class', 'file')
      fileContainer.appendChild(newFile)
      let fileTitle = document.createElement('p')
      fileTitle.innerText = fileName.value
      newFile.appendChild(fileTitle)
      let fileOptions = document.createElement('div')
      fileOptions.setAttribute('class', 'fileOptions')
      newFile.appendChild(fileOptions)
      let downloadBtn = document.createElement('div')
      let deleteBtn = document.createElement('div')
      downloadBtn.setAttribute('id', 'downloadFileBtn')
      deleteBtn.setAttribute('id', 'deleteFileBtn')
      downloadBtn.addEventListener('click', download)
      deleteBtn.addEventListener('click', deleteFile)
      downloadBtn.setAttribute('class', 'downloadFileBtn')
      deleteBtn.setAttribute('class', 'deleteFileBtn')
      fileOptions.appendChild(downloadBtn)
      fileOptions.appendChild(deleteBtn)

    }
  });
  if (found == true) {
    a.every(element => {
      if (element.fileName == fileName.value) {
        console.log(element.fileContent)
        element.fileContent = inputMD.value
        localStorage.setItem('files', JSON.stringify(a));
        return false
      }
      return true
    });
  }
}
// Get saved files
let fileContainer = document.querySelector('.filesContainer')
function getFiles() {
  a = JSON.parse(localStorage.getItem('files')) || [];
  let c = 0
  a.forEach(element => {
    c++
    let newFile = document.createElement('div')
    newFile.addEventListener('click', openFile)
    newFile.setAttribute('class', 'file')
    fileContainer.appendChild(newFile)
    let fileTitle = document.createElement('p')
    fileTitle.innerText = element.fileName
    newFile.appendChild(fileTitle)
    let fileOptions = document.createElement('div')
    fileOptions.setAttribute('class', 'fileOptions')
    newFile.appendChild(fileOptions)
    let downloadBtn = document.createElement('div')
    let deleteBtn = document.createElement('div')
    downloadBtn.setAttribute('id', 'downloadFileBtn' + c)
    deleteBtn.setAttribute('id', 'deleteFileBtn' + c)
    downloadBtn.addEventListener('click', download)
    deleteBtn.addEventListener('click', deleteFile)
    downloadBtn.setAttribute('class', 'downloadFileBtn')
    deleteBtn.setAttribute('class', 'deleteFileBtn')
    fileOptions.appendChild(downloadBtn)
    fileOptions.appendChild(deleteBtn)
  });
}
getFiles()

// Open File

function openFile() {
  console.log(this.innerText)
  a = JSON.parse(localStorage.getItem('files')) || [];
  a.every(element => {
    if (element.fileName == this.innerText) {

      fileName.value = element.fileName

      inputMD.value = element.fileContent
      update()
      return false
    }
    return true
  });
}

// Delete File Button
function deleteFile() {
  this.parentElement.parentElement.remove()
  let c = 0
  a = JSON.parse(localStorage.getItem('files')) || [];
  a.every(element => {
    if (element.fileName == this.parentNode.parentNode.innerText) {
      console.log(element.fileName);

      a.splice(c, 1);
      localStorage.setItem('files', JSON.stringify(a));

      return false
    }
    c++
    return true
  });
  console.log(this.parentNode.parentNode.innerText)
}