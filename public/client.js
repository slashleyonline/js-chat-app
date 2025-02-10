const socket = io('ws://localhost:8081');


socket.on('message', text => {
    const el = document.createElement('li');
    el.innerHTML = text;
    document.querySelector(".message-list").appendChild(el);
})

document.querySelector('button').onclick = () => {
    const text = document.querySelector('input').value;
    socket.emit('message', text);
    document.getElementById("chatmessage").value = "";
}

