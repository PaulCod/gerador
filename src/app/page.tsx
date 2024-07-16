"use client"

import { useState, useEffect } from 'react';

export default function Home() {
  function genColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const year = new Date().getFullYear();

  const [colors, setColors] = useState({
    color1: genColor(),
    color2: genColor(),
    color3: genColor(),
    color4: genColor(),
  });

  useEffect(() => {
    const newColors = {
      color1: genColor(),
      color2: genColor(),
      color3: genColor(),
      color4: genColor(),
    };
    setColors(newColors);
  }, []);

  return (
    <>
      <header>
        <div>
          <title>Gerador de cores</title>
        </div>
      </header>

      <main>
        <div className="color1" style={{ backgroundColor: colors.color1 }}>{colors.color1}</div>
        <div className="color2" style={{ backgroundColor: colors.color2 }}>{colors.color2}</div>
        <div className="color3" style={{ backgroundColor: colors.color3 }}>{colors.color3}</div>
        <div className="color4" style={{ backgroundColor: colors.color4 }}>{colors.color4}</div>
      </main>
      <footer>Paulo &copy;{year}</footer>
    </>
  );
}
