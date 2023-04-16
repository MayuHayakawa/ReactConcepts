import React, { Component } from 'react'

function withTooltop(ChildComponent) {
    return class display extends Component {
        state = { showTooltip: false }
        mouseOver = () => this.setState({ showTooltip: true })
        mouseOut = () => this.setState({ showTooltip: false })

        render() {
            return (
              <div>
                <p>You can see an answer when you mouseover here.</p>
                <ChildComponent 
                    onMouseOver={this.mouseOver}
                    onMouseOut={this.mouseOut}
                    showTooltip={this.state.showTooltip}
                    {...this.props}
                />
              </div>
            )
        }
    }
}

export default withTooltop