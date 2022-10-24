import "./style.scss";

interface Props {
  label: string;
  type: string;
}

export default function DefaultInput({ label, type }: Props) {
  return (
    <>
      <label className="input__label">
        {label}:
        <input type={type} className="input" />
      </label>
    </>
  );
}
