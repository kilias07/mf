import {sanityClient, urlFor} from "../../lib/sanity";
import Link from "next/link";


const postsQuery = `*[_type == "posts"]{
  _id,
  title,
  description,
  shortDescription,
  featuredImage,
  slug
}`;

export async function getStaticProps() {
    const posts = await sanityClient.fetch(postsQuery);
    return {
        props: {posts}
    }
}

const Index = ({posts}) => {
    return (
        <div className="mx-auto max-w-screen-3xl">
            {posts.map(post => (
                <div className="mx-24 my-6" key={post._id}>
                    <Link href={`/blog/${post.slug.current}`}>
                        <a>
                            <div key={post._id} className="rounded shadow-lg md:flex full ">
                                <img className="w-full lg:h-52 min-h-52 md:w-5/12 xl:w-3/12 object-center object-cover"
                                     src={urlFor(post.featuredImage)}
                                    alt={post.title}
                                />
                                <div className="md:px-6 px-3 py-4 md:w-7/12">
                                    <div className="font-bold text-xl mb-2">{post.title}</div>
                                    <p className="text-gray-700 text-base">
                                        {post.shortDescription}
                                    </p>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Index;
