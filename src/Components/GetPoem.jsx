import { useEffect, useState } from "react";

export default function Poem({weather}){
    let [poem,setPoem] = useState(["lines"]);

    useEffect(() => {
        const fetchPoem= () => {
            fetch(`https://poetrydb.org/lines/${weather}`)
                .then(response => response.json())
                .then(data => setPoem(data[0]));
        }
        if(weather!=="") fetchPoem();
        return(
            <></>
        )
    },[weather])

    return(
        <>
            <div className="poem">
                <h3>{poem["title"]}, by {poem["author"]}</h3>

                <p>{poem["lines"]}</p>
            </div>


        </>
    )

}