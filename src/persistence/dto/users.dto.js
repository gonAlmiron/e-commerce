export default class UsersDTO {
    constructor({username, password}) {
        this.username = username
        this.password = password
    }
}

export const asDto = (users) => {
        if(Array.isArray(users)) 
            return users.map(c => new UsersDTO(c))
        else
            return new UsersDTO(users)
        }


