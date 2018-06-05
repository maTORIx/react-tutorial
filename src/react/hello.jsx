import React from "react"

class Hello extends React.Component {
    render() {
        return React.createElement("h1", {}, "hello");
    }
}

export default Hello;