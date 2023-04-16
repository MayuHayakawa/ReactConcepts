import React, { Component } from 'react'
import withTooltop from './withTooltop'

class Child extends Component {
    render() {
        return (
            <div>
                <span>id: {this.props.id}</span>
                <p
                    onMouseOver={this.props.onMouseOver}
                    onMouseOut={this.props.onMouseOut}
                >
                    What is Higher Order Components?
                </p>
                {this.props.showTooltip && <p>It is functions return components.</p>}
            </div>
          )
    }
}

export default withTooltop(Child);