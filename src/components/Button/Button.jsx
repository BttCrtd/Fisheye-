import "@/styles/button.css";

export default function Button({ name, onClick, aria }) {
  return (
    <button className="btn" onClick={onClick} aria-label={aria}>
      {name}
    </button>
  );
}