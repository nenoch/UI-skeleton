function dragstartHandler(event) {
    event.dataTransfer.setData('text', event.target.id);
}

function dropHandler(event){
    event.preventDefault();
    var data = event.dataTransfer.getData('text');
    event.target.appendChild(document.getElementById(data));
}

function dragoverHandler(event){
    event.preventDefault();
}
