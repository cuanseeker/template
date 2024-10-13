export default function NotFound({}) {
  return (
    <div className="w-[100vw] h-[100vh] flex">
      <div className="m-auto w-[70%]">
        <div>
          <span className="text-6xl font-bold">Not Found !!!</span>
        </div>
        <div>
          <span className="text-3xl">
            The page you are looking for may have been moved, deleted, or
            possibly never existed.
          </span>
        </div>
      </div>
    </div>
  );
}
