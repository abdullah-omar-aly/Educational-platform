import React , {useEffect , useState} from 'react'
import Typography from '@mui/material/Typography';


function MainScreen() {
  const [instructors , setInstructors] = useState<any>([])

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:8080/api/instructors')
      const data = await response.json()
      setInstructors(data)
      console.log(data)
       
    })()
  } , [])
  return (

    <div>
      {
        instructors.map((instructor: any ) => <li key={instructor._id}>
          <Typography >
          {instructor.name}
        </Typography>
        </li>)
      }

    </div>
  )
}

export default MainScreen