import { useEffect, useRef, useState } from 'react';

useMagicColor.propTypes = {
    
};

function randomColor(currentColor){
    const COLOR_LIST = ['red', 'green', 'yellow'];
    const currentIndex =  COLOR_LIST.indexOf(currentColor);
    let newIndex = currentIndex;

    // nếu nó === nhau tiếp thì dùng vòng lặp để render ra màu khác để kh trùng nhau
    while( currentIndex === newIndex){
        newIndex = Math.trunc(Math.random() *  3);
    }
    console.log(COLOR_LIST[newIndex]);
    return COLOR_LIST[newIndex];
}

function useMagicColor() {
    const [color, setColor] = useState('transparent');
    // sử dụng useRef để lưu cái value ban đầu của transparent
    const  colorRef = useRef('transparent')
    useEffect(()=>{
        const colorInterval = setInterval(() =>{
            // console.log('Frist color: ', color);
            // console.log('Change color:', colorRef.current);

            //render ra newColor nhưng tránh để trùng với value color ban đầu 
            const newColor= randomColor(colorRef.current);
            setColor(newColor);
            
            // Lưu giá trị khi setColor
            colorRef.current  = newColor;
        },1000);

        return () =>{
            clearInterval(colorInterval);
        }
        // Có depentioncies nó sẽ chạy lại 1 lần sau mỗi lần render
        // mà mỗi lần render thì console.log color ra thì nó lại chạy transparent
        // vì vậy dụng useRef để lưu giá trị ban đầu và gán cho setColor mới
    }, []);
    
    return color;
}

export default useMagicColor;