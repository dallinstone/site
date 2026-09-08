import { KeyboardEvent } from "react";

export function handleTabKey(
  event: KeyboardEvent<HTMLButtonElement>,
  index: number,
  count: number,
  select: (index: number) => void,
) {
  let next = index;
  if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % count;
  else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + count) % count;
  else if (event.key === "Home") next = 0;
  else if (event.key === "End") next = count - 1;
  else return;

  event.preventDefault();
  select(next);
  window.requestAnimationFrame(() => {
    const tabs = event.currentTarget.closest('[role="tablist"]')?.querySelectorAll<HTMLElement>('[role="tab"]');
    tabs?.item(next).focus();
  });
}
