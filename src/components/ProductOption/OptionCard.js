import React, { useState } from 'react';

import SelectProduct from './SelectProduct';
import { default_additionform } from 'utils/constants/optionform';
import 'utils/styles/SelectProduct.scss';

const ItemOptionLayout = ({ optionCardList, setOptionCardList, optionCard }) => {
  const [imageSrc, setImageSrc] = useState('');
  const [additCardList, setAdditCardList] = useState([default_additionform]);

  const encodeFileToBase64 = (fileBlob) => {
    console.log(fileBlob);
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const deleteCard = () => {
    let temp = optionCardList.filter((el) => el.id !== optionCard.id);
    setOptionCardList(temp);
  };

  const addAdditCard = () => {
    if (additCardList.length === 0) {
      setAdditCardList([default_additionform]);
    } else {
      let id = additCardList[additCardList.length - 1].id;
      let temp = [...additCardList].concat({ ...default_additionform, id: id + 1 });
      setAdditCardList(temp);
    }
  };

  return (
    <section className='item-layout'>
      <div className='delete-inven-area'>
        <button className='delete-btn' onClick={deleteCard}>
          삭제
        </button>
      </div>
      <div className='item-set-container'>
        <div className='image-container'>
          {imageSrc && <img className='onload-image' src={imageSrc} alt='preview-img' />}
          <form method='POST'>
            <label className='input-image-btn' htmlFor='input-image'>
              + 이미지 첨부
            </label>
            <input
              type='file'
              id='input-image'
              accept='image/*'
              alt=''
              onChange={(e) => {
                encodeFileToBase64(e.target.files[0]);
              }}
            />
          </form>
        </div>
        <ul className='option-container'>
          {additCardList.map((additCard, index) => (
            <SelectProduct
              key={index}
              additCard={additCard}
              additCardList={additCardList}
              setAdditCardList={setAdditCardList}
            />
          ))}
        </ul>
        <div>
          <footer>
            <button className='add-option-btn' onClick={addAdditCard}>
              &#43;&#32; 옵션 추가
            </button>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default ItemOptionLayout;
