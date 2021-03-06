import {sanityClient, urlFor} from "../../lib/sanity";
import Link from "next/link";
import {useRouter} from "next/router";
import Image from "next/image";
import {Path} from "../../components/Path";


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
    const router = useRouter();

    if(router.isFallback){
        return <div>Loading...</div>
    }
    return (
        <div className="mx-auto max-w-screen-3xl">
            <Path pathTitle="blog"/>

            {posts.map((post, i) => (
                <div className="mx-4 my-6 md:mx-32" key={post._id}>
                    <Link href={`/blog/${post.slug.current}`}>
                        <a>
                            <div key={post._id} className={`rounded shadow-lg md:flex ${i%2 && 'flex-row-reverse'}`}>
                                <div className="relative w-full md:w-80 h-56">
                                    <Image
                                        src={`${urlFor(post.featuredImage).maxWidth(735).url()}`}
                                        alt={post.title}
                                        layout="fill"
                                        objectFit="cover"
                                        objectPosition="center bottom"
                                    />
                                </div>
                                <div className="md:px-6 px-3 py-4 md:w-7/12 flex-grow">
                                    <div className="font-bold text-xl mb-2 font-sans">{post.title}</div>
                                    <p className="text-gray-700 text-base text-overflow">
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
