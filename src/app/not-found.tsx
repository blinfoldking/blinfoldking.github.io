export default function NotFound() {
  return (
    <div className="w-[100%] h-[100%] bg-white shadow-md rounded-xl animate-appear-l-1000 flex justify-center items-center">
      <div className="absolute opacity-5">
        <div className="font-epetri text-8xl">ERROR</div>
      </div>
      <div className="prose flex flex-col justify-center items-center">
        <h1 style={{ margin: 0 }}>Sorry :(</h1>
        <p className="font-bold">
          the page that you were looking doesn't exists{" "}
          <span className="opacity-50">(yet?)</span>
        </p>
      </div>
    </div>
  );
}
