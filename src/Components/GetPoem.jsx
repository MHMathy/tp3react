import { useEffect, useState } from "react";

export default function Poem({weather}){
    let [poem,setPoem] = useState([]);

    useEffect(() => {
        const fetchPoem= () => {
            fetch(`https://poetrydb.org/lines/${weather}`)
                .then(response => response.json())
                .then(data => setPoem(data));
        }
        if(weather!=="") fetchPoem();
        return(
            <></>
        )
    },[weather])

    return(
        <></>
    )

}