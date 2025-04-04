import React from 'react';

const Instagram_Color_Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg style={{ width: 0, height: 0 }} {...props}>
      <radialGradient id="rg" r="150%" cx="30%" cy="107%">
        <stop stopColor="#fdf497" offset="0" />
        <stop stopColor="#fdf497" offset="0.05" />
        <stop stopColor="#fd5949" offset="0.45" />
        <stop stopColor="#d6249f" offset="0.6" />
        <stop stopColor="#285AEB" offset="0.9" />
      </radialGradient>
    </svg>
  );
};

export default Instagram_Color_Logo;
