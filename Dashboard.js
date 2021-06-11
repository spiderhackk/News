import React, { Component } from 'react'
import axios from 'axios'
import './Dashboard.css'
import {   } from '@fortawesome/react-fontawesome'
import { Nav,InputGroup,FormControl,Button } from 'react-bootstrap';
export default class Dashboard extends Component {


    state = {
        alldata: [

        ],
        
        loading:false,
        currentPage:1,
        postsPerPage:3,
        pageNos:[1,2,3,4]
       


    }
    
    currentData;
    pageNumbers=[];
    totalPages;
    storingData;



    getData = () => {
        axios.get("https://api.first.org/data/v1/news")
            .then(res => (
                this.setState({
                    alldata: res.data.data
                })

            ))
    }

    componentDidMount() {
        this.getData()



    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.currentPage!=this.state.currentPage){
            this.setState(s=>{
                let c=s.currentPage;
                return {...s,pageNos:[c,c+1,c+2]}
            })
        }

        this.displaydata();
       
        
    }

    removeItem=(e)=>{
        
        const newlist=[...this.currentData]
        const itemIndex=newlist.findIndex(item=>item.id!==e.id);
        if(itemIndex>-1){
            newlist.splice(itemIndex,1)

        }else{
            newlist.push(e)
        }

        this.setState({alldata:newlist})
       
              console.log(newlist)  
    }


    displaydata = () => {
        const{alldata,currentPage,postsPerPage}=this.state;
        const lastIndex=currentPage*postsPerPage;
        const firstIndex=lastIndex-postsPerPage;
        this.currentData=alldata.slice(firstIndex,lastIndex)
        this.totalPages =Math.ceil(alldata.length/postsPerPage)
       
      
        return (
          

            this.currentData.map((res) => {

               return <div>
                            <div className="card" key={res.id}>


                                <div className="card-body">
                                    <h5 className="card-title">
                                        {res.title}
                                    </h5>
                                    <p className="card-text">
                                        {res.summary}
                                    </p>
                                    <p className="card-text">
                                        {res.published}
                                    </p>
                                    <button onClick={this.removeItem.bind(this,res.id)} style={{float:"right"}}>X</button>

                                
                                </div>
                            </div>
                            
                        <br></br>
                            
                        </div>
                
            })
        )
    }


 

    prevPage=()=>{
        if(this.state.currentPage>1){
            this.setState({
                currentPage:this.state.currentPage-1
            })
        }
    }


    nextPage=()=>{

        if(this.state.currentPage<Math.ceil(this.state.alldata.length/this.state.postsPerPage)){
            this.setState({
                currentPage:this.state.currentPage+1
            })
        }
    }


 
    render() {
       
        return (
            <div className="display-data">

                <ul>
                    {this.displaydata()}
                    
                </ul>
                <div style={{float:"left"}}>
                    showing {this.state.currentPage} of a {this.totalPages}

                </div>
               
                <div style={{marginLeft:"32rem"}}>
                    <InputGroup>
                        <InputGroup.Prepend>

                           <Button type="button" varient="outline-info" disabled={this.state.currentPage===1?true:false} onClick={this.prevPage}>
                           <i class="fas fa-angle-double-left"></i>
                            </Button>

                        </InputGroup.Prepend>
                       
                       {this.state.pageNos.map(num=> (<div style={{borderRadius:"25px"}} class={this.state?.currentPage===num?'btn btn-light':'btn btn-secondary'} onClick={()=>this.setState((prevState)=>{return {...prevState,currentPage:num}}) }>{num}</div>))}
                        <InputGroup.Append>
                            <Button type="button" varient="outline-info" disabled={this.state.currentPage===this.totalPages?true:false} onClick={this.nextPage}>
                            <i class="fas fa-angle-double-right"></i>
                            </Button>

                           
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </div>
        )
    }
}
