import DefaultButton from "../default-button";
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
          <div className="user-data__dual-input-container">
            <DefaultInput label="Meu IP" type="Text"></DefaultInput>
            <DefaultButton
              label="ENCONTRAR IP"
              type="light-blue"
            ></DefaultButton>
          </div>

          <div className="input-container__buttons">
            <DefaultButton label="SALVAR" type="blue"></DefaultButton>
            <DefaultButton label="LIMPAR" type="blue"></DefaultButton>
          </div>
        </div>
      </section>
    </>
  );
}
