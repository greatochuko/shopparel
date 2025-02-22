import LoadingIndicator from "./LoadingIndicator";

export default function FullScreenLoader() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <LoadingIndicator className="fill-accent-blue-100" size={28} />
    </div>
  );
}
