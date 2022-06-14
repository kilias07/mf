import {sanityClient} from "../../../../lib/sanity";
import {ProductGallery} from "../../../../components/Product/ProductGallery";
import {ProductInfo} from "../../../../components/Product/ProductInfo";
import {BoxReference} from "../../../../components/Product/BoxRefernece";
import {useRouter} from "next/router";
import Link from "next/link";
import {LogosSection} from "../../../../components/MainSite/LogosSection";

const certificateQuery = `*[_type == 'certifcateLogo']{
    _id,
    title,
    featuredImage
}`;

const ProductSlug = ({productData, certificateLogos}) => {
    const collectionName = productData.collection.title
    const router = useRouter();
    const {query: path} = router;
    const {gallery} = productData

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div className="mx-auto">
            <div className="bg-grayDarker py-6 px-12 text-2xl">
                <p className="max-w-screen-3xl mx-auto uppercase text-zinc-100">kolekcja {collectionName}</p>
            </div>
            <div className="max-w-screen-3xl mx-auto text-grayText text-2xl font-extralight	px-12 my-6">
                <Link href="/"><a className="capitalize">strona główna/</a></Link>
                <Link href="/kolekcje"><a className="capitalize">kolekcje/</a></Link>
                <Link href={`/kolekcje/${path.slug}`}><a className="capitalize">{collectionName}</a></Link>
            </div>
            <div className="flex justify-center flex-wrap max-w-screen-3xl mx-auto">
                <ProductGallery gallery={gallery}/>
                <ProductInfo productInfo={productData}/>
            </div>
            <div className="my-10">
                <BoxReference exception="struktury"/>
            </div>

            <LogosSection logos={certificateLogos}/>
        </div>
    );
};

export default ProductSlug;


export async function getStaticPaths() {
    const products = await sanityClient.fetch(
        `*[_type == "products" && defined(slug.current)] {
                "params": {
                        "product": slug.current,
                         "slug" :collection->slug.current
                    },
        }`
    );

    return {
        paths: products,
        fallback: false,
    }
}


export async function getStaticProps({params}) {
    const {product: slug} = params;
    const productQuery = `*[_type == "products" && slug.current == $slug][0]{
    code,
    title,
    featuredImage,
    _id,
    href,
    gallery,
    description,
    collection->
    }`;

    const certificateLogos = await sanityClient.fetch(certificateQuery);
    const productData = await sanityClient.fetch(productQuery, {slug});
    return {
        props: {productData, certificateLogos}
    }
}