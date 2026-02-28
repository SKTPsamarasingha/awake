const ArrowBtn = ({width = 200, height = 45, text, Icon, dark = false}) => {
    const theme = dark
        ? "bg-stone-100 text-black border-stone-200 hover:bg-black hover:text-white"
        : "bg-black text-stone-100 border-black hover:bg-white hover:text-black";

    const circle = dark
        ? "bg-black text-white group-hover:bg-white group-hover:text-black"
        : "bg-stone-100 text-black group-hover:bg-black group-hover:text-white";

    return (
        <button
            className={`group relative flex flex-row-reverse items-center justify-between rounded-full p-1 border transition-colors duration-500 ease-in-out overflow-hidden ${theme}`}
            style={{
                width,
                height,
                "--move-x": `-${width - 50}px`
            }}
        >
            <span
                className={`z-10 flex items-center justify-center rounded-full w-9 h-9 mr-0.5 transition-all duration-500 ease-in-out group-hover:translate-x-[var(--move-x)] ${circle}`}>
        <Icon className="transition-transform duration-500 -rotate-45 group-hover:rotate-0" width={20}/>
      </span>

            <span className="mx-4 font-medium transition-transform duration-500 group-hover:translate-x-[45px]">
        {text}
      </span>
        </button>
    );
};


export default ArrowBtn