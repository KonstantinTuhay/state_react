import React, { useState } from "react";

// 4.
// const Example = () => {
//   const [color, setColor] = useState("green");

//   const changeColor = () => {
//     setColor(color === "green" ? "red" : "green");
//   };

//   const style = {
//     color: color,
//   };

//   return (
//     <>
//       <p style={style}>dssfjsdfk dfsjfjdsjfdsjf</p>
//       <button onClick={changeColor}>click</button>
//     </>
//   );
// };

// 3.
// const Inp = () => {
//   const [txt, setTxt] = useState("");

//   const handleChange = (event) => {
//     setTxt(event.target.value);
//   };

//   return (
//     <div>
//       <label>
//         <input type="text" value={txt} onChange={handleChange} />
//       </label>
//       <p>{txt}</p>
//     </div>
//   );
// };

// 2.
// const Text = () => {
//   const [hide, setHide] = useState(true);

//   const hideText = () => {
//     setHide(!hide);
//   };

//   return (
//     <>
//       <button onClick={hideText}>Hide me!</button>
//       {hide && <p>Something ....</p>}
//     </>
//   );
// };

// 1
// const Example = () => {
//   const [count, setCount] = useState(0);
//   let increment;
//   if (count !== 10) {
//     increment = () => {
//       setCount(count + 1);
//     };
//   }

//   return (
//     <>
//       <p>Значение = {count}</p>
//       <button onClick={increment}>Увеличь значение</button>
//     </>
//   );
// };

export default Example;
