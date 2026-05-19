import { RefObject } from "react";

type GlobalFxProps = {
  cursorDot: RefObject<HTMLDivElement | null>;
  cursorRing: RefObject<HTMLDivElement | null>;
};

export function GlobalFx({ cursorDot, cursorRing }: GlobalFxProps) {
  return (
    <>
      <div className="cursor-dot" ref={cursorDot} />
      <div className="cursor-ring" ref={cursorRing} />
      <div className="noise" />
    </>
  );
}
