
class ChatUiUpdater {
    constructor (list) {
        this.list = list;
    }

    render(data) {

        const fnsDate = dateFns.distanceInWordsToNow(
            data.created_at.toDate(), {addSuffix: true}
        )
        let html = `
        <li class="list-group-item chatRoom__listGroup">
            <span class="username">${data.username}</span>
            <span class="message d-block">${data.message}</span>
            <span class="date">${fnsDate}</span>
        </li>        
        `;

        this.list.innerHTML += html;
        
    }
    clear() {
        this.list.innerHTML = '';
    }
}