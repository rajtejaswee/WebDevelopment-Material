import React from 'react';

class Item extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            clicks: 0,
            remaining: 100
        }
    }

    clickMe() {
        this.setState({
            clicks: this.state.clicks + 1,
            remaining: this.state.remaining - 1
        })
    }


    render() {
        return (
            <div>
                <h1 onClick={() => this.clickMe()} > Hello, <small> from {this.props.name}</small></h1>
                <span>{this.state.clicks} is the number of clicks and {this.state.remaining} is the no of click left</span>
            </div>
        )
    }
}

export default Item
