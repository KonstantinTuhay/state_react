import React from "react";

// 4.
class Counter extends React.Component {
  constructor() {
    super();
    this.state = { color: "violet" };
  }

  changeColor = () => {
    this.setState((state) => ({
      color: state.color === "violet" ? "red" : "violet",
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.changeColor}>change color</button>
        <p style={this.state}>fdsfs dsfdsfsd efsdfsfsdewrew</p>
      </div>
    );
  }
}

// export default Counter;

// 3.
// class Counter extends React.Component {
//   constructor() {
//     super();
//     this.state = { str: "" };
//   }

//   handleChange = (event) => {
//     this.setState({ str: event.target.value });
//   };

//   render() {
//     const { str } = this.state;
//     return (
//       <div>
//         <input type="text" onChange={this.handleChange} value={str} />
//         <p>{str}</p>
//       </div>
//     );
//   }
// }

// export default Counter;

// 2.
// class Counter extends React.Component {
//   constructor() {
//     super();
//     this.state = { bool: false };
//   }

//   handleText = () => {
//     this.setState((state) => ({ bool: !state.bool }));
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleText}>click</button>
//         {this.state.bool && <p>dfsdfsfdfsd</p>}
//       </div>
//     );
//   }
// }

// export default Counter;

// 1.
// class Counter extends React.Component {
//   constructor() {
//     super();
//     this.state = { count: 0 };
//   }

//   increment = () => {
//     this.setState((state) => ({ count: state.count + 1 }));
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.increment}>click</button>
//         <p>{this.state.count}</p>
//       </div>
//     );
//   }
// }

// export default Counter;

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
const Text = () => {
  const [hide, setHide] = useState(true);

  const hideText = () => {
    setHide(!hide);
  };

  return (
    <>
      <button onClick={hideText}>Hide me!</button>
      {hide && <p>Something ....</p>}
    </>
  );
};

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

// export default Example;
