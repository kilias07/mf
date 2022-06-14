import {sanityClient, urlFor} from "../../lib/sanity";
import {Path} from "../../components/Path";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";

const usageQuery = `*[_type == "usage"]{
title,
slug,
_id,
shortDescription,
featuredImage
}`;


export async function getStaticProps() {
    const posts = await sanityClient.fetch(usageQuery);
    return {
        props: {posts}
    }
}

const Usage = ({posts}) => {
    const router = useRouter();

    if(router.isFallback){
        return <div>Loading...</div>
    }
    return (
        <div>
            <Path pathTitle={router.pathname.slice(1)}/>
            {posts.map((post, i) => (
                <div className="mx-4 my-6 md:mx-32" key={post._id}>
                    <Link href={`/zastosowanie/${post.slug.current}`}>
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

export default Usage;
