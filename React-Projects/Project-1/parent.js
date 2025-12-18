let h1 = React.createElement("h1", {key: "h1"}, "+299")
let h4 = React.createElement("h4", {key: "h4"}, "Project completed")
let h2 = React.createElement("h1", {key: "h2"}, "+99")
let h5 = React.createElement("h4", {key: "h5"}, "Startup raised")

let lefttopelm1 = React.createElement("div", { id: "left-top-elm1", key: "top-elm1" }, [h1,h4])
let lefttopelm2 = React.createElement("div", { id: "left-top-elm2", key: "top-elm2" }, [h2,h5])

let lefttop = () => React.createElement("div", { id: "left-top", key: "top" }, [lefttopelm1,lefttopelm2])

let h3 = React.createElement("h1", {key: "h3"}, "Hello")
let h6 = React.createElement("h4", {key: "h6"}, "- It's D.Nova a design wizerd")

let leftcenter = () => React.createElement("div", { id: "left-center", key: "center" }, [h3,h6])

let leftbottom = React.createElement("div", { id: "left-bottom", key: "bottom" }, "Scroll down ↓")

const appleft = () => React.createElement("div", {id: "left", key: "leftpage"}, [lefttop(),leftcenter(), leftbottom])

export default appleft