function Subsections({ title, height, innerHeight, id, children }) {
  return (
    <section id={`${id}`} className={`w-full h-${height} text-white`}>
      <h2 className="text-6xl font-bold ">
        <span className="text-secondary pl-4">#</span>
        {title}
      </h2>
      <div
        className={`w-full h-[${innerHeight}] pt-20 flex justify-around items-center`}
      >
        {children}
      </div>
    </section>
  );
}

export default Subsections;
