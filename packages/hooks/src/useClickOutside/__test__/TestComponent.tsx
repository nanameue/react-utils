import React, { useRef } from 'react';
import useClickOutside from '../index';

interface Props {
  onClickOutside: () => void;
}

const TestComponent = ({ onClickOutside }: Props) => {
  const ref = useRef<HTMLButtonElement | null>(null);
  useClickOutside(ref as { current: HTMLElement }, onClickOutside);

  return (
    <div>
      <button id="target" ref={ref}>
        target
      </button>
      <button id="outside">outSide</button>
    </div>
  );
};

export default TestComponent;
