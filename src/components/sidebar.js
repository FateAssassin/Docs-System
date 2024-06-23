import React from 'react';
import Data from '../data/data.json';

export default function SideBar(){
    var headers = [];
    for (var i in Data){
        headers.push(Data[i].Header);
    }
    return (
        <div className="fixed left-0">
            <div className="bg-gray-800 h-screen w-64 flex justify-center py-10">
                <div>
                    {headers.map((item, index) => (
                        <a key={index} className='center text-xl'>{item}</a>
                    ))}
                </div>
            </div>
        </div>
    )
}