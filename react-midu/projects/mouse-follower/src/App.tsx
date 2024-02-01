import { useState, useEffect } from "react";

function App() {
  const [verEfecto, setEfecto] = useState(false);
  const [mousePosition, setMousePosition] = useState({x:-100, y:-100});

  useEffect(() => {
    const handleEventListener = (event: MouseEvent) => {
      const {clientX, clientY} = event;
      setMousePosition({ x: clientX, y: clientY })
    };

    if (verEfecto) {
      window.addEventListener("pointermove", handleEventListener);
    }

    return () => {
      window.removeEventListener("pointermove", handleEventListener);
    }
  }, [verEfecto]);

  return (
    <>
      <div style={{pointerEvents: 'none', transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`}}
      className={'absolute h-10 w-10 rounded-full bg-blue-400 top-[-20px] left-[-20px] none'} />

      <section className="flex w-full h-dvh justify-center items-center">
        <button
          onClick={() => setEfecto(!verEfecto)}
          className="text-white font-bold rounded-full bg-slate-900 p-2 pr-4 pl-4
          hover:bg-slate-200 hover:text-black h-10"
        >
          {verEfecto ? "Desactivar" : "Activar"} seguir puntero
        </button>
      </section>
    </>
  );
}

export default App;
