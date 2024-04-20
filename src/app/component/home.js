"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=15"
        );
        setPosts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      {isLoading
        ? "Loading..."
        : posts.map((a) => (
            <div key={a.id}>
              <Link href={`./posts/${a.id}`}>{a.title}</Link>
            </div>
          ))}
    </>
  );
}
