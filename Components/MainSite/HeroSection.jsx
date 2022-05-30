import Link from "next/link";
import Image from "next/image";
import {urlFor} from "../../lib/sanity";

export const HeroSection = ({content}) => {
    const {title, aditionalText, featuredImage: image} = content[0];
    return (
        <>
                <div className="">
                    <Image
                        src={`${urlFor(image)}`}
                        alt={title}
                        width="1920"
                        height="1080"
                        layout="responsive"
                        objectFit="raw"/>
                    <div
                        className="relative z-10 bottom-[50vw] sm:bottom-[42vw] lg:bottom-[38vw] xl:bottom-[32vw] 2xl:bottom-[30rem] text-slate-200 flex justify-center flex-col items-center text-center">
                        <h2 className="w-52 lg:w-96 mb-5 lg:text-4xl text-lg">{title}</h2>
                        <p className="w-52 lg:w-96 lg:text-xl text-xs font-light">{aditionalText}</p>
                        <Link href="/kolekcje">
                            <a className="lg:mt-52 lg:mt-10 mt-5 uppercase lg:text-base text-xs bg-blue-600 lg:px-10 lg:py-3 px-5 py-2">zobacz całą
                                kolekcję</a>
                        </Link>
                    </div>
                </div>

            <p className="text-lg text-center w-8/12 mx-auto mb-12">Dzięki niesamowitemu realizmowi, autentycznym
                fakturom drewna i żywym kolorom, na nowo odkryliśmy podłogę laminowaną. Najnowsza technologia sprawia,
                że nasze podłogi są odporne na uszkodzenia, zarysowania i plamy oraz nie wymagają dodatkowej
                konserwacji. Idealnie nadają się do ogrzewania podłogowego.</p>
        </>
    );
};

