import { useState } from "react"

const API_URL = `https://fsa-jwt-practice.herokuapp.com`


function Authenticate({token}) {
  const [error, setError] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  async function handleClick() {
    try {
    let response = await fetch(`${API_URL}/authenticate`, 
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    const result = await response.json()
    console.log("Authenticate Result: ", result)
    setSuccessMessage(result.message)
  }catch (error) {
    setError(error.message)
  }
  }


  return (
  <> <h2>Authenticate</h2>
  {successMessage && <p>{successMessage}</p>}
  {error && <p>{error}</p>}
  <button onClick={handleClick}>Authenticate Token</button>
  </>
    )
}

export default Authenticate