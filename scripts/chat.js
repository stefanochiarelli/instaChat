class chatAdder {
    constructor (username, room) {
        this.room = room;
        this.username = username;
        this.chats = deFire.collection('chat');
        this.unsub;
    }
    async chatAdderMessage(message) {
        const chatDate = new Date();
        const chat = {
            message,
            room: this.room,
            username: this.username,
            created_at: firebase.firestore.Timestamp.fromDate(chatDate)
        };
        const response = await this.chats.add(chat)
            return response;
    }

    chatUpdater(theCall) {
       this.unsub = this.chats
        .where('room', '==', this.room)
        .orderBy('created_at')
        .onSnapshot( doc => {
            doc.docChanges().forEach(cambio => {
                if(cambio.type === 'added') {
                    theCall(cambio.doc.data());
                }
            });
        });
    };
    updateUser(username) {
        this.username = username;
        localStorage.setItem('Username', username)
    }

    updateRoom (room) {
        this.room = room;
        if (this.unsub){
            this.unsub();
        }
    }
};





