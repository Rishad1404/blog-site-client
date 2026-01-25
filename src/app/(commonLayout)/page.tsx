import BlogCard from "@/components/modules/homepage/BlogCard";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";
import coffee from "../../../public/images/coffee.jpg";
import Image from "next/image";

export default async function Home() {
  const { data } = await blogService.getBlogPosts(
    {
      isFeatured: false,
    },
    {
      cache: "no-store",
    },
  );

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 mt-8 h-[calc(100vh-80px)] flex flex-col justify-center">
          <div className="relative w-full h-96 mb-6">
            {/* <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=100"
            alt="Hero"
            className="w-full h-full object-cover rounded-lg"
          /> */}

            <Image
              src={coffee}
              fill
              priority
              alt="Hero"
              className="object-cover rounded-md"
            />
            {/* <Image
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=100"
            fill
            priority
            alt="Hero"
            className="object-cover rounded-md"
          /> */}
          </div>
          <h1 className={"text-5xl font-bold text-center mb-4"}>
            Welcome to Our Blog
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-3 max-w-7xl mx-auto gap-5">
        {data?.data?.map((post: BlogPost) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
