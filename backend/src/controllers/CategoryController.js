import '../daos/ConnectionDAOMongo.js';
import categoryModel from '../models/CategoryModel.js'

class Category{

    async createCategory(req,res){
        try{
            //validate field name of a category
            createCategoryValidation(req.body)
            const newCategory = await teamService.create(req.body)
            //logInfo.info(`Category created: ${req.body.name}  route /team/new`)
            return res.status(200).json({message:`Category ${req.body.name} create`, data:newCategory})
        }catch(err){
            //errorLogger.error(`error in create a new Category: ${err}`)
            return res.status(400).json({message: err, route: "team/new", zone: "create new category"})
        }
    }

    async getAllCategories (req,res){
        try {
            let objDAO = await teamService.find({});
            return objDAO;
        }
        catch(err) {
            console.log(err.message);
        }
    }

    async findCategoryById (req,res){
        try {
            const { id_category } = req.params
            if (!id_category) return res.status(400).json( {message: "Id required"});

            let objDAO = await teamService.findById(id_category);
            if(objDAO[0] == undefined) throw new Error();
            return objDAO;
        } catch (err) {
            console.log(err.message);
        } 
    }

    async updateCategoryById  (req,res){
        try {
            const { id_category } = req.params
            if (!id_category) return res.status(400).json( {message: "Id required"});

            let objDAO = await teamService.findByIdAndUpdate(id_category, req.body,{new:true});
            return objDAO   
            
        } catch (err) {
            console.log(err.message);
        }  
    }
    

    async deleteCategoryById (req,res){
        try {
            const { id_category } = req.params
            if (!id_category) return res.status(400).json( {message: "Id required"});

            let objDAO = await teamService.findByIdAndDelete(id_category);
            return objDAO
        } catch (err) {
            console.log(err.message);
        }  
    }

}

export default new Category();