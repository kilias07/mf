import {sanityClient, urlFor} from "../../../lib/sanity";
import {useRouter} from 'next/router';
import Link from "next/link";
import Image from "next/image";
import {Path} from "../../../components/Path";


const CollectionSlug = ({products}) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>
    }
    return (
        <>
            <Path pathTitle={router.query.slug.replace('-','')}/>
            <div className="max-w-screen-3xl mx-auto flex flex-wrap my-32 justify-center">
                {products.map(product => (
                    <div key={product._id} className="w-80 h-80 m-5">
                        <Link href={`${router.asPath}/${product.slug.current}/`}>
                            <a>
                                <div className="relative w-full h-full">
                                    <Image src={`${urlFor(product.featuredImage)}`}
                                           alt={product.title}
                                           layout="fill"
                                           priority
                                           objectFit="cover"/>
                                </div>
                                <div className="-top-11 relative text-slate-200 bg-gray-800 bg-opacity-50 py-2">
                                    <p className="text-center text-xl font-light uppercase">
                                        {product.title}
                                    </p>
                                </div>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </>
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
