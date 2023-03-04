import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
import "./App.css";

const Cards = () => {
    const { cardId } = useParams(); 
    const [response, setResponse] = useState(null);
    const [resp, setResp] = useState(false);

    const getCardData = async () => {
        try {
            //resolves fetch promise
            const res = await fetch(`https://promise-card-api.onrender.com/api/get-card/${cardId}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
            });
            //resolves res.json()'s promise
            const jsonData = await res.json();
            if (jsonData.status === "fail"){
                return
            }
         setResponse(jsonData)
         setResp(true);

            console.log("jd",jsonData);
            console.log("res",response);
            console.log("new res",resp);


            // previews response in the console
        } catch (error) {
            console.error(error);
        }
}
     useEffect(() => {
        getCardData();
  
  },[cardId, resp]);
  return (
    <div>
         {resp &&
         <div id={`generatedScreen`}
         style={{
          width: "400px",
          height: "720px",
          backgroundColor: `${response.color}`,
        }} 
         >
            <h2> Promise Card</h2>
            <h2>{response.name + `'s`} Promise Card</h2>
            <p className="subTitle">
              Things I want{" "}
              <span
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  width: "20.4px",
                  height: "20.4px",
                  padding: "4px 11px",
                }}
              >
                {response.cardItems.length}
              </span>
            </p>
            <div className="form-input">
              
              {response.cardItems.map((item, index) => (
                  
                  <div key={index} className="cardInput">
                      {item.value}
                  </div>
              ))}
          </div>
        </div>
        
        //  : 
        //  <div style={{
        //     backgroundColor: "#fff",
        //     borderRadius: "10px",
        //     width: "280.4px",
        //     height: "40.4px",
        //     padding: "4px 11px",
        //   }}>
        //     <h3>No info found</h3>
        //  </div>
         }
         {
            !resp && <div>found an error</div>
         }
         

    </div>
  )

}

export default Cards