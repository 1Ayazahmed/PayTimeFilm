import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { db } from "../firebase/firebase";
import { useParams } from "react-router-dom";
import { doc } from "firebase/firestore";
import { moviesRef } from "../firebase/firebase";
import { getDoc } from "firebase/firestore";
import { ThreeCircles } from "react-loader-spinner";
import Reviews from "./Reviews";
const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    year: "",
    image: "",
    description: "",
    rating: 0,
    rated: 0,
  });

  const [Loading, setLaoding] = useState(false);

  useEffect(() => {
    async function getData() {
      setLaoding(true);
      const _doc = doc(db, "movies", id);
      const _data = await getDoc(_doc);

      setData(_data.data());
      console.log(_data.data());

      setLaoding(false);
    }
    getData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start w-full justify-center mt-3 p-4">
      {Loading ? (
        <div className="h-[550px] flex w-full justify-center items-center">
          <ThreeCircles height={30} color="white" />
        </div>
      ) : (
        <>
          <img
            className="h-96  block md:sticky top-24"
            src={data.image}
            alt="prop"
          />
          <div className=" w-full md:ml-4 md:w-1/2">
            <h1 className="text-4xl font-bold  text-white">
              {" "}
              {data.title} <span className="text-xl">({data.year})</span>
            </h1>
            <ReactStars
              size={20}
              half={true}
              value={data.rating / data.rated}
              edit={false}
            />

            <p>{data.description}</p>
            <Reviews
              id={id}
              count={5}
              onChange={data.rating}
              size={24}
              color2={"#ffd700"}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
