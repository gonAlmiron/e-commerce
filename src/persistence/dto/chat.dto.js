export default class ChatDTO {
    constructor({message, from, _id}) {
        this.message = message
        this.from = from
        this.id = _id

    }
}

export const asDto = (chat) => {
        if(Array.isArray(chat)) 
            return chat.map(c => new ChatDTO(c))
        else
            return new ChatDTO(chat)
        }


