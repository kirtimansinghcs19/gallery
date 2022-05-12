import React from "react";
import axios from "axios";
import Images from "../container/Images";
class Search extends React.Component{

    state = {
        keyword :'',
        photos: [],
        loader: false
    }

    inputHandle=(e)=>{
        this.setState({keyword:e.target.value});
    } 
    searchImages =async (e)=>{
        this.setState({loader:true});
        e.preventDefault();
        const res = await axios.get(`https://api.pexels.com/v1/search?query=${this.state.keyword}`,
        {
            headers:{
                Authorization:"563492ad6f91700001000001ed84ded31b424f02977623bd4ebeabc5"
            }
        });
        this.setState({loader: false});
        this.setState({photos: res.data.photos});
        console.log(res);
    };
    render(){
        return(
            <>
            <form onSubmit={this.searchImages}>
                <div className="form-group">
                    <input 
                        type="text" 
                        name="keyword" 
                        className="form-control" 
                        value={this.keyword} 
                        onChange={this.inputHandle}
                        placeholder="Search images...."
                    />
                </div>
                <div class="d-grid gap-2 mt-3">
                
                    <input 
                        type="submit"
                        value="Search images"
                        className="btn btn-lg btn-primary"
                    />
                
                </div>
            </form>
            <div className="row">
                {!this.state.loader?(
                    this.state.photos.map((img) => <Images image = {img} key={img.id}/>
                )):(<h1>Loading...</h1>)}
            </div>
            </>
        );
    }
}

export default Search;