import {Component}from 'react';



export default class ClassComponent extends Component {
    constructor(props){
        super(props);
        console.log(this);
        this.state={
            etat2: this.props.name,
            etat3: {
                etat31:"test", 
            }
        }
    }
    render(){
        return <> 
        <h1> Hello {this.props.name} from class component </h1>
        <p>contenu d'un element p</p>
        <p> affichage d'un etat = {this.state.etat2}</p>
        <p> affichage d'un etat = {this.state.etat3.etat31}</p>
        
        </>
    }
}