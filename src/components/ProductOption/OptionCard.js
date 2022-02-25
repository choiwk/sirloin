import React, { useState } from 'react';

import SelectProduct from './SelectProduct';
import 'utils/styles/SelectProduct.scss';

const ItemOptionLayout = () => {
  const [optionInven, setOptionInven] = useState([]);
  const [imageSrc, setImageSrc] = useState('');

  const addOptionInven = () => {
    setOptionInven(optionInven.concat(<SelectProduct />));
  };

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <section className='item-layout'>
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
          <SelectProduct />
          {optionInven.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
        <div>
          <footer>
            <button className='add-option-btn' onClick={addOptionInven}>
              &#43;&#32; 옵션 추가
            </button>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default ItemOptionLayout;
