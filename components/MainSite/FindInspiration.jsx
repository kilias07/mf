import Image from "next/image";

export const FindInspiration = () => {
    return (
        <>
            <div className="flex justify-center flex-wrap -mt-10">
                <div className="w-[30rem]">

                    <div className="w-max-[30rem] h-[30rem] relative ml-6 mr-20">
                        <Image src="/assets/images/M8015.webp"
                               alt="drugie zdjecie kreatora wnętrz"
                               layout="fill"
                               objectFit="contain"
                        />
                        <div className="w-max-[30rem] h-[30rem] relative -top-20 left-16">
                            <Image src="/assets/images/ML1008.webp"
                                   alt="drugie zdjecie kreatora wnętrz"
                                   layout="fill"
                                   objectFit="contain"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-[45rem] mx-2 sm:ml-24">
                    <h3 className="text-xl font-sans font-semibold mt-4">POSZUKAJ INSPIRACJI W KREATORZE WNĘTRZ</h3>
                    <p className="text-lg font-light mt-4">Panele podłogowe laminowane idealnie sprawdzą się w salonie,
                        sypialni, a nawet w kuchni. Dostępne w kilku liniach stylistycznych oraz
                        w różnorodnej kolorystyce pozwolą na dopasowanie ich do każdego
                        pomieszczenia.
                    </p>
                    <p className="text-lg font-light mt-4 mb-12">
                        Wśród naszych paneli podłogowych My Floor znajdziesz zarówno
                        propozycje do klasycznie wykończonych pomieszczeń, jak i tych
                        urządzonych w nowoczesnym, eleganckim stylu. Wybierz panele, które
                        będą idealnie pasować do wystroju. Skorzystaj z naszych oryginalnych
                        wzorów i stwórz niepowtarzalny wystrój w swoim mieszkaniu.</p>
                    <a href="http://floorstudio.esignserver1.com/my-floor/gallery.do"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="uppercase text-base bg-blue-600 px-10 py-3 text-slate-200">
                        szukaj inspiracji
                    </a>
                </div>
            </div>
            <p className="text-center mx-auto my-12 text-xl w-9/12 font-sans font-light">Nasza podłoga składa się w 90% z drewna
                pozyskiwanego ze zrównoważonych przerzedzonych lasów. W przeciwieństwie do produktów z PVC nie zawierają
                plastyfikatorów i są nieszkodliwe dla zdrowia w każdym środowisku domowym. Celem systemu zarządzania
                środowiskiem My Floor jest efektywność ekologiczna – przez cały cykl życia każdego produktu, który
                opuszcza fabrykę. dlatego zostaliśmy nagrodzeni blue angel.</p>
        </>
    );
};

