import openPumbadevWebsite from "../../utils/openPumbadevWebsite";
import "./style.scss";

export default function Header() {
  return (
    <>
      <header className="header">
        <img
          src="src/assets/pumbadev-logo.svg"
          alt="Logo do Desenvolvedor Pumba"
          onClick={openPumbadevWebsite}
        />
        <h1>Meu IP (Internet Protocol)</h1>
      </header>
    </>
  );
}
