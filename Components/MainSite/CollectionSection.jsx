import Link from "next/link";
import {urlFor} from "../../lib/sanity";

export const CollectionSection = ({collections}) => {
    // console.log(collections)


    return (
        <div className="flex flex-wrap mb-56 justify-center">
            {collections?.length > 0 && collections.map(collection => (
                <div key={collection._id} className="lg:w-[32rem] h-96 m-5">
                    <Link href={`/kolekcje/${collection.title}`}>
                        <a>
                            <div style={{
                                background: `url(${urlFor(collection.featuredImage).url()}) no-repeat 30% 30%`
                            }}
                                 className="h-full">
                                <div className="relative top-[21rem] text-slate-200 bg-gray-600 bg-opacity-70 py-2">
                                    <p className="text-center text-2xl uppercase">
                                        {collection.title}
                                    </p>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    );
};
