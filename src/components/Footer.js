import React from "react";

const date = new Date()
export default function Footer(){

    return(
        <div>
            <footer>
                <p>Copyright {date.getFullYear()}</p>
            </footer>
        </div>
    )
}