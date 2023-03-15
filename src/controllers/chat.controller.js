import { saveMessage, getAllMessages } from "../services/chat.services"

export const saveMessageController = async (req, res) => {
    try {
        const message = req.body;
        const from = req.body;
        const msg = await saveMessage(message, from)
        console.log(msg)
        res.send(msg)
    } catch (err) {
        res.send(err.stack)
    }
}


export const getMessagesController = async (req, res) => {
    try {
        const messages = await getAllMessages()
        return res.send(messages)
    } catch(error) {
        return res.send({
            message: "Error al extraer los datos"
    })
        }
    }