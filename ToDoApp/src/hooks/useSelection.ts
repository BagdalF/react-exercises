import { RefObject, useEffect, useState } from "react";
import { useChangeTodoContext } from "../context/SelectedTodoContext";

const TodoClassName = "todoItem";

export default function useSelection<T>(
  selectionRef: RefObject<HTMLDivElement> | null,
  info: T | null
) {
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const changeTodo = useChangeTodoContext();

  useEffect(() => {
    const CLICK = "click";
    const targetElement = selectionRef?.current;

    const selectFunction = () => {
      console.log(element);
      console.log(targetElement);

      if (element === targetElement) clickAwayFunction(null);
      setElement(targetElement!);
      changeTodo(info);
    };

    const clickAwayFunction = (event: MouseEvent | null) => {
      if ((event?.target as HTMLElement).closest(`.${TodoClassName}`)) return;
      setElement(null);
      changeTodo(null);
    };

    if (!(targetElement && targetElement.addEventListener)) return;

    targetElement.addEventListener(CLICK, selectFunction);
    document.addEventListener(CLICK, clickAwayFunction);

    return () => {
      targetElement.removeEventListener(CLICK, selectFunction);
      document.removeEventListener(CLICK, clickAwayFunction);
    };
  }, [selectionRef, info]);

  return element;
}
