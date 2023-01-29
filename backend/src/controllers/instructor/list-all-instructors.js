import Instructor from "../../schema/instructor";

export async function handler(req, res) {
     try {

          const instructor = await Instructor.find()

          res.status(200).json(instructor)

     } catch (error) {
          res.sendStatus(500)
     }
}