import React from "react";
import Data from '../data/data.json';
import ReactHtmlParser from "react-html-parser";

export default function Content(){

    var content = [];
    for (var i in Data){
        content.push([Data[i].id, Data[i].Header, Data[i].Content]);
    }
    return(
        <div className="ml-64 p-10 ">
            {content.map((item, index) => (
                <div key={index} id={item[0]} className=" mt-16">
                    <h1 className="text-3xl font-semibold">{item[1]}</h1><br/>
                    <p className="text-lg">{ ReactHtmlParser(item[2]) }</p>
                    <br/><br/><hr/>
                </div>
            ))}  
        </div>
    )    
}