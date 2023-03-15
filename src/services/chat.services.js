import ChatRepository from "../persistence/repository/chat.repository";

const chatRepository = new ChatRepository

export const saveMessage = async (body) => {
    const prod = await chatRepository.save(body)
    return prod;
};

export const getAllMessages = async() => {
    const messages = await chatRepository.getAll();
    return messages;
};



