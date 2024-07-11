import React from "react";
import axios from "axios";
import './App.css';
// import logo from './logo-no-background.png'


const logo = process.env.REACT_APP_LOGO;




class App extends React.Component{

     handleClick = () => {

        window.location.href = "/";


    }
    state = { advice: '' };

    componentDidMount(){
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')

        .then((response) => {

            const { advice } = response.data.slip;
            // console.log(advice);
            this.setState({advice: advice}); 
        })

        .catch((error) => {
            console.log(error);

        });
           
    } 

    render(){
        const {advice} = this.state;
        return(
       <div className="app">

        <img onClick={this.handleClick} src={logo} className="logo" alt=""/>
      
        <div className="card">
        
            <h1 className="heading">{advice}</h1>

            <button className="btn" onClick={this.fetchAdvice}>
                <span>GIVE ME MORE ADVICE!</span>
            </button>
            </div>
               
       </div>
        );
    }
}

export default App;