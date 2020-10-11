const draggable = document.querySelector('.fill');
const containers = document.querySelectorAll('.empty'); //creates a node list

draggable.addEventListener('dragstart', ()=>{
    console.log('dragstart');
});

containers.forEach(container =>{
    container.addEventListener('dragover', (event)=>{
        event.preventDefault();
    })
})

containers.forEach(
    container =>{container.addEventListener("dragenter", function( event ) {
    container.classList.add('hovered');
})
})

containers.forEach(container =>{
    container.addEventListener("dragleave", function( event ) {
    container.classList.remove('hovered');
})
})

containers.forEach(container =>{
    container.addEventListener("drop", function (event){
    event.preventDefault();
    container.appendChild(draggable);
})
})