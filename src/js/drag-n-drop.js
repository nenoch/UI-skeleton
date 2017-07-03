function dragstartHandler(event) {
    event.dataTransfer.setData('text', event.target.id);
}

function dropHandler(event){
    var data = event.dataTransfer.getData('text');
    event.preventDefault();
    event.target.value = data;
}
