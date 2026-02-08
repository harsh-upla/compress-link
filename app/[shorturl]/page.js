import React from "react";
import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  const { shorturl } = await params;

    let client = await clientPromise;
  let db = client.db("compresslink");
  let collection = db.collection("url");

  let s = await collection.findOne({shorturl:shorturl})

  if(s){
    redirect(`${s.url}`)
  }
  else{
    redirect(`${process.env.NEXT_PUBLIC_URL}`)
  }
  return (
    <>
      <div className="bg-black">My Post: {shorturl}</div>
    </>
  );
}