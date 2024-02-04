import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingAnimation: React.FC = () => {
  const el = useRef<HTMLSpanElement>(null); // Defines the type for the ref
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: [
        'Hi I\'m Andrew Rayski',
        'I\'m a Computer Science Student',
        'I\'m an Aspiring Software Engineer',
        'Welcome to my Portfolio!'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    };

    if (el.current) {
      typed.current = new Typed(el.current, options);
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);

  return <span ref={el} style={{ whiteSpace: 'pre-wrap' }} />;
};

export default TypingAnimation;
