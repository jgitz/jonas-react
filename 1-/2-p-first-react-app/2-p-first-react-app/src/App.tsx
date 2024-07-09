import { useEffect, useState } from "react";

export default function App() {

  const [advice, setAdvice] = useState("") //7 to set advice text and use it inside return jsx 

  const [count, setCount] = useState(0) // 12 to set button click count 



  async function fetch_advice() {

    const res= await fetch('https://api.adviceslip.com/advice'); //2 fetches api reponse in json format

    const res_data_object = await res.json() //3 converts the json api response to js object.... 

    console.log(res_data_object) //4 used to know the object structure of the api data 

    console.log(res_data_object.slip.advice) //5 to obain advice text from the json data 

    setAdvice(res_data_object.slip.advice) // 8 setting advice text to the state

    setCount((count) => count + 1) // 13 used to increament the count state on every time when this function is run when the button is clicked 

    console.log(count) // 14 to display the count state data 

  } // 1 write async function to get data from api link

  // fetch_advice() //6 to test run the api response

  useEffect(() => {

    fetch_advice()

  }, []) //11 used to fetch advice when the page loads.... if not used.... the page only generates advice only when the button is clicked 

  return (
    <>

    <h1>{advice}</h1>  {/* 9 display the data in the advice state to jsx */}

    <button onClick={fetch_advice}>Generate Advice</button> {/* 10 set onclick function to fetch advice from endpoint on the click of the button  */}

    <Message count={count}/> {/* 15 to show the MESSAGE COMPONENT to display the count number... the count state of APP component is passed as PROPS to MESSAGE COMPONENT */}
    
    </>
  )
}

// Component 2: a  component named MESSAGE is made below.... it is used to DISPLAY the COUNT VALUE.... this component is used inside the RETURN of APP COMPONENT..... 

function Message(props:any) {
  return (
    <>
    <hr />
    <h1>Message Component</h1>
    <p>the count is <strong>{props.count}</strong></p>
    </>
  )
} // 14  message component is made to take COUNT from APP COMPONENT as PROPS and display it 


// **** use .json() to convert API RESPONSE to JS OBJECT.... else the response can't be read.... and console.log the JS OBJECT to CORRECTLY get the api response DATA 

// **** as we use JSX in the RETURN of FUNCTIONAL COMPONENT.... wrap block of codes in the RETURN with () INSTEAD of {}.... () is used for READABILITY in JSX 

// **** you can use MULTIPLE AWAIT statements inside an ASYNC FUNCTION 

// **** onClick function DON'T need () to invoke 

// **** props passed to a component is accessed via props.<prop_name>

// **** the count will be displayed as 2 INSTEAD of 0 on the initial load because of USE EFFECT running TWICE due to STRICT MODE  