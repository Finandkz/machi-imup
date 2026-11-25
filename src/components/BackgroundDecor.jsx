import React from 'react';

export default function BackgroundDecor() {
  const items = [
    { icon: 'fa-cat', top: '12%', left: '6%', size: 'text-2xl', color: '#FFAAA6' },
    { icon: 'fa-paw', top: '38%', left: '4%', size: 'text-xl', color: '#FFB4C2' },
    { icon: 'fa-heart', top: '78%', left: '8%', size: 'text-xl', color: '#FF6B81' },
    { icon: 'fa-star', top: '22%', right: '7%', size: 'text-xl', color: '#FFD166' },
    { icon: 'fa-cat', top: '58%', right: '5%', size: 'text-2xl', color: '#FF8DA1' },
    { icon: 'fa-paw', top: '86%', right: '8%', size: 'text-xl', color: '#FFAAA6' },
    { icon: 'fa-cake-candles', top: '6%', left: '48%', size: 'text-xl', color: '#FF6B81' },
    { icon: 'fa-wand-magic-sparkles', top: '92%', left: '46%', size: 'text-2xl', color: '#FFD166' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`absolute opacity-30 select-none ${item.size}`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            color: item.color,
            animation: `floatUp ${14 + (idx % 4) * 3}s infinite ease-in-out`
          }}
        >
          <i className={`fa-solid ${item.icon}`}></i>
        </div>
      ))}
    </div>
  );
}
