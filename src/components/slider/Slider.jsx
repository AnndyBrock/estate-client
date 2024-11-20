import "./slider.scss";
import { useState, useEffect } from "react";

const Slider = ({ images }) => {
    const [imgIndex, setImgIndex] = useState(null);

    const changeSlide = (direction) => {
        setImgIndex((prevIndex) => {
            const increment = direction === 'left' ? -1 : 1;
            return (prevIndex + increment + images.length) % images.length;
        });
    };

    // Добавление обработчиков для клавиш Esc, ArrowRight и ArrowLeft
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setImgIndex(null); // Закрываем слайдер
            } else if (event.key === "ArrowRight" && imgIndex !== null) {
                changeSlide("right"); // Прокрутка вправо
            } else if (event.key === "ArrowLeft" && imgIndex !== null) {
                changeSlide("left"); // Прокрутка влево
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        // Удаление обработчика при размонтировании компонента
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [imgIndex]); // Добавляем imgIndex в зависимости, чтобы обновлять обработчик

    return (
        <div className="slider">
            {imgIndex !== null && (
                <div className="fullSlider">
                    <div className="arrow" onClick={() => changeSlide("left")}>
                        <img src="/arrow.png" alt="" />
                    </div>
                    <div className="imgContainer">
                        <img src={images[imgIndex]} alt="" />
                    </div>
                    <div className="arrow" onClick={() => changeSlide("right")}>
                        <img className="right" src="/arrow.png" alt="" />
                    </div>
                    <div className="close" onClick={() => setImgIndex(null)}>X</div>
                </div>
            )}
            <div className="bigImage">
                <img src={images[0]} alt="" onClick={() => setImgIndex(0)} />
            </div>
            <div className="smallImages">
                {images.slice(1).map((image, index) => (
                    <img src={image} alt="" key={index} onClick={() => setImgIndex(index + 1)} />
                ))}
            </div>
        </div>
    );
};

export default Slider;
