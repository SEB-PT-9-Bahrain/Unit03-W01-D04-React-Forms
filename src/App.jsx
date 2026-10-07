import { useState } from "react"
function App() {
  const [students, setStudents] = useState([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [formData, setFormData] = useState('')
  
  function handleSubmit(event){
    event.preventDefault()

    const newStudent = {
      firstName: firstName,
      lastName: lastName
    }

    setStudents([...students,newStudent])
    setFirstName('')
    setLastName('')


  }

  function handleChangeFirstName(event){
    setFirstName(event.target.value)
  }

  function handleChangeLastName(event){
    setLastName(event.target.value)
  }

  function handleChange(event){
    setFormData({...formData, [event.target.name]:event.target.value})
  }

  const something = 'firstName'
  console.log(formData[something])


  return (
    <div>
      <h1>React Forms Lesson</h1>

      <h2>All Students</h2>

      <form onSubmit={handleSubmit}>

        <label htmlFor="firstName">First Name:</label>
        <input 
        value={formData.firstName} 
        onChange={handleChange} 
        id="firstName" 
        name='firstName'
        type="text" 
        />

        <label htmlFor="lastName">Last Name:</label>
        <input 
        value={formData.lastName} 
        onChange={handleChange} 
        name="lastName"
        id="lastName" 
        type="text" 
        />

        <button>Create Student</button>
      </form>

      {students.map((oneStudent)=>
      <div>
        <p>Name: {oneStudent.firstName} {oneStudent.lastName}</p>
      </div>
      )}
    </div>
  )
}

export default App