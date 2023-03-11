import ClientsRepository from "../persistence/repository/clients.repository";

const clientsRepository = new ClientsRepository

export const saveClient = async (client) => {
    const prod = await clientsRepository.save(client)
    return prod;
};

export const getAllClients = async() => {
    const clients = await clientsRepository.getAll();
    return clients;
};

export const getClient = async(id) => {
    const client = await clientsRepository.getClient(id)
    return client;
}

export const deleteClient = async(id) => {
    const clientDelete = await clientsRepository.deleteClient(id)
    return clientDelete
}

export const updateClient = async(id, client) => {
    const clientUpdate = await clientsRepository.updateClient(id, client)
    return clientUpdate
}