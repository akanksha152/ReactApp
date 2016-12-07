import React from 'react';
class Aks extends React.Component{
     
     constructor(){
     super();
     this.fname="akanksha";
     this.lname="sharma";
     }
     a(){
   return (this.fname+" "+this.lname);
     }
     render(){
     
    return(<h1>{this.fname}</h1>);
     }
     }