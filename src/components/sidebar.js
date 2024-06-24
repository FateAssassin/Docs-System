import React, { act } from 'react';
import Data from '../data/data.json';

export default function SideBar(){

    const [activeButton ,setActiveButton] = React.useState(null);

    var headers = [];
    for (var i in Data){
        headers.push([Data[i].id, Data[i].SideBar, Data[i].Description]);
    }
    return (
        <div className="fixed left-0 overflow-y-scroll">
            <div className="bg-gray-800 h-screen w-64 flex justify-center py-10 pt-16">
                <div>
                    {headers.map((item, index) => (
                        <a title={item[2]} key={index} href={`#${item[0]}`} onClick={() => setActiveButton(item[0])} className={` ${activeButton===item[0] ? "text-xl text-slate-300 font-semibold" : " text-xl text-white"}`}>{item[1]}<br/></a>
                    ))}
                </div>
            </div>
        </div>
    )
}