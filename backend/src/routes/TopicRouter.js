import {Router} from 'express';

const routes= Router();

import topic from '../controllers/TopicController.js';
//********************************************** */

//create a new Topic 
routes.post('/:id_topic', topic.createTopic)

//get all topics
routes.get('/', topic.getAllTopics)
//get a topic 
routes.get('/:id_topic', topic.findTopicById)

//update a topic by id_user
routes.put('/:id_topic', topic.updateTopicById)

//delete a topic
routes.delete('/:id_topic', topic.deleteTopicById)






const topicRouter = routes
export {topicRouter}