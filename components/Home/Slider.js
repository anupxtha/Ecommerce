import React, { useEffect, useState } from 'react';

import data from './data.js';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
function Slider() {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);
  const increase = (e) => {
    e.preventDefault();
    setCount(count + 1);
    if (count >= data.length - 1) {
      setCount(0);
    }
  };
  const decrease = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };
  useEffect(() => {
    const lastIndex = data.length - 1;
    if (count < 0) {
      setCount(lastIndex);
    }
    if (count > lastIndex) {
      setCount(0);
    }
  }, [count, data]);
  useEffect(() => {
    let slider = setInterval(() => {
      setCount(count + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [count]);

  const showActive = (index) => {
    if (index === count) {
      setActive(true);
    }
  };
  return (
    <>
      <div className="slideContain">
        {data && (
          <div className="slideImage">
            {data.map((newData, index) => {
              let activeSlide = '';
              const { id, name, image } = newData;

              if (index === count) {
                activeSlide = 'active';
              }
              if (
                index === count + 1 ||
                (count >= data.length - 1 && index === 0)
              ) {
                activeSlide = 'nextSlide';
              }
              if (
                index === count - 1 ||
                (count === 0 && index === data.length - 1)
              ) {
                activeSlide = 'prevSlide ';
              }
              return (
                <>
                  <article className={activeSlide} key={id} id="slider">
                    <img src={image} alt="" />
                  </article>
                </>
              );
            })}
          </div>
        )}
        <button className="prev" onClick={(e) => decrease(e)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={(e) => increase(e)}>
          <FiChevronRight />
        </button>

        <div className="dots">
          {data.map((newData, index) => {
            const { id } = newData;
            let active = '';
            if (index === count) {
              active = 'active';
            }
            return (
              <div className="innerDots">
                <div
                  className="none"
                  onClick={() => {
                    setCount(index);
                    console.log(count);
                    showActive(index);
                  }}
                  id={active}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Slider;
