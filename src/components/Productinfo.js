import React, { useState } from 'react';

import Infocard from 'components/Productinfo/Infocard';
import { default_productform } from 'utils/constants/productform';

import 'utils/styles/Productinfo.scss';
function Productinfo() {
  const [cardList, setCardList] = useState([default_productform]);

  const addCard = () => {
    let id = cardList[cardList.length - 1].id;
    let temp = [...cardList].concat({ ...default_productform, id: id + 1 });
    setCardList(temp);
  };
  return (
    <div className='productinfo-wrapper'>
      <p className='productinfo-title'>상품 정보 고시</p>

      <div className='infocard-container'>
        {cardList.map((card, idx) => {
          return <Infocard key={idx} cardList={cardList} setCardList={setCardList} card={card} />;
        })}
        <button className='infocard-add-btn' onClick={addCard}>
          + 정보고시 추가
        </button>
      </div>
    </div>
  );
}

export default Productinfo;
