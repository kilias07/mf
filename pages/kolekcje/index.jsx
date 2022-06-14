import {sanityClient, urlFor} from "../../lib/sanity";
import Link from "next/link";
import Image from "next/image";
import {Path} from "../../components/Path";

const collectionQuery = `*[_type == "collection"]{
        _id,
        title,
        slug,
        description,
        featuredImage,
}`;

const Collections = ({collectionsProducts}) => {
    if (!collectionsProducts) {
        return <div>Loading...</div>
    }

    return (
        <div className="max-w-screen-3xl mx-auto">
            <Path pathTitle="kolekcje"/>
            <div className="flex flex-wrap my-32 justify-center">
                {collectionsProducts?.length > 0 && collectionsProducts.map(collection => (
                    <div key={collection._id} className="w-96 h-80 m-5 relative">
                        <Link href={`/kolekcje/${collection.slug.current}`}
                              passHref>
                            <a>
                                <Image src={`${urlFor(collection.featuredImage)}`}
                                       alt={collection.title}
                                       layout="fill"
                                       objectFit="cover"
                                />
                                <div
                                    className="top-[276px] relative text-slate-200 bg-gray-800 bg-opacity-50 py-2">
                                    <p className="text-center text-xl uppercase">
                                        {collection.title}
                                    </p>
                                </div>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Collections;


export async function getStaticProps() {
    const collectionsProducts = await sanityClient.fetch(collectionQuery);
    return {
        props: {collectionsProducts}
    }
}