import {sanityClient, urlFor} from "../lib/sanity";
import {HeroSection} from "../Components/MainSite/HeroSection";
import {CollectionSection} from "../Components/MainSite/CollectionSection";
import {FindInspiration} from "../Components/MainSite/FindInspiration";
import {BlogSection} from "../Components/MainSite/BlogSection";


const collectionQuery = `*[_type == "collection"]{
        _id,
        title,
        description,
        featuredImage
}`;

const postsQuery = `*[_type == "posts"]{
  _id,
  title,
  description,
  featuredImage,
  slug
}`;


export default function Home({collections, posts}) {
    return (
        <div className="text-4xl max-w-screen-3xl mx-auto">
            <HeroSection/>
            <CollectionSection collections={collections}/>
            <FindInspiration />
            <BlogSection posts={posts} />
        </div>
    )
}

export async function getStaticProps() {
    const collections = await sanityClient.fetch(collectionQuery);
    const posts = await sanityClient.fetch(postsQuery);
    return {
        props: {collections, posts}
    }
}