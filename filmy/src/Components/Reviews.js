import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { reviewsRef, db } from "../firebase/firebase";
import {
  addDoc,
  doc,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { TailSpin, ThreeDots } from "react-loader-spinner";

import swal from "sweetalert";

const Reviews = (id, prevRating, userRated) => {
  const [Rating, setRating] = useState(0);
  const [Loading, setLoading] = useState(false);
  const [reviewsLoading, setReviewsLoading] = useState(true);

  const [data, setData] = useState([]);
  const [form, setForm] = useState("");
  const sendreview = async () => {
    setLoading(true);
    try {
      await addDoc(reviewsRef, {
        movieid: id | null,
        name: "hammad" || null,
        rating: Rating || null,
        though: form || null,
        timestamp: new Date().getDate || null,
      });
      const docRef = doc(db, "movies", id);
      await updateDoc(docRef, {
        rating: prevRating + Rating,
        rated: userRated + 1,
      });
      setRating(0);
      setForm("");
      swal({
        title: "Review Sent",
        icon: "Sucess",
        button: false,
        timer: 3000,
      });
    } catch (error) {
      swal({
        title: error.message,
        icon: "Sucess",
        button: false,
        timer: 3000,
      });
    }
    setLoading(false);
  };
  useEffect(() => {
    async function getData() {
      setReviewsLoading(true);
      let quer = query(reviewsRef, where("movieid", "==", "id"));
      // console.log(quer);
      const querySnapshot = await getDocs(quer);
      querySnapshot.forEach((doc) => {
        setData((prev) => [...prev, doc.data()]);
      });

      setReviewsLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="mt-4 w-full border-t-2 border-gray-700">
      <ReactStars
        size={30}
        half={true}
        value={Rating}
        onChange={(rate) => setRating(rate)}
      />

      <input
        value={form}
        onChange={(e) => setForm(e.target.value)}
        className="w-full p-2 outline-none bg-stone-800"
        placeholder="Share Your Opinion"
      />
      <button
        onClick={sendreview}
        className=" w-full p-1 bg-red-500 mt-2 flex justify-center hover:bg-red-800"
      >
        {Loading ? <TailSpin height={25} color="white" /> : "Share"}
      </button>
      {reviewsLoading ? (
        <div className="flex justify-center mt-3 h-[2px]">
          <ThreeDots height={15} color="white" />
        </div>
      ) : (
        <div>
          {data.map((e, i) => {
            return <div key={i}>{e.though}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default Reviews;
