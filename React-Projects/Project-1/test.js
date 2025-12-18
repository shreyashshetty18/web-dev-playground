const imgdiv =  React.createElement("div", {id:"img-div", key:"img"}, "" )

let a1 = React.createElement("a", { key:"about" }, "About Me")
let a2 = React.createElement("a", { key:"portfolio" }, "Portfolio")
let a3 = React.createElement("a", { key:"services" }, "Services")
let a4 = React.createElement("a", { key:"blog" }, "Blog")

const a5 = React.createElement("a",{ key:"call" }, "Book A Call ↗")

const testpart1 = () => React.createElement("div",{id:"test-part1"}, [imgdiv,a1,a2,a3,a4])

const test = () => React.createElement("test",null,[React.createElement(React.Fragment, { key:"test" }, testpart1()),a5])

export default test