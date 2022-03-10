import { useState } from "react";
import "./styles.css";

const itemTextList = ["Op1", "Op 2", "Op 3", "123", "1234", "12345", "12334"];

export default function App() {
  const [displayValue, setDisplayValue] = useState(itemTextList);
  const handleChangeText = (e) => {
    const temp = itemTextList.filter((item) => item.includes(e.target.value));
    if (temp.length === 0) setDisplayValue(itemTextList);
    else setDisplayValue(temp);
  };

  const handleItemClick = (index) => {
    console.log("clicked");
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input className="textbox" type="text" onChange={handleChangeText} />
      <div className="listbox">
        {displayValue.map((text, index) => (
          <div
            className="filterList"
            key={text}
            onClick={handleItemClick(text, index)}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
