const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', ()=>{
        draggable.classList.add('dragging');
    })
    draggable.addEventListener('dragend',()=>{
        draggable.classList.remove('dragging');
    })
})

containers.forEach(container => {
    container.addEventListener('dragover',(e)=>{
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY);
        const elementDragged = document.querySelector('.dragging');
        if (afterElement == null){
            container.appendChild(elementDragged);
        } else {
            container.insertBefore(elementDragged, afterElement);
        }
    })
})

function getDragAfterElement(container, y){
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

    return draggableElements.reduce((closest, draggableElement)=>{
        const box = draggableElement.getBoundingClientRect();
        const offset = y - box.top - box.height/2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: draggableElement }
        } else {
            return closest;
        }
    },{offset: Number.NEGATIVE_INFINITY}).element
}
