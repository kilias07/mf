import {sanityClient} from "../../lib/sanity";
import Link from "next/link";


const postsQuery = `*[_type == "posts"]{
  _id,
  title,
  description,
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
        <div>
            {posts.map(post => (
                <Link href={`blog/${post.slug.current}`}>
                    <a>
                        <div key={post._id}>
                            <h1>{post.title}</h1>
                            <p></p>
                        </div>
                    </a>
                </Link>
            ))}
        </div>
    );
};

export default Index;
