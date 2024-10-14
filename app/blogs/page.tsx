"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { unstable_noStore as noStore } from "next/cache";
// Mock data for blog posts
//disabling data
export default function BlogSelection() {
  noStore();
  useEffect(() => {
    document.title = "Blog Selection | Next.js Blog";
    async function fetchData() {
      try {
        const response = await fetch("/api/all", {
          cache: "no-store",
        });

        const posts = await response.json(); // Parse the JSON response
        console.log(posts);
        setblogpost(posts); // Assuming setBlogPost is defined and used to update state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const [blogpost, setblogpost] = useState([]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Choose a Blog to Read</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogpost.map((post) => (
          <Card
            key={post.id}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <CardTitle>{post?.title}</CardTitle>
              <CardDescription>{post?.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href={`/blog/${post?.id}`}
                className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors duration-200"
              >
                Read More
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
