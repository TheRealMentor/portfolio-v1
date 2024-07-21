import "./style.css";

export default function PageTitle({ name }: { name: string }) {
  return (
    <div>
      <p className="text-[80px] font-black text-shadow-lg">{name}</p>
    </div>
  );
}
