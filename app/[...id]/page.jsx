import { getPosts } from "@/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

const SingleBlogPage = async ({ params }) => {
  const posts = await getPosts();
  const postID = params.id[0];

  const singlePost = posts.find((post) => post._id === postID);

  return (
    <div className="flex flex-col lg:px-24 px-4 min-h-screen">
      <div className="w-full flex text-center justify-center items-center relative">
        <Image
          src={singlePost.image}
          width={600}
          height={200}
          alt={singlePost.title}
          className="backdrop-brightness-100"
        />
        <h1 className="absolute text-3xl text-primary-bg font-semibold stroke-1 stroke-primary-dark">
          {singlePost.title}
        </h1>
      </div>
      <PortableText value={singlePost.content} />
    </div>
  );
};

export default SingleBlogPage;
