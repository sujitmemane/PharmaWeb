const About = () => {
  return (
    <div className="px-4 py-32 mx-auto w-full  lg:px-24 lg:py-20" id="about">
       <h1 className="text-center text-xl  text-brandPrimary font-bold uppercase tracking-tight">
       About Us
      </h1>
      <p className="text-center text-2xl font-thin mb-8">
       Who We Are?
      </p>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="max-w-xl mb-6">
            <p className="text-md opacity-70  text-gray-500 md:text-md">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of typeand. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of typeand
            </p>
            <br />
            <p className="text-md opacity-70  text-gray-500 md:text-md">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of typeand.
            </p>
            <br />
            <p className="text-md opacity-70  text-gray-500 md:text-md">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of typeand. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="px-1">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="https://i.pinimg.com/736x/c7/56/32/c75632d0c258e13f892c792608647abc.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="https://media.istockphoto.com/id/1180295538/photo/female-surgeon-in-operation-room-with-reflection-in-glasses.jpg?s=612x612&w=0&k=20&c=zg7AHeDnLcO0I0NPP1sg0tqbUG6D-qPGl30-HCpXu-U="
              alt=""
            />

            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="https://img.freepik.com/premium-photo/surgeons-are-operating-team-male-female-doctors-during-operation-doctors-are-strapped-operating-room_124865-10342.jpg?w=360"
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="https://img.freepik.com/premium-photo/group-doctors-standing-front-hospital-room_889227-23144.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
