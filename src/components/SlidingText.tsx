'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  type MotionValue,
  motion,
  useSpring,
  useTransform,
  motionValue,
} from 'motion/react';
import useMeasure from 'react-use-measure';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const CHAR_COUNT = 26;

const TRANSITION = {
  type: 'spring' as const,
  stiffness: 85,
  damping: 18,
  mass: 1.25,
};

function charToIndex(char: string): number {
  return char.toLowerCase().charCodeAt(0) - 97;
}

function forwardTarget(current: number, target: number): number {
  // Always cycle forward (a→z direction)
  if (target >= current) return target;
  return target + CHAR_COUNT;
}

function Letter({
  from,
  to,
  hovered,
}: {
  from: string;
  to: string;
  hovered: boolean;
}) {
  const fromIndex = charToIndex(from);
  const toIndex = charToIndex(to);
  const initial = motionValue(fromIndex);
  const animatedValue = useSpring(initial, TRANSITION);
  const lastTarget = useRef(fromIndex);

  useEffect(() => {
    const rawTarget = hovered ? toIndex : fromIndex;
    const next = forwardTarget(lastTarget.current, rawTarget);
    lastTarget.current = next;
    animatedValue.set(next);
  }, [animatedValue, hovered, fromIndex, toIndex]);

  return (
    <div className='relative inline-block overflow-y-clip leading-none'>
      <span className='invisible'>{hovered ? to : from}</span>
      {Array.from({ length: CHAR_COUNT }, (_, i) => (
        <LetterSlot key={i} mv={animatedValue} index={i} />
      ))}
    </div>
  );
}

function LetterSlot({
  mv,
  index,
}: {
  mv: MotionValue<number>;
  index: number;
}) {
  const char = ALPHABET[index];
  const [ref, bounds] = useMeasure();

  const y = useTransform(mv, (latest) => {
    if (!bounds.height) return 0;
    const currentValue = ((latest % CHAR_COUNT) + CHAR_COUNT) % CHAR_COUNT;
    const offset = (CHAR_COUNT + index - currentValue) % CHAR_COUNT;
    let memo = offset * bounds.height;
    if (offset > CHAR_COUNT / 2) {
      memo -= CHAR_COUNT * bounds.height;
    }
    return memo;
  });

  if (!bounds.height) {
    return (
      <span ref={ref} className='invisible absolute'>
        {char}
      </span>
    );
  }

  return (
    <motion.span
      style={{ y }}
      className='absolute inset-0 flex items-center justify-center'
      ref={ref}
    >
      {char}
    </motion.span>
  );
}

export function SlidingText({
  from,
  to,
}: {
  from: string;
  to: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className='inline-block'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {from.split('').map((char, i) => (
        <Letter key={i} from={char} to={to[i]} hovered={hovered} />
      ))}
    </span>
  );
}
