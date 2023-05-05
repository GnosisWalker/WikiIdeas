import {Router} from 'express';

const routes= Router();

import category from '../controllers/CategoryController.js';
//********************************************** */

//create a new Category 
routes.post('/:id_category', category.createCategory)

//get all categories
routes.get('/', category.getAllCategories)
//get a category 
routes.get('/:id_category', category.findCategoryById)

//update a category by id_user
routes.put('/:id_category', category.updateCategoryById)

//delete a category
routes.delete('/:id_category', category.deleteCategoryById)






const categoryRouter = routes
export {categoryRouter}