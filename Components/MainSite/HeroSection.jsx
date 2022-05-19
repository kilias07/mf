import Link from "next/link";

export const HeroSection = () => {
    return (
        <div>
            <div className="hero-section lg:h-[56rem]">
                <div className="text-slate-200 flex justify-center flex-col items-center h-full text-center">
                    <h2 className="w-96 mb-5 mt-40">Doskonałość i standard podłóg laminowanych</h2>
                    <p className="w-96 text-lg font-light">eleganckie wzornictwo i wygląd prawdziwego drewna.</p>
                    <Link href="/kolekcje">
                        <a className="mt-52 uppercase text-base bg-blue-600 px-10 py-3">zobacz całą kolekcję</a>
                    </Link>
                </div>
            </div>
            <p className="text-lg text-center w-8/12 mx-auto my-12">Dzięki niesamowitemu realizmowi, autentycznym fakturom drewna i żywym kolorom, na nowo odkryliśmy podłogę laminowaną. Najnowsza technologia sprawia, że nasze podłogi są odporne na uszkodzenia, zarysowania i plamy oraz nie wymagają dodatkowej konserwacji. Idealnie nadają się do ogrzewania podłogowego.</p>
        </div>
    );
};

