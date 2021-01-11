import { useEffect, useState } from "react";

export default function Position({setPosInfo}){
    let [IP,setIP] = useState("");

    useEffect(() => {
        const fetchIP = () => {
            fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => setIP(data["ip"]));
        }
        fetchIP();
        return(
            <></>
        )
    },[])

    useEffect(() => {
        const fetchPosition = () => {
            fetch(`http://ip-api.com/json/${IP}`)
                .then(response => response.json())
                .then(data => setPosInfo(data));
        }
        fetchPosition();
        return(
            <></>
        )
    },[IP])

    return(
        <></>
    )

}