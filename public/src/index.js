import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import Data from './Data';
import "./index.css";

ReactDOM.render(
    <>
    <h1 className="heading_style">Top Web Series in 2020</h1>
    <Card imgSrc= {Data[0].imgSrc}
        title = {Data[0].title}
        Sname = {Data[0].Sname}
        link = {Data[0].link}
    /> 
    
    <Card imgSrc= {Data[1].imgSrc}
        title = {Data[1].title}
        Sname = {Data[1].Sname}
        link = {Data[1].link}
    /> 
    
    <Card imgSrc= {Data[2].imgSrc}
        title = {Data[2].title}
        Sname = {Data[2].Sname}
        link = {Data[2].link}
    /> 
    
   
    </>
 , document.getElementById('root')
)