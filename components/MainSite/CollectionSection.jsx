import Link from "next/link";
import {urlFor} from "../../lib/sanity";
import Image from "next/image";

export const CollectionSection = ({collections}) => {

    return (
        <div className="flex flex-wrap mb-56 justify-center">

            {collections?.length > 0 && collections.map(collection => (
                <div key={collection._id} className="w-80 h-80 m-5 relative">
                    <Link href={`/kolekcje/${collection.slug.current}`}
                          passHref>
                        <a>
                            <Image src={`${urlFor(collection.featuredImage).url()}`}
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
