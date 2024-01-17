export default function CreateProductModal() {
  return (
    <div
      className="mx-auto w-[90%] max-w-3xl aspect-[1.4] shadow rounded-md bg-white animate-zoom-in"
      onClick={(e) => e.stopPropagation()}
    ></div>
  );
}
