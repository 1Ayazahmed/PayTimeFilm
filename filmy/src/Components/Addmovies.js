import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { addDoc } from "firebase/firestore";
import { moviesRef } from "../firebase/firebase";
import swal from "sweetalert";
import AcUnitIcon from "@mui/icons-material/AcUnit";

// const swal = new SweetAlert2();
// import { Link } from "react-router-dom";

const Addmovies = () => {
  const [form, setForm] = useState({
    title: "",
    year: "",
    description: "",
    image: "",
  });

  const [Loading, setLoading] = useState(false);
  const addMovie = async () => {
    setLoading(true);
    try {
      await addDoc(moviesRef, form);
      swal({
        title: "Successfully Added",
        icon: "Sucess",
        button: false,
        timer: 3000,
      });
      setForm({
        title: "",
        year: "",
        description: "",
        image: "",
      });
    } catch (err) {
      swal({
        title: err,
        icon: "err",
        button: false,
        timer: 3000,
      });
    }
    setLoading(false);
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-col text-center w-full mb-4">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-200 underline decoration-red-500 underline-offset-8">
              Add Movie
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-200"
                  >
                    📝 Title:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.title}
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                    className="w-full bg-transparent rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  {/* <AcUnitIcon /> */}
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-200"
                  >
                    📆 Year:
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.year}
                    onChange={(e) => setForm({ ...form, year: e.target.value })}
                    className="w-full bg-transparent rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-200"
                  >
                    🖼 Image Link:
                  </label>
                  <input
                    id="message"
                    name="message"
                    value={form.image}
                    onChange={(e) =>
                      setForm({ ...form, image: e.target.value })
                    }
                    className="w-full bg-transparent rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 h-9 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-200"
                  >
                    📕 Description:
                  </label>
                  <input
                    id="message"
                    name="message"
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                    className="w-full bg-transparent rounded border border-gray-300 h-32 text-base outline-none text-gray-100 py-1 px-3 "
                  ></input>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  onClick={addMovie}
                  className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  {Loading ? <TailSpin height={25} color="white" /> : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Addmovies;
