import React, { useState } from 'react';
import OptionCard from './OptionCard';

import { default_optioncard } from 'utils/constants/optionform';
import 'utils/styles/OptionLayout.scss';
import 'utils/styles/OptionCard.scss';

const OptionLayout = () => {
  const [optionCardList, setOptionCardList] = useState([]);

  const addCard = () => {
    if (optionCardList.length === 0) {
      setOptionCardList([default_optioncard]);
    } else {
      let id = optionCardList[optionCardList.length - 1].id;
      let temp = [...optionCardList].concat({ ...default_optioncard, id: id + 1 });
      setOptionCardList(temp);
    }
  };

  return (
    <>
      <section className='option-container'>
        <div className='item-container'>
          <div className='container-header'>
            <h2>상품 옵션*</h2>
            <button className='add-option-btn' onClick={addCard}>
              + 옵션 세트 추가
            </button>
          </div>
          <ul>
            {optionCardList.length === 0 ? (
              <div className='inven-empty'>
                <p>옵션세트를 추가하여 옵션을 구성해 주세요.</p>
              </div>
            ) : (
              optionCardList.map((optionCard, index) => (
                <OptionCard
                  key={index}
                  optionCard={optionCard}
                  optionCardList={optionCardList}
                  setOptionCardList={setOptionCardList}
                ></OptionCard>
              ))
            )}
          </ul>
        </div>
      </section>
    </>
  );
};

export default OptionLayout;
