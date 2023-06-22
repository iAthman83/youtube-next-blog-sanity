import Image from "next/image";

const BlogCard = () => {
  return (
    <div className="flex flex-col space-y-2 w-72 h-96 rounded overflow-hidden">
      <div>
        <Image
          src="/images/laptop-min.jpeg"
          alt="image"
          height={50}
          width={300}
        />
      </div>
      <div className="flex flex-row">
        <p className="font-semibold text-sm text-primary-brand">
          Abubakar Athman, 16 Jan 2023
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-bold">What is Wire Framing?</h1>
      </div>
      <div>
        <p className="line-clamp-2">
          This Blog is perfect if you have a blog idea and you want to share.
          Using its high-quality sections
        </p>
      </div>
      <div className="flex flex-row space-x-2">
        <p className="border border-primary-dark px-2 rounded-full">
          Technology
        </p>
        <p className="border border-primary-dark px-2 rounded-full">People</p>
      </div>
    </div>
  );
};

export default BlogCard;
