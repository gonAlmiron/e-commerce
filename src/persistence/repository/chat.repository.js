import { getDao} from "../daos/chat.factory";

export default class ChatRepository {
    constructor() {
    }
    async save (data) {
        const message = await this.dao.save(data);
        return message 
    }

    async getAll() {  
        const messages = await this.dao.getAll();
        return messages;
    }
}