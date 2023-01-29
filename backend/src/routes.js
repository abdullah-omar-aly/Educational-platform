import express from 'express'
import verifyJWT from './middleware/verifyJWT'
import  verifyRoles  from './middleware/verifyRoles'
import { UserRoles } from './schema/user'

const apiRoutes = express.Router()

const {ADMIN ,MASTER} = UserRoles

      //isnstructors
apiRoutes.post('/instructor', verifyJWT , verifyRoles(ADMIN , MASTER) ,  require("./controllers/instructor/add-new-Instructor").handler)
      .patch("/instructor/:id",  verifyJWT , verifyRoles(ADMIN , MASTER) , require("./controllers/instructor/update-instructor-details").handler)
      .get('/instructors' ,  require("./controllers/instructor/list-all-instructors").handler)


      //users
      .post('/user/register' , require('./controllers/user/register').handler)
      .post('/user/login' , require("./controllers/user/login").handler)
      
      //courses
      .post("/courses",  verifyJWT , verifyRoles(ADMIN , MASTER) , require("./controllers/course/create-new-course").handler)
      .get('/courses', require('./controllers/course/list-all-courses').handler)
      .patch('/courses/:id',  verifyJWT , verifyRoles(ADMIN , MASTER) , require('./controllers/course/update-course-details').handler)
      .post('/courses/:courseId/lessons', verifyJWT  , verifyRoles( ADMIN  , MASTER), require("./controllers/course/add-new-lesson-to-course").handler)





export { apiRoutes }
