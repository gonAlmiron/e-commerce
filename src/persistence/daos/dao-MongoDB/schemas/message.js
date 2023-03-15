import {Schema, model} from 'mongoose';


export const MessageSchema = new Schema({
    message: {type: String, required: true},
    from:  {type: String, required: true}
},
{timestamps: true})

export const MessageModel = model('message', MessageSchema)