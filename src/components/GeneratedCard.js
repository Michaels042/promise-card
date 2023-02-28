import React, {useState} from 'react';
import DownloadShareModal from './DownloadShareModal';
import { Link } from 'react-router-dom';
import PromiseCard from './PromiseCard';

const GeneratedCard = ({cardInfo}) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className={`card`}>
      <h2>{cardInfo.name + `'s`} Promise Card</h2>
      <p>
        Things I want{" "}
        <span
          style={{
            backgroundColor: "#fff",
            borderRadius: "100%",
            padding: "5px 10px",
          }}
        >
          {cardInfo.text.length}
        </span>
      </p>
      <div className="form-input">
        {cardInfo.text.map((item, index) => (
          <input
            key={index}
            type="text"
            name="text1"
            placeholder="write item name"
            value={item.value}
          />
        ))}
      </div>
      <div className="create-link">
        <Link onClick={PromiseCard}>
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
        <DownloadShareModal open={openModal} onClose={() => setOpenModal(false)} />
      </div>
    </div>
  );
}

export default GeneratedCard