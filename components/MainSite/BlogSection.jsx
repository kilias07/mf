import Image from "next/image";
import {urlFor} from "../../lib/sanity";
import Link from "next/link";

export const BlogSection = ({posts}) => {
    return (
    <div className="flex flex-wrap justify-center">
        {posts.map(post => (
            <div key={post.title} className={`w-96 h-80 mx-5 my-5 relative`}>
                <Link href={`/blog/${post.slug.current}`}
                      passHref>
                    <a>
                        <div className="relative w-full h-full">
                            <Image src={urlFor(post.featuredImage).url()}
                                   alt={post.title}
                                   layout="fill"
                                   objectFit="cover"
                            />
                        </div>
                            <p className="text-xl font-light font-sans text-base">
                                {post.title}
                            </p>
                    </a>
                </Link>
            </div>
        ))}
    </div>
    );
};

