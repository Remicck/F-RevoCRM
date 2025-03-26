import React from 'react';

interface ButtonProps {
  text: string;
  color?: string;
  onClick?: () => void;
}

export const Button2: React.FC<ButtonProps> = ({ text, color = '#007bff', onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    // カスタムイベントを発火してPHP側で検知できるようにする
    const event = new CustomEvent('button-click', {
      detail: { text },
      bubbles: true,
      composed: true
    });
    dispatchEvent(event);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: color,
        color: '#fff',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px'
      }}
    >
      {text}
    </button>
  );
}; 