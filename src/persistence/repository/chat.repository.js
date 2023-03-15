import { getDao} from "../daos/chat.factory";
import { asDto } from "../DTO/clients.dto";

export default class ChatRepository {
    constructor() {
        this.dao = getDao();
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