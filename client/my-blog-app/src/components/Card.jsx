import { Link } from "react-router-dom";
const Card = ({ post }) => {
    return (
        <div className=" hover:shadow-xl hover:border hover:translate-y-1 delay-75 duration-75 border-gray-300 p-4 w-full">
            <img
                src={post?.featuredImage}
                alt={post.title}
                className="w-full h-64 object-cover mb-6 shadow-sm object-center"
            />
            <span className="text-lg font-bold mb-4">{post.title.slice(0, 35)}...</span>
            <p className="mb-4">{post.content.slice(0, 85)}...</p>
            <div className="flex justify-between items-center my-4">
                <div className="flex gap-2 items-center">
                    <img src={post.author.avatar} alt={post.author.avatar} className="rounded-full w-8 h-8" />
                    <p className="font-semibold">{post.author.name}</p>
                </div>

                <div className="flex max-w-60 flex-wrap">
                    {post.tags.slice(0, 5).map((tag) => {
                        return <div className="p-2 text-xs font-semibold bg-blue-100 mx-1 my-1">
                            {tag}
                        </div>
                    })}
                </div>
            </div>

            <Link className="my-6 text-sm font-semibold border p-2 hover:bg-blue-100 delay-75 duration-75" to={`/post/${post._id}`}>
                Read More! →
            </Link>
        </div>
    )
}
export default Card