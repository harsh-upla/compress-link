"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoCopyOutline, IoFlower } from "react-icons/io5";

const page = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState("");
  const [error, seterror] = useState("");

  const handleSubmit = async () => {
    if (!url) {
      seterror("please enter url !");
    } else if (url.length < 4 || !url.includes("http")) {
      seterror("please enter valiud url !");
    } else {
      seterror("");
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const a = await fetch("http://localhost:3000/api/generate", requestOptions);
    const res = await a.json();

    if (res.error == true) {
      alert(res.message);
      setshorturl("");
      return;
    }
    if (res.success == true) {
      setgenerated(`${process.env.NEXT_PUBLIC_URL}/${shorturl}`);
      alert("Link generated successfully");
      seturl("");
      setshorturl("");
    }

    // .then((response) => {
    //   response.json();
    // })
    // .then((result) => {
    //   result.json()
    //   setgenerated(`${process.env.NEXT_PUBLIC_URL}/${shorturl}`);
    //   alert(result);
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
  };

  const handleCopy = async () => {
    if (!generated) {
      alert("link field empty");
      return;
    }
    if (generated) {
      await navigator.clipboard.writeText(generated);
      alert("link copied successfully !!");
    } else {
      alert("link not copied");
    }
  };

  return (
    <div className="bg-[#03ddff28] min-h-[88.2vh]">
      <div className="bg-[#03ddff31] max-w-lg p-5 mx-auto mt-10">
        <h1 className="font-bold text-2xl mb-6 ">Generate your short URLs </h1>
        <div className="flex flex-col gap-4">
          <input
            className="bg-white text-black p-2 rounded-lg focus:outline-[#3fdaf1]"
            type="text"
            name="url"
            value={url}
            id=""
            placeholder="Enter your URL "
            onChange={(e) => {
              seturl(e.target.value);
            }}
          />
          <input
            className="bg-white text-black p-2 rounded-lg focus:outline-[#3fdaf1]"
            type="text"
            name="urlname"
            value={shorturl}
            id=""
            placeholder="Enter your preferred URL name"
            onChange={(e) => {
              setshorturl(e.target.value);
            }}
          />
          <span className="text-red-500 text-center">{error}</span>
          <button
            type="button"
            className="text-white mt-1 text-xl bg-linear-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base px-4 py-2.5 text-center leading-5 rounded-lg cursor-pointer"
            onClick={() => {
              handleSubmit();
            }}
          >
            Generate
          </button>
        </div>
        <div className="bg-white rounded-lg mt-3 p-4 flex justify-between">
          <code>
            your link : <Link href={`/${shorturl}`}>{generated ?? ""}</Link>
          </code>
          <div
            className="flex items-center justify-center cursor-pointer"
            onClick={() => {
              handleCopy();
            }}
          >
            <IoCopyOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
