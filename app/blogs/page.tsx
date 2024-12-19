"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { unstable_noStore as noStore } from "next/cache";

export default function BlogSelection() {
  noStore();
  useEffect(() => {
    document.title = "Game Selection | VRealm Games";
    async function fetchData() {
      try {
        const response = await fetch("/api/all");
        const posts = await response.json();
        console.log(posts);
        setblogpost(posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const [blogpost, setblogpost] = useState([]);

  return (
    <div className="container z-50 mx-auto py-8 relative">
         <div className="fixed inset-0 w-full h-full   -z-50">
        <Image
          src="/image.png"  // Replace with your actual image path
          alt="Background VR gaming"
          fill
          priority
          className="object-cover"
          quality={100}
        />

        {/* Overlay to ensure text readability */}
      </div>
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-amber-300 bg-clip-text text-transparent">
        Explore Our Game Collection
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogpost.map((post) => (
          <Card
            key={post.id}
            className="hover:shadow-amber-500/20 transition-all duration-300 bg-black border border-amber-900/50 group"
          >
            <CardHeader>
              <CardTitle className="text-amber-400 group-hover:text-amber-300 transition-colors">
                {post?.title}
              </CardTitle>
              <CardDescription className="text-amber-200/80">
                {post?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href={`/blog/${post?.id}`}
                className="inline-block bg-amber-600 text-black font-semibold px-4 py-2 rounded-md hover:bg-amber-700 transition-colors duration-200"
              >
                Learn More
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}