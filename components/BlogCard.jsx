import Image from "next/image";

const BlogCard = ({ postData }) => {
  console.log(postData);
  return (
    <div className="flex flex-col space-y-2 w-72 rounded overflow-hidden">
      <div>
        <Image src={postData.image} alt="image" height={50} width={300} />
      </div>
      <div className="flex flex-row">
        <p className="font-semibold text-sm text-primary-brand">
          {postData.author.name}, {Date(postData.publishedAt).substring(0, 10)}
        </p>
      </div>
      <div>
        <h1 className="text-xl font-bold">{postData.title}</h1>
      </div>
      <div>
        <p className="line-clamp-2">{postData.body}</p>
      </div>
      <div className="flex flex-row flex-wrap space-x-2">
        {postData.categories.map((category) => (
          <p
            key={category._id}
            className="border bg-primary-dark text-primary-bg py-1 px-2 text-xs rounded-full"
          >
            {category.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
