import React from "react";

class Images extends React.Component{
    render(){
        const {image} = this.props;
        console.log(image);
        return(
                <div className="col-md-3">
                    <img src={image.src.large} className="img-fluid img-thumbnail" alt="Not Found"/>
                </div>
        )
    }
}

export default Images; 