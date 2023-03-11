import { asDto } from "../DTO/users.dto";
import { getDao} from "../daos/users.factory";

export default class UsersRepository {
    constructor() {
        this.dao = getDao();
    }
    async save (username, password) {
        const user = await this.dao.save(username, password);
        return user 
    }

    async getAll() {  
        const users = await this.dao.getAll();
        const usersDTO = asDto(users)
        return usersDTO;
    }

    async getUser(username, password) {
        const user = await this.dao.getById(username, password);
        return user
    }
    
    async deleteUser(id) {
        const user = await this.dao.deleteById(id)
        return user
    }

    async updateUser(id, user) {
        const userUpdate = await this.dao.updateById(id, user)
        return userUpdate
    }
}

