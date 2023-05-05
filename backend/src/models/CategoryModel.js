import {Schema,model} from 'mongoose';

const categorySchema = new Schema({
    name:{
        type: String,
        minLength: 1,
        maxLength: 100,
        required: true
    },
    description:{
        type:String,
        default:""
    },
	url:{
        type:String,
        default:""
    }
},
//generate a automatic created_at and modified_at
{timestamps:true});

export default model('category', categorySchema);