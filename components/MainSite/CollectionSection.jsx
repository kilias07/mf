import Link from "next/link";
import {urlFor} from "../../lib/sanity";
import Image from "next/image";

export const CollectionSection = ({collections}) => {

    return (
        <div className="flex flex-wrap mb-56 justify-center">

            {collections?.length > 0 && collections.map(collection => (
                <div key={collection._id} className="w-96 h-80 m-5 relative">
                    <Link href={`/kolekcje/${collection.slug.current}`}
                          passHref>
                        <a>
                            <div className="relative w-full h-full">
                            <Image src={`${urlFor(collection.featuredImage).url()}`}
                                   alt={collection.title}
                                   layout="fill"
                                   objectFit="cover"
                            />
                            </div>
                            <div className="-top-11 relative text-white bg-gray-800 bg-opacity-50 py-2">
                                <p className="text-center text-xl font-light uppercase">
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
