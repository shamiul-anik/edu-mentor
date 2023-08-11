"use client"
import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

interface CounterProps {
    number: number;
  }

const Counter: React.FC<CounterProps> = ({ number }) => {
    const [counterOn, setCounterOn] = useState(false);
  
    return (
      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
           {counterOn && (
              <CountUp start={0} end={number} duration={2} delay={0} />
            )}
      </ScrollTrigger>
    );
  };
  
  

export default Counter;