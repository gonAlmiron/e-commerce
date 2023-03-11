import { saveClient, getAllClients, getClient, deleteClient, updateClient } from '../services/clients.services'


export const saveController = async (req, res) => {
    
    try {
        const { body } = req;
        const client = await saveClient(body);
        res.send("CIENTE CREADO: " + client);
    } catch (err) {
        res.status(501).send(err.message)
    }
}

export const getAllController = async (req, res) => {
    try {
        const clients = await getAllClients();
        res.json(clients);
    } catch (err) {
        res.status(501).send(err.message)
    }
}

export const getByIdController = async (req, res) => {
    try {
        const {id} = req.params
        const client = await getClient(id);
        res.json(client)
    } catch (err) {
       res.status(501).send(err.message)
    }
}

export const deleteController = async (req, res) => {
    try {
        const {id} = req.params
        const clientDeleted = await deleteClient(id)
        res.send("CLIENTE ELIMINADO: " + clientDeleted )
    } catch(err) {
        res.status(501).send(err.message)
    }
}

export const updateController = async (req, res) => {
    try {
        const {id} = req.params 
        const {body} = req
        const clientToUpdate = await getClient(id);

        if(!clientToUpdate){
            res.status(404).json({ message: 'Invalid id' })
          } else {
            const clientUpdated = await updateClient(
                        id, 
                        body
                    )
                    res.status(200).send("CLIENTE EDITADO: " + clientUpdated);
          }

    } catch (err) {
        res.status(501).send(err.message)
    }
}