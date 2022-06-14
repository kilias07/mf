import {sanityClient, urlFor} from "../../lib/sanity";
import Image from "next/image";
import {PortableText, PortableTextComponentsProvider} from "@portabletext/react";

const usageQuery = `*[_type == "usage" && slug.current == $slug][0]{
title,
_id,
description,
featuredImage
}`;

const slugUsage = ({post}) => {
    const components = {
        types: {
            image: ({value}) => (
                <div className="relative w-full h-96">
                    <Image src={urlFor(value.asset).url()}
                           layout="fill"
                           objectFit="cover"
                           alt={post.title}
                    />,
                </div>

            )
        },
        block: {
            h2: ({children}) => <h2 className="text-2xl my-3 font sans">{children}</h2>,
            normal: ({children}) => <p className="text-md font-sans">{children}</p>
        }
    }

    return (
        <div className="max-w-screen-3xl mx-auto">
            <article className="container mb-6 px-5 mx-auto">
                <h1 className="text-4xl my-5 text-center">{post?.title}</h1>
                <div className="relative w-full w-full h-[20rem] md:h-[32rem] xl:h-[40rem] mb-6">
                    <Image
                        src={`${urlFor(post.featuredImage).url()}`}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center bottom"/>
                </div>

                <PortableTextComponentsProvider components={components}>
                    <PortableText value={post.description}/>

                </PortableTextComponentsProvider>
            </article>
        </div>
    );
};

export default slugUsage;

export async function getStaticPaths() {
    const paths = await sanityClient.fetch(
        `*[_type == "usage" && defined(slug.current)]{
        "params": {
               "slug": slug.current
            }
        }`
    );
    return {
        paths,
        fallback: false,
    }
}


export async function getStaticProps({params}) {
    const {slug} = params;
    const post = await sanityClient.fetch(usageQuery, {slug});
    return {
        props: {
            post
        }
    }
}
