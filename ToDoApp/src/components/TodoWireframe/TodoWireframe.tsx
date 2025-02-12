import { ReactElement } from "react";

import "./TodoDisplay.css";
import "./TodoPanel.css";

const TodoWireframe = ({ children }: { children: ReactElement[] }) => {
  const [display, panel] = children;

  let scale = 0.75;
  return (
    <main style={{ width: "100vw", height: "auto" }}>
      <section
        className="todoDisplay"
        style={{ width: `${scale * 100 - 1}vw` }}
      >
        {display}
      </section>
      <section
        className="todoPanel"
        style={{ width: `${(1 - scale) * 100}vw` }}
      >
        {panel}
      </section>
    </main>
  );
};

export default TodoWireframe;
