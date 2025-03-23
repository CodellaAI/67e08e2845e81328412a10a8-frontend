
'use client';

import { useState, useEffect } from 'react';

export default function TypingEffect({ texts, speed = 100, className = '' }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Toggle cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (!texts || texts.length === 0) return;
    
    const currentText = texts[currentTextIndex];
    
    if (isTyping) {
      // Typing effect
      if (currentIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + currentText[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);
        
        return () => clearTimeout(timeout);
      } else {
        // Finished typing current text
        const timeout = setTimeout(() => {
          // If there's another text to type, move to next text
          if (currentTextIndex < texts.length - 1) {
            setDisplayedText('');
            setCurrentIndex(0);
            setCurrentTextIndex(prev => prev + 1);
          }
        }, 1000);
        
        return () => clearTimeout(timeout);
      }
    }
  }, [texts, currentIndex, currentTextIndex, isTyping, speed]);

  return (
    <div className={className}>
      <p>$ {displayedText}{showCursor ? <span className="animate-blink">_</span> : ' '}</p>
    </div>
  );
}
