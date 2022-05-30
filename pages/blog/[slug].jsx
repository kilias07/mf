import {sanityClient, urlFor} from "../../lib/sanity";
import {PortableText, PortableTextComponentsProvider,} from '@portabletext/react'

const postsQuery = `*[_type == "posts" && slug.current == $slug][0]{
        _id,
        title,
        description,
        featuredImage
}`;


const BlogSlug = ({post}) => {
    const components = {
        block: {
            h2: ({children}) => <h2 className="text-2xl my-3">{children}</h2>,
            normal: ({children}) => <p className="text-sm">{children}</p>
        }
    }
    return (
        <div className="max-w-screen-3xl mx-auto">
            <article className="container mb-6 px-5 mx-auto">
                <h1 className="text-4xl my-3 text-center">{post.title}</h1>
                <div>
                    <img src={urlFor(post.featuredImage)} alt={post.title} className="mb-5"/>
                </div>
                <PortableTextComponentsProvider components={components}>
                    <PortableText value={post.description}/>

                </PortableTextComponentsProvider>
            </article>
        </div>
    );
};

export default BlogSlug;

export async function getStaticPaths() {
    const paths = await sanityClient.fetch(
        `*[_type == "posts" && defined(slug.current)]{
        "params": {
               "slug": slug.current
            }
        }`
    )
    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps({params}) {
    const {slug} = params;
    const post = await sanityClient.fetch(postsQuery, {slug});
    return {
        props: {
            post
        }
    }
}
