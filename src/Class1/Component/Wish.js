import React from "react";
class Wish extends React.Component{
    render(){
        return (
            <>
            <div className="card m-4">
                <div className="card-header">React-props in Class Component</div>
                <div className="card-body">{this.props.one}</div>
            </div>
            </>
        );

    }
}
export default Wish; 