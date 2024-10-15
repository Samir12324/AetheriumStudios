"use client";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import sm from "./sm.jpg";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { CalendarDays, MessageCircle, ThumbsUp } from "lucide-react";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState([]);
  const [comment, setComment] = useState("");

  async function postComment() {
    console.log("Hithesh");
    const data = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({
        comment: comment,
        postid: params.slug,
        author: post,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data);
  }
  useEffect(() => {
    async function loadComments() {
      const response = await fetch(`/api/sblog/${params.slug}`);
      const data = await response.json();
      console.log(data);
      setPost(data);
    }
    loadComments();
  }, [params.slug]);
  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={post?.author?.image} alt="Jane Doe" />
            <AvatarFallback>{post?.author?.name}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{post?.author?.name}</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarDays className="mr-1 h-4 w-4" />
              <time dateTime="2024-03-20">{post?.createdAt}</time>
            </div>
          </div>
        </div>
      </header>
      <Image
        src={sm}
        alt="Web Development Trends"
        width={800}
        height={400}
        className="rounded-lg mb-8 object-cover"
      />
      <div className="prose prose-lg max-w-none">{post.content}</div>
      <Separator className="my-8" />
      <section aria-labelledby="comments-heading">
        <h2 id="comments-heading" className="text-2xl font-bold mb-4">
          Comments (not working default data)
        </h2>
        <div className="space-y-4">
          <form className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Leave a comment</h3>
            <Textarea
              placeholder="Type your comment here."
              onChange={(event) => {
                console.log(event.target.value);
                setComment(event.target.value);
              }}
              className="mb-4"
            />
            <Button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                if (comment === "") {
                  return;
                }
                postComment();
              }}
            >
              Post Comment
            </Button>
          </form>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar>
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="Alex Johnson"
                />
                <AvatarFallback>AJ</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">Alex Johnson</p>
                <p className="text-sm text-muted-foreground">March 21, 2024</p>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Great article! I'm particularly excited about the potential of
                WebAssembly. It's going to open up so many possibilities for web
                applications.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm">
                <ThumbsUp className="mr-2 h-4 w-4" />
                Like
              </Button>
              <Button variant="ghost" size="sm">
                <MessageCircle className="mr-2 h-4 w-4" />
                Reply
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar>
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="Sarah Lee"
                />
                <AvatarFallback>SL</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">Sarah Lee</p>
                <p className="text-sm text-muted-foreground">March 22, 2024</p>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                I'm curious about how AI-powered development tools will impact
                the job market for developers. Do you think it will create more
                opportunities or potentially replace some roles?
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm">
                <ThumbsUp className="mr-2 h-4 w-4" />
                Like
              </Button>
              <Button variant="ghost" size="sm">
                <MessageCircle className="mr-2 h-4 w-4" />
                Reply
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </article>
  );
}
