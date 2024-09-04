// App.js
import React, { useState, useEffect } from 'react';
import TypeIt from "typeit-react";
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [animationDone, setAnimationDone] = useState(false);
  const [className, setClassName] = useState(''); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationDone(true);
    }, 3900);
    return () => clearTimeout(timer);
  }, []);

  const move = () => {
    setClassName('_move'); // className 상태를 업데이트
  };
  
  return (
    <BrowserRouter>
      <div className="main">
        <div className={`typeit-container${className}`}> {/* className 사용 */}
          <div className="typeit">
            <TypeIt
              options={{
                strings: ["LookAroundMyWishlist:)"],
                speed: 80,
                loop: false,
                afterComplete: move, // TypeIt 완료 후 move 함수 호출
              }}
            />
          </div>
        </div>        
          {animationDone && ( // animationDone이 true일 때만 아래 내용이 렌더링됨
          <>
            <div className="photo-grid">
              {Array.from({ length: 36 }).map((_, index) => (
                <a key={index} href={`/detail/detail_${index + 1}.html`}>
                  <img
                    src={`/image/image_${index + 1}_0.jpg`}
                    alt={`이미지 ${index + 1}`}
                    className="photo"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
            <div className='mypage'> 
                <a href="/information.html">Information</a>
                <a href="#">Instagram</a>
                <a href="/mypage.html">Mypage</a>
            </div>
          </>
        )}
      </div>
    </BrowserRouter>
  );
}
export default App;