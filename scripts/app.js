//DOM
const chatUI = document.querySelector('.chat-list')
const messageForm = document.querySelector('.new-chat')
const nameForm = document.querySelector('.new-name')
const chatAlert = document.querySelector('.chatRoom__Alert')
const chatRooms = document.querySelector('.chat-rooms')

//events

//sumbit event for message
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const mensaje = messageForm.message.value.trim();

    //we call the method that adds a message
    chatRoom.chatAdderMessage(mensaje)
    .then(() => {messageForm.reset()})
    .catch(err => console.log(err))
})

//submit event for username
nameForm.addEventListener('submit', e => {
    e.preventDefault();
    const nameValue = nameForm.name.value.trim();

    //we call the method that updates the user
    chatRoom.updateUser(nameValue)

    //once that's done we reset the form
    nameForm.reset();
    chatAlert.classList.toggle('d-none')
    chatAlert.textContent = `Your new username is: ${nameValue}`

    //success setTimeout message
    setTimeout(() => {
        chatAlert.classList.toggle('d-none')
    } ,3000)
})

//click event for room

chatRooms.addEventListener('click', (e) => {
    if(e.target.nodeName === 'BUTTON') {
        chaterUi.clear();
        chatRoom.updateRoom(e.target.getAttribute('id'))
        chatRoom.chatUpdater(chat => chaterUi.render(chat))
        console.log('Room updated')
    }
})


const userLocal = localStorage.Username ? localStorage.Username : 'Guest';

//class instances
const chaterUi = new ChatUiUpdater(chatUI)
const chatRoom = new chatAdder(userLocal, 'general')


//Ui Callback
chatRoom.chatUpdater((data) => chaterUi.render(data))