import DefaultInput from "../default-input";
import "./style.scss";

export default function UserDataContainer() {
  return (
    <>
      <section className="user-data-container">
        <div className="user-data__input-container">
          <DefaultInput label="Nome" type="Text"></DefaultInput>
          <div className="user-data__dual-input-container">
            <DefaultInput label="Idade" type="Number"></DefaultInput>
            <DefaultInput label="Celular" type="Number"></DefaultInput>
          </div>
          <DefaultInput label="Meu IP" type="Text"></DefaultInput>
        </div>
      </section>
    </>
  );
}
