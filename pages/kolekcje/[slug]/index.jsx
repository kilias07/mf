import {sanityClient, urlFor} from "../../../lib/sanity";
import {useRouter} from 'next/router';
import Link from "next/link";
import Image from "next/image";


const CollectionSlug = ({products}) => {
    const router = useRouter();

    return (
        <div className="max-w-screen-3xl mx-auto flex flex-wrap my-32 justify-center">
            {products.map(product => (
                <div key={product._id} className="w-80 h-80 m-5">
                    <Link href={`${router.asPath}/${product.slug.current}/`}>
                        <a>
                                <Image src={`${urlFor(product.featuredImage).url()}`}
                                       alt={product.title}
                                       width="100%"
                                       height="100%"
                                       layout="responsive"
                                       objectFit="cover"/>
                                <div className="relative bottom-11 text-slate-200 bg-gray-600 bg-opacity-70 py-2">
                                    <p className="text-center text-xl uppercase">
                                        {product.title}
                                    </p>
                            </div>
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default CollectionSlug;

export async function getStaticPaths() {

    const paths = await sanityClient.fetch(`*[_type == "collection"]{
        "params": {
            "slug": slug.current
        }
    }`)
    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps({params}) {
    const {slug} = params;

    const productQuery = `*[_type == "products" && collection._ref in *[_type=="collection" && slug.current=='${slug}']._id && defined(slug.current)]{
    "params": {
    "slug": slug.current
        },
         _id,
         title,
         code,
         featuredImage,
         slug
    }
    `

    const products = await sanityClient.fetch(productQuery, {slug});
    return {
        props: {products}
    }
}
