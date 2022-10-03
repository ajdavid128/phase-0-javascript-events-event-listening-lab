function addingEventListener() {
    const input = document.getElementById('button');

    function clickAlert() {
      alert('I was clicked!');
    }
    
    input.addEventListener('click', clickAlert);
}
addingEventListener();
//This needs to be included or the event function won't be called