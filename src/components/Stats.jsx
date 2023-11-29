const renderStat = (count, label) => (
    <div className="text-center ">
      <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-white">{count}</h6>
      <p className="text-sm font-medium tracking-widest text-gray-800 uppercase text-white lg:text-base">
        {label}
      </p>
    </div>
  );

const Statistic = () => {
  return (
    <section className="px-4 lg:px-14 bg-brandPrimary py-16 mx-auto w-full  lg:py-20">
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        {renderStat("700", "Happy Clients")}
        {renderStat("12", "Doctors")}
        {renderStat("30", "Staffs")}
        {renderStat("10", "Helpers")}
      </div>
    </section>
  );
};



export default Statistic;
