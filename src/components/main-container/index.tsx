import { ReactNode } from "react";
import "./style.scss";
interface Props {
  children: ReactNode;
}

export default function MainContainer({ children }: Props) {
  return (
    <>
      <main className="main-container">{children}</main>
    </>
  );
}
