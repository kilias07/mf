import dynamic from "next/dynamic";

export default function Home() {
    const MapWithNoSSR = dynamic(() => import("../components/Map/Map"), {
        ssr: false
    });

    return (
        <main className="h-[50rem]">
            <div className="my-5 mx-10">
                <h1 className="mb-3 sm:mb-0w-full text-center text-3xl font-bold">ZNAJDŹ SALON MY FLOOR</h1>
                    <p className="w-full text-center">Skorzystaj z wyszukiwarki salonów by znaleźć partnera MyFloor w Twojej okolicy.</p>
            </div>
            <div id="map" className="w-full h-3/4 px-5 mb-10 max-w-screen-3xl mx-auto">
                <MapWithNoSSR/>
            </div>
        </main>
    );
}