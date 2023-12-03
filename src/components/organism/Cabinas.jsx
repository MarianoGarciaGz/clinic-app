import React, { useState, useEffect } from 'react';

function Cabinas() {
  const textStyle = {
    fontSize: '2em',
  };

  const [words, setWords] = useState(['relajada', 'renovada', 'radiante']);
  const [currentWord, setCurrentWord] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [writing, setWriting] = useState(true);
  const [previousWords, setPreviousWords] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWriting(false);
      setTimeout(() => {
        setWriting(true);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setPreviousWords((prev) => [...prev, currentWord]);
      }, 2000); // La palabra completa se mantiene por 4 segundos antes de borrar
    }, 4000); // Después de 6 segundos, inicia la escritura

    return () => clearInterval(interval);
  }, [words, currentWord]);

  useEffect(() => {
    let letterIndex = 0;

    const interval = setInterval(() => {
      setCurrentWord((prev) => {
        const word = words[wordIndex];
        const letters = word.split('');

        if (writing) {
          const sliced = letters.slice(0, letterIndex + 1).join('');
          if (sliced === word) {
            setTimeout(() => {
              setWriting(false);
            }, 2000); // La palabra completa se mantiene por 4 segundos antes de borrar
          }
          return sliced;
        } else {
          const sliced = letters.join('');
          if (!sliced) {
            clearInterval(interval);
          }
          return sliced;
        }
      });

      if (writing && letterIndex < words[wordIndex].length) {
        letterIndex += 1;
      } else if (!writing) {
        letterIndex = 0;
      }
    }, 200); // Ritmo más lento de escritura (ajusta este valor según desees)

    return () => clearInterval(interval);
  }, [wordIndex, words, writing]);

  return (
    <div className="container text-center mt-5">
      <h4 data-aos="fade-up" className="display-3 mb-5 aos-init aos-animate text-black" style={textStyle}>
      Tenemos 5 diferentes cabinas para realizar los diferentes tratamientos <br /> Y que te puedas sentir <span className="typed-words text-orange">{currentWord}</span>
        <span className="typed-cursor">|</span>
      </h4>
    </div>
  );
}

export default Cabinas;





