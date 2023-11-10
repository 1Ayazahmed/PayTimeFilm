import { getDocs, getData } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { moviesRef } from "../firebase/firebase";
import { Triangle } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Card = () => {
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);

      const _data = await getDocs(moviesRef);
      _data.forEach((doc) => {
        setData((prv) => [...prv, { ...doc.data(), id: doc.id }]);
      });

      setLoading(false);
    }
    getData();
    // console.log(getData());
  }, []);
  return (
    <>
      <div className="flex flex-wrap justify-between px-3 mt-2">
        {Loading ? (
          <div className="w-full flex justify-center items-center h-[600px]">
            <Triangle height={40} color="white" />
          </div>
        ) : (
          data.map((e, i) => {
            return (
              <Link key={i} to={`/detail/${e.id}`}>
                <div className=" card-background-color bg-black-1000 shadow-lg cursor-pointer mb-4 ">
                  <img
                    className="h-60 md:h-72 w-[200px] hover:border-solid border-2 hover:border-red-500 delay-150 hover:-translate-y-1 hover:scale-110 hover:mt-3 font-medium mt-5 transition-all duration-500"
                    src={e.image}
                    alt="img"
                  />
                  <h1 className="pt-2 text-gray-500 p-1">
                    Name:&nbsp;
                    <span className="text-slate-50">{e.title}</span>
                  </h1>

                  <h1 className="pt-2 text-gray-500 p-1">
                    Year:&nbsp;
                    <span className="text-slate-50">{e.year}</span>
                  </h1>
                  <h1 className="pt-2 text-gray-500 flex items-center p-1">
                    <span className="text-slate-50"> Raiting:&nbsp;</span>
                    <ReactStars
                      size={20}
                      half={true}
                      value={e.rating / e.rated}
                      edit={false}
                    />
                  </h1>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
export default Card;
