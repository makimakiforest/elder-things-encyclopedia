'use client';

import { MouseEventHandler } from 'react';

const Header: React.FC = () => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    console.log('unko');
  };

  return (
    <header className="container sm flex justify-between items-center py-6 px-4 m-auto">
      <a
        className="text-2xl"
        href="/"
      >
        elder-things-encyclopedia
      </a>
      <ul className="flex">
        <li className="mr-2">
          <button onClick={handleClick}>JSONアップロード</button>
        </li>
        <li>お問い合わせ</li>
      </ul>
    </header>
  );
};

export default Header;
