import React from "react"
import ReactDOM from "react-dom"
import Hello from "./react/hello"
import Bob from "./react/bob"

window.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    React.createElement(Bob, {message: "aiueo"}),
    document.getElementById("app")
  )
})
