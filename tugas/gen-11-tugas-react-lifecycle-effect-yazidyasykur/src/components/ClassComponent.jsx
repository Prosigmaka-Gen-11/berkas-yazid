import React from "react";

export default class ClassLifecycle extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("Component just get mounted");
    }

    componentDidUpdate() {
        console.log("Component just get updated");
    }

    componentWillUnmount() {
        console.log("Component will be unmounted")
    }

    render(){
        return (
        <div>
            I am a class component with value = {this.props.value}
        </div>
        )
    }
}