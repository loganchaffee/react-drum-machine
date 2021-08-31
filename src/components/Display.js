import React from "react";

export default class Display extends React.Component {
    render() {
        return (
            <p className='display'>{this.props.displayContent}</p>
        )
    }
}