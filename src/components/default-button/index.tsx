import "./style.scss";

interface Props {
  label: string;
  type: string;
}

export default function DefaultButton({ label, type }: Props) {
  return (
    <>
      <button className={`default-button -${type}`}>{label}</button>
    </>
  );
}
