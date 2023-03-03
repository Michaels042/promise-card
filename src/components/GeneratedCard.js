import React, {useState} from 'react';
import DownloadShareModal from './DownloadShareModal';
import { Link } from 'react-router-dom';
import PromiseCard from './PromiseCard';

const GeneratedCard = ({ cardInfo, color }) => {
  const [openModal, setOpenModal] = useState(false)
  console.log("new",cardInfo);

  return (
    <div>
    <div className={`card`}>
      <div id={`generatedScreen`}
       style={{
        backgroundColor: `${color.activeColor}`,
      }} 
       >
          <h2>{cardInfo.card.name + `'s`} Promise Card</h2>
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
              {cardInfo.card.cardItems.length}
            </span>
          </p>
          <div className="form-input">
            {cardInfo.card.cardItems.map((item, index) => (
              <input
                key={index}
                type="text"
                name="text1"
                placeholder="write item name"
                value={item.value}
                onChange={(e)=>console.log(e)}
              />
            ))}
        </div>
      </div>
      
      <div className="linkWrap">
        <Link  className="create-link" onClick={PromiseCard}>
          <p>Create your own Promisecard.com.ng</p>
        </Link>

      </div>
     
      <div className="share">
        
        <div  onClick={() => setOpenModal(true)} className="socialShare">
          <button>Share with friends</button>
        </div>
       
        <Link onClick={PromiseCard}>
          <div className="createCard" onClick={PromiseCard}>
              <button>Create new card</button>
          </div>
        </Link>
      </div>
    </div>
      <DownloadShareModal  cardInfo={cardInfo} open={openModal} onClose={() => setOpenModal(false)} />
  </div>
  );
}

export default GeneratedCard