import React from "react";

export default function NavBar() {
    return (
        <div className="bg-gray-800 h-16 w-full flex justify-evenly items-center absolute">
            <a href="https://github.com/FateAssassin" className="ml-72 text-white text-xl font-semibold hover:text-slate-300 duration-100">GitHub</a>
            <a href="https://muazugur.com" className="text-white text-xl font-semibold hover:text-slate-300 duration-100">FateAssassin</a>
            <a href="https://github.com/FateAssassin/Docs-System" className="text-white font-semibold text-xl border border-white py-1 px-2 active:bg-slate-600 hover:bg-slate-700 duration-75">Source Code</a>
        </div>
    );
}
