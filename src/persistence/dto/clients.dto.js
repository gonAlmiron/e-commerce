export default class ClientsDTO {
    constructor({razonSocial, direccion, _id, cuit}) {
        this.razonSocial = razonSocial
        this.direccion = direccion
        this.id = _id
        this.cuit = cuit
    }
}

export const asDto = (clients) => {
        if(Array.isArray(clients)) 
            return clients.map(c => new ClientsDTO(c))
        else
            return new ClientsDTO(clients)
        }


