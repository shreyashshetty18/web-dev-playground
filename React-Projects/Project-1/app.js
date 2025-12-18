import test from "./test.js";
import appleft from "./parent.js";

let a = React.createElement("a",{id: "a1", key:"a1"}, "product designer")
let div = React.createElement("div", {id: "line", key: "line"}, "")
let a2 = React.createElement("a",{id: "a2", key:"a2"}, "2025")

let appleftt = React.createElement("div", { id: "app-leftt", key: "leftt" }, [a,div,a2])
let appright = React.createElement("div", { id: "app-right", key: "right" }, "")


const app = () => React.createElement("div", { id: "app" }, [React.createElement(React.Fragment, { key: "test" }, test()),appleftt,appleft(),appright])

export default app