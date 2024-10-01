//selecting all required elements
const dropArea = document.querySelector(".drag-area");
dragText = dropArea.querySelector("header");
button = dropArea.querySelector("button");
input = dropArea.querySelector("input");
imageText=document.querySelector(".image-name");
let file;

button.onclick = ()=>{
  input.click();
}

input.addEventListener("change", function(){
  file = this.files[0];
  let FileName=file.name;
  console.log(FileName);
  imageText.innerText=FileName;
  dropArea.classList.add("active");
  showFile();
});

console.log(imageText)



dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault();
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});


dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
});


dropArea.addEventListener("drop", (event)=>{
  event.preventDefault();
  file = event.dataTransfer.files[0];
  console.log(file)
  showFile();
});

function showFile(){
  let fileType = file.type;
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
  if(validExtensions.includes(fileType)){
    let fileReader = new FileReader();
    fileReader.onload = ()=>{
      let fileURL = fileReader.result;
       
      let imgTag = `<img src="${fileURL}" width="auto" height="auto" alt="image">`;
      dropArea.innerHTML = imgTag;
      console.log(imgTag)
    }
    fileReader.readAsDataURL(file);
  }else{
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}


// -------------------------------------------------------------------


function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}



function seterror(id, error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm(){
    let returnval = true;
    clearErrors();




    let email = document.forms['myForm']["femail"].value;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)){
    seterror("email", "Invalid email Format");
        returnval = false;
    }
    

    let phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10){
        seterror("phone", "*Please Enter correct phone-number!");
        returnval = false;
    }

    return returnval;
}