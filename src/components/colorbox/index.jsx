import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./ColorBox.scss"

ColorBox.propTypes = {

};

function getRandomColor() {
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];

    // Math.trunc là lấy phần nguyên
    // Math.random là hàm random
    const randomIndex = Math.trunc(Math.random() * 5);
    //return ra cái mảng nó random
    return COLOR_LIST[randomIndex];
};

function ColorBox() {
    const [color, setColor] = useState(() => {
        // sử dụng initColor trong callback này để cho giá trị không render nữa
        //|| tránh trường hợp khi mình getItem underfind thì nó sẽ ra deeppink
        const initColor = localStorage.getItem('box_color') || 'deppink';
        console.log(initColor);
        return initColor;

    });


    function handleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor);

        //Sử dụng cách này để khi mình reload lại trang tránh quay lại màu deeppink
        //sử dụng localStorage để lưu giá trị màu
        localStorage.setItem('box_color', newColor);
    }
    return (
        <div
            className='color-box'
            style={{ background: color }}
            onClick={handleBoxClick}>
            Hi anh em
        </div>
    );
}

export default ColorBox;