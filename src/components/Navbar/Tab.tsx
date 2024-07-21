export default function Tab({
  name,
  isSelected,
}: {
  name: string;
  isSelected: boolean;
}) {
  return (
    <div className="px-20">
      <p
        className={
          "text-lg " + (isSelected ? "text-shadow font-black" : "font-light")
        }
      >
        {name}
      </p>
    </div>
  );
}
