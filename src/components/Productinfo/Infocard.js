import React, { useState } from 'react';
import Optioninput from 'components/Productinfo/Optioninput';
import { default_option_list } from 'utils/constants/productform';
import 'utils/styles/Infocard.scss';
function Infocard({ cardList, setCardList, card }) {
  const [addOptionList, setAddOptionList] = useState([]);
  const [optionIndex, setOptionIndex] = useState(1);

  const deleteCard = () => {
    if (card.id > 1) {
      let temp = cardList.filter((el) => el.id !== card.id);
      setCardList(temp);
    } else {
      alert('삭제 불가 합니다');
    }
  };

  const addOption = () => {
    let temp = [...addOptionList].concat({ id: optionIndex });
    setOptionIndex(optionIndex + 1);
    setAddOptionList(temp);
  };

  const removeOption = (idx) => {
    let temp = [...addOptionList.slice(0, idx), ...addOptionList.slice(idx + 1)];
    setAddOptionList(temp);
  };

  return (
    <div className='info-card'>
      <p>
        정보고시 {card.id}{' '}
        <button className='delete-infocard' onClick={deleteCard}>
          삭제
        </button>
      </p>
      <div className='info-option'>
        <ul>
          <Optioninput
            option_name='제품명 / 중량'
            option_description='제품명/중량을 입력해 주세요'
          />
          <Optioninput
            option_name='원산지 / 원재료 함량'
            option_description='원산지 / 원재 함량을 입력해 주세요.'
          />
          <Optioninput
            option_name='등급'
            option_description='등급 (근내지방도 수치)를 입력해 주세요.'
          />
          <Optioninput option_name='보관' option_description='보관 방식을 입력해 주세요.' />
          {addOptionList.map((option, idx) => {
            return (
              <li className='option-item sub-option' key={option.id}>
                <input
                  type='text'
                  className='sub-item-title'
                  placeholder='항목 제목 자유 입력'
                ></input>
                <div className='sub-item-input'>
                  <input type='text' placeholder='내용을 입력해주세요.'></input>
                  <button
                    className='sub-item-delete'
                    onClick={() => {
                      removeOption(idx);
                    }}
                  >
                    삭제
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <button className='add-option-btn' onClick={addOption}>
        + 항목 추가
      </button>
    </div>
  );
}

export default Infocard;
