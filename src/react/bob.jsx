import React from "react"
import PropTypes from "prop-types"

class Bob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {message: this.props.message}
        this.handleText = this.handleText.bind(this);
    }
    handleText(e) {
        this.setState({
            message: e.target.value,
        })
    }

    render() {
        return (
            <div>
                <textarea onChange={this.handleText} value={this.state.message}></textarea>
                <h3>{this.state.message.length}</h3>
            </div>
        );
    }
}

Bob.propTypes = {
    message: PropTypes.string.isRequired
}

Bob.defaultProps = {
    message: ""
}

export default Bob;