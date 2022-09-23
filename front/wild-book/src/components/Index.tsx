import { NavLink } from "react-router-dom";

export default function Index() {
  return (
    <section>
      <div className="bg-black text-white h-screen pt-20">
        <div className=" flex flex-col md:flex-row items-center ">
          <div className="mt-12 mb-6 md:mb-0 md:mt-0 ml-0 lg:w-2/3  justify-center">
            <div className="h-48 flex flex-wrap content-center">
              <div>
                <img
                  className="inline-block mt-24 md:mt-0 p-8 md:p-0"
                  src="https://mymodernmet.com/wp/wp-content/uploads/2018/03/george-wheelhouse-animal-portraits-15.jpg"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            <h1 className="text-3xl md:text-5xl text-yellow-300 tracking-loose">
              Wild Code Cool
            </h1>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
              Apprendre en s'amusant
            </h2>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Découvrez les Wilders de l'année 2022-2023 et rentrez dans
              l'univers de la Wild Code Cool
            </p>
            <NavLink to="/home">
              <div className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                Entrer
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
