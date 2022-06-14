import Link from "next/link";
import Image from "next/image";
import {urlFor} from "../../lib/sanity";

export const HeroSection = ({content}) => {
    const {title, aditionalText, featuredImage: image} = content[0];
    return (
        <>
                <div className="h-[345px] sm:h-[414px] md:h-[552px] lg:h-[690px] xl:h-[828px] 2xl:h-[1036px]">
                    <div className="relative h-full">
                    <Image
                        src={`${urlFor(image)}`}
                        alt={title}
                        layout="fill"
                        priority
                        objectFit="contain"
                        objectPosition="top"
                    />
                    </div>
                    <div
                        className="relative bottom-[100%] xsm:bottom-[90%] sm:-inset-y-3/4 text-slate-200 flex justify-center flex-col items-center text-center">
                        <h2 className="w-52 lg:w-96 mb-5 lg:text-4xl text-lg">{title}</h2>
                        <p className="w-52 lg:w-96 lg:text-xl text-xs font-light">{aditionalText}</p>
                        <Link href="/kolekcje" passHref>
                            <a className="lg:mt-10 mt-5 uppercase lg:text-base text-xs bg-blue-600 lg:px-10 lg:py-3 px-5 py-2">zobacz całą
                                kolekcję</a>
                        </Link>
                    </div>
                </div>

            <p className="text-lg font-light text-center w-8/12 mx-auto my-12">Dzięki niesamowitemu realizmowi, autentycznym
                fakturom drewna i żywym kolorom, na nowo odkryliśmy podłogę laminowaną. Najnowsza technologia sprawia,
                że nasze podłogi są odporne na uszkodzenia, zarysowania i plamy oraz nie wymagają dodatkowej
                konserwacji. Idealnie nadają się do ogrzewania podłogowego.</p>
        </>
    );
};

