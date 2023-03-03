import React from 'react'
import { useParams} from 'react-router-dom'
import "./App.css";

// import { useParams } from "react-router-dom";

const Cards = ({cardInfo}) => {
    // const { cardId } = useParams(); 

  return (
    <div>
         <div id={`generatedScreen`}
       style={{
        width: "400px",
        height: "720px",
        backgroundColor: `${cardInfo.color}`,
      }} 
       >
          <h2> Promise Card</h2>
          <h2>{cardInfo.name + `'s`} Promise Card</h2>
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
              {cardInfo.cardItems.length}
            </span>
          </p>
          <div className="form-input">
            {cardInfo.cardItems.map((item, index) => (
                
                <div className="cardInput">
                    {item}
                </div>

            //   <input
            //     key={index}
            //     type="text"
            //     name="text1"
            //     placeholder="write item name"
            //     value={item}
            //     onChange={(e)=>console.log(e)}
            //   />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Cards