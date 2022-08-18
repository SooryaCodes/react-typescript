import { Component } from 'react'

type Props = { message: string }

type State = { count: number }

export default class Counter extends Component<Props, State> {
    state = {
        count: 5
    }

    handleClick = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    }
    render() {
        return (
            <div>  {this.props.message} <br />
                <button onClick={this.handleClick}>Increment</button> &nbsp;
                {this.state.count}
            </div>
        )
    }
}