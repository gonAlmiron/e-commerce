import { asDto } from "../DTO/clients.dto";
import { getDao} from "../daos/clients.factory";

export default class ClientsRepository {
    constructor() {
        this.dao = getDao();
    }
    async save (data) {
        const client = await this.dao.save(data);
        return client 
    }

    async getAll() {  
        const clients = await this.dao.getAll();
        const clientsDTO = asDto(clients)
        return clientsDTO;
    }

    async getClient(id) {
        const client = await this.dao.getById(id);
        return client
    }
    
    async deleteClient(id) {
        const client = await this.dao.deleteById(id)
        return client
    }

    async updateClient(id, client) {
        const clientUpdate = await this.dao.updateById(id, client)
        return clientUpdate
    }
}

