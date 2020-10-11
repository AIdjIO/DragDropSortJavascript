const dropzone = document.getElementById("dropzone");

dropzone.addEventListener('dragover',(event)=>{
    event.preventDefault();
    dropzone.className += " dragover"
});

dropzone.addEventListener('dragleave',(event)=>{
    event.preventDefault();
    dropzone.className = "dropzone"
});
    
dropzone.addEventListener('drop',(event)=>{
    event.preventDefault();
    dropzone.className = "dropzone";
    //call upload function
    upload(event.dataTransfer.files);
});

function upload(files){
    console.log(files);
    var formData = new FormData();
    xhr = new XMLHttpRequest();
    
    for (let i=0;i<files.length; i++){
        formData.append('file[]', files[i]);
    }

    xhr.onload = function(){
        var data = JSON.parse(this.responseText);
        // console.log(data);
        displayUploads(data);
    }
    xhr.open('post', 'demo3/upload.php');
    xhr.send(formData);
}

function displayUploads(data){
    const uploads = document.getElementById('uploads');
    

    for (i=0;i<data.length; i++){
        let anchor = document.createElement('a');
        anchor.href=data[i].file;
        anchor.innerText = data[i].name + '</br>';

        uploads.appendChild(anchor);
    }
}