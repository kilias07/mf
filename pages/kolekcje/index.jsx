import {sanityClient, urlFor} from "../../lib/sanity";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";

const collectionQuery = `*[_type == "collection"]{
        _id,
        title,
        slug,
        description,
        featuredImage,
}`;

const Collections = ({collectionsProducts}) => {
    const router = useRouter();

    if(!collectionsProducts){
        return <div>Loading...</div>
    }
    return (
        <div className="max-w-screen-3xl mx-auto flex flex-wrap my-32 justify-center">
            {collectionsProducts?.length > 0 && collectionsProducts.map(collection => (
                <div key={collection._id} className="w-80 h-80 m-5 relative">
                    <Link href={`/kolekcje/${collection.slug.current}`}
                          passHref>
                        <a>
                            <Image src={`${urlFor(collection.featuredImage)}`}
                                   alt={collection.title}
                                   layout="fill"
                                   objectFit="cover"
                            />
                            <div className="z-10 top-[276px] relative text-slate-200 bg-gray-600 bg-opacity-70 py-2">
                                <p className="text-center text-xl uppercase">
                                    {collection.title}
                                </p>
                            </div>
                        </a>
                    </Link>
                </div>
            ))}
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