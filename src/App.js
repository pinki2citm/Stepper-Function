import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("Provide your Contact details");
  const [count, setCount] = useState(1);
  const [activeNumber, setActiveNumber] = useState(null);
  const[currentNumber, setCurrentNumber] =useState(1);


  const next = () => {
    setCount(count + 1);
    setActiveNumber(count);

setCurrentNumber(currentNumber+1);

    if (count === 1) setText("Enter your Shipping Address");
    else if (count === 2) setText("Complete Payment for your Product");
    else if (count === 3) setText("Your Order has been delivered");
    else if (count === 4) setText("Finished");
  };

  return (
    <div className="App">
      <h2>Checkout the Product</h2>
      <div className="elements">
        {/* Step 1 */}
        <div className="step">
          <div className="line">
          <p
            className="nums"
            style={{
              backgroundColor: count === 1 ? "#0275d8" : activeNumber >= 1 ? "#5cb85c" : "white",
              color: count === 1 ? "white" : "black", // For better visibility
            }}

          >
            {activeNumber >= 1 ? "✅" : 1} 
          </p>
          <p  style={{
              backgroundColor: activeNumber >= 1 ? "#5cb85c" : "grey",
              width:"200px",height:"2px"
            }}></p>
          </div>
          <p className="label">Customer Info</p>
       
        </div>

        {/* Step 2 */}
        <div className="step">
          <div className="line">
          <p
            className="nums"
            style={{
              backgroundColor: count === 2 ? "#0275d8" : activeNumber >= 2 ? "#5cb85c" : "white",
              color: count === 2 ? "white" : "black", // For better visibility
            }}
          >
            {activeNumber >= 2 ? "✅" : 2}
          </p>

        <p  style={{
              backgroundColor: activeNumber >= 2 ? "#5cb85c" : "gray",
              width:"200px",height:"2px"
            }}></p>
            </div>
          <p className="label">Shipping Info</p>
        </div>

        {/* Step 3 */}
        <div className="step">
          <div className="line">
          <p
            className="nums"
            style={{
              backgroundColor: count === 3 ? "#0275d8" : activeNumber >= 3 ? "#5cb85c" : "white",
              color: count === 3 ? "white" : "black", // For better visibility
            }}
          >
            {activeNumber >= 3 ? "✅" : 3}
          </p>
          
        <p  style={{
              backgroundColor: activeNumber >= 3 ? "#5cb85c" : "gray",
              width:"200px",height:"2px"
            }}></p>
            </div>
          <p className="label">Payment</p>
        </div>

        {/* Step 4 */}
        <div className="step">
         
          <p
            className="nums"
            style={{
              backgroundColor: count === 4 ? "#0275d8" : activeNumber >= 4 ? "#5cb85c" : "white",
              color: count === 4 ? "white" : "black", // For better visibility
            }}
          >
            {activeNumber >= 4 ? "✅" : 4}
          </p>
         
       
          <p className="label">Delivered</p>
        </div>
      </div>
      <p>{text}</p>
      <button onClick={next}>Next</button>
    </div>
  );
}

export default App;
