import { useState } from "react"


const Greeting = () => {

  const [changeText, setChangedText] = useState(false)

  const changeTextHandler = () => {
    setChangedText(true)
  }

  return (
    <div>
      <h2>HEllo world!</h2>
      {!changeText && <p>Its a good to see you</p>}
      {changeText && <p>Changed</p>}

      <button onClick={changeTextHandler}> change text</button>
    </div>
  )
}

export default Greeting;