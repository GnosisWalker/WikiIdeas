import './ConnectionDAOMongo.js';

class MongoDAO{
    constructor(options){
        this.collection= options
    }

    saveDataDAO = async obj =>{
        try{
            let objDAO = await this.collection.create(obj);
            return objDAO

        }
        catch(err){
            console.log(err)
        }
    }

    getAllDAO = async ()=>{
        try {
            let objDAO = await this.collection.find({});
            return objDAO;
        }
        catch(err) {
            console.log(err.message);
        }
    }

    findByIdDAO = async id =>{
        try {
            
            let objDAO = await this.collection.findById(id);
            if(objDAO[0] == undefined) throw new Error();
            return objDAO;
        } catch (err) {
            console.log(err.message);
        } 
    }

    findByFieldDA0 = async field =>{
        try{
            let objDAO = await this.collection.find(field)
            return objDAO
        }catch(err) {

        }
    }

    updateByIdDAO = async (obj,id) =>{
        try {
            let objDAO = await this.collection.findByIdAndUpdate(id, obj,{new:true});
            return objDAO   
            
        } catch (err) {
            console.log(err.message);
        }  
    }
    

    deleteByIdDAO = async (id)=>{
        try {
            let objDAO = await this.collection.findByIdAndDelete(id);
            return objDAO
        } catch (err) {
            console.log(err.message);
        }  
    }

}