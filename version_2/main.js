const draggable = document.querySelector('.fill');
const containers = document.querySelectorAll('.empty'); //creates a node list

draggable.addEventListener('dragstart', ()=>{
    console.log('drag start');
    draggable.className+=' hold';
    setTimeout(()=>draggable.className='invisible',0);
});

draggable.addEventListener('dragend', ()=>{
    console.log('drag start');
    draggable.className='fill';
});

containers.forEach(container =>{
    container.addEventListener('dragover', (event)=>{
        console.log('drag over')
        event.preventDefault();
    })
})

containers.forEach(
    container =>{container.addEventListener("dragenter", function( event ) {
    console.log('drag enter');
    event.preventDefault();
    container.classList.add('hovered');
})
})

containers.forEach(container =>{
    console.log('drag leave')
    container.addEventListener("dragleave", function( event ) {
    container.classList.remove('hovered');
})
})

containers.forEach(container =>{
    console.log('drag drop')
    container.addEventListener("drop", function (event){
    event.preventDefault();
    container.appendChild(draggable);
})
})