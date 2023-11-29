import React, { useState, useEffect } from 'react';

function Slogan() {
  const textStyle = {
    fontSize: '3em', // Ajusta el tamaño de la fuente aquí
  };
  
  const [words, setWords] = useState(['calidad', 'confianza', 'compromiso']); // Lista de palabras
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
      }, 2000); // La palabra completa se mantiene por 2 segundos antes de borrar
    }, 1000); // Después de 5 segundos, inicia la escritura

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
            }, 2000); // La palabra completa se mantiene por 2 segundos antes de borrar
          }
          return sliced;
        } else {
          const sliced = letters.slice(0, -letterIndex).join('');
          if (!sliced) {
            clearInterval(interval);
          }
          return sliced;
        }
      });

      if (writing && letterIndex < words[wordIndex].length) {
        letterIndex += 1;
      } else if (!writing) {
        letterIndex += 1;
      }
    }, 100); // Ritmo más rápido de escritura (ajusta este valor según desees)

    return () => clearInterval(interval);
  }, [wordIndex, words, writing]);

  return (
    <div className="container text-center mt-5">
      <h4 data-aos="fade-up" className="display-3 mb-5 aos-init aos-animate text-black" style={textStyle}>
        Tu eres tu propia empresa, tú decides cuanto invertir en ti <br /> Te ofrecemos <span className="typed-words text-orange">{currentWord}</span>
        <span className="typed-cursor">|</span>
      </h4>
      
    </div>
  );
}

export default Slogan;




