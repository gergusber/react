import { useState } from "react"
import Output from "../Output/Output";

const Greeting = () => {

  const [changeText, setChangedText] = useState(false)

  const changeTextHandler = () => {
    setChangedText(true)
  }

  return (
    <div>
      <h2>HEllo world!</h2>
      {!changeText && <Output>Its a good to see you</Output>}
      {changeText && <Output>Changed</Output>}

      <button onClick={changeTextHandler}> change text</button>
    </div>
  )
}

export default Greeting;