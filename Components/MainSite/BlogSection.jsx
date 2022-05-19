import Image from "next/image";
import {urlFor} from "../../lib/sanity";
import Link from "next/link";

export const BlogSection = ({posts}) => {
    return (
        <>
        <div className="mx-auto">
            <p>tu bedom  logotypy</p>
        </div>
        <div className="mx-auto flex flex-wrap justify-center">
            {posts.map(post => (
                <Link href={`blog/${post.slug.current}`} key={post._id}>
                    <a>
                        <div className="mx-3">
                            <Image src={urlFor(post.featuredImage).url()}
                                   width="300px"
                                   height="300px"
                                   objectFit="cover"/>
                            <p className="text-base">{post.title}</p>
                        </div>
                    </a>
                </Link>
            ))}
        </div>
        <div className="mx-auto">
            <p>tu będą sklepy</p>
        </div>
        </>
    );
};

