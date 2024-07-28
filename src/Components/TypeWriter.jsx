import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

const TypewriterWrapper = styled.div`
  display: inline-block;
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.15em solid transparent;
  animation: ${blink} 0.7s step-end infinite;

  &::after {
    content: '';
    display: inline-block;
    width: 0.1em;
    background-color: transparent;
    margin-left: -0.1em;
  }
`;

const Typewriter = ({ words, typingSpeed = 150, deletingSpeed = 75, pause = 1000 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[currentWordIndex];
            const nextText = isDeleting
                ? currentWord.substring(0, displayedText.length - 1)
                : currentWord.substring(0, displayedText.length + 1);

            setDisplayedText(nextText);

            if (!isDeleting && nextText === currentWord) {
                setTimeout(() => setIsDeleting(true), pause);
            } else if (isDeleting && nextText === '') {
                setIsDeleting(false);
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            }
        };

        const interval = setInterval(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearInterval(interval);
    }, [displayedText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pause]);

    return <TypewriterWrapper>{displayedText}</TypewriterWrapper>;
};

export default Typewriter;
