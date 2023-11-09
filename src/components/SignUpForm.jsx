import { useState } from "react"
const API_URL = `https://fsa-jwt-practice.herokuapp.com`

function SignUpForm({setToken}) {

  const [username, SetUsername] = useState('')
  const [password, SetPassword] = useState('')
  const [error, setError] = useState(null)

    async function handleSubmit(event) {
      event.preventDefault()
      try {
        const response = await fetch(`${API_URL}/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username,
            password
          })
        })
        const result = await response.json()
        console.log("results: ", result)
        setToken(result.token)
        }catch (error) {
        setError(error.message)
      }
    }
  return ( 
  <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
  <form onSubmit={handleSubmit}>
      <label>
        Username: <input value={username} onChange={(e) => SetUsername(e.target.value)}/>
      </label>
      <label>
        Password: <input value={password} onChange={(e) => SetPassword(e.target.value)}/>
      </label>
      <button>Submit</button>
    </form>
  </>
  )
}  



export default SignUpForm