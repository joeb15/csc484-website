import React from "react";
import {Button} from "react-bootstrap";

const Test = (imagePos: [number, number], options: string[]) => {
  return (<>
    <h1>Can you see the symbol?</h1>
    {options.map(option => (<Button>{option}</Button>))}
    <div className="colorblind" style={{
      display: "block",
      width: 730 / 4,
      height: 538 / 3,
      backgroundImage: "url(/colorblind.jpg)",
      backgroundPositionX: -imagePos[0] * 730 / 4,
      backgroundPositionY: -imagePos[1] * 538 / 3,
    }}>
    </div>
  </>);
}


const Component = (props: any) => {
  const tests = [
    Test([0, 0], ["a", "b"]),
  ]
  return (<>
    <h1>Color Blindness</h1>
    {tests}
  </>);
}

export default Component;