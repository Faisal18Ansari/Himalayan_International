export default function Card1(props) {
  const { title, img, info } = props.cardData;
  return (
    <>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-secondary rounded-[25px]">
        <div className="h-[300px] w-[300px] rounded-[25px] overflow-hidden bg-transparent">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 rounded-none "
            src={img}
            alt=""
          />
        </div>

        <div className="absolute inset-0 flex translate-y-[0%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[-100%]  overflow-hidden">
          <h1 className="font-dmserif text-3xl font-bold text-white">
            {title}
          </h1>
        </div>
        <div className="absolute  inset-0 flex translate-y-[100%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0  overflow-hidden rounded-[25px]">
          <p className="mb-3 z-10 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {info}
          </p>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/60 group-hover:via-black/60 group-hover:to-black/70"></div>
        </div>
      </div>
    </>
  );
}
