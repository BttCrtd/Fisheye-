import "@/styles/button.css";

export default function Button({ name, onClick, aria, type }) {
  return (
    <button className="btn" onClick={onClick} aria-label={aria} type={type}>
      {name}
    </button>
  );
}