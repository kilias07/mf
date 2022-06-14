import Image from "next/image";
import {Path} from "../components/Path";

const Structures = () => {

    const structures = [
        {
            title: 'Podłogi Autentyczne',
            subtitle: "(AF, Authentic Floor)",
            description: "Naturalnie żywe struktury drewna.",
            path: 'af',
        },
        {
            title: 'Wood Grain',
            subtitle: "(WG)",
            description: "O rustykalnym tłoczeniu.",
            path: 'wg',
        },
        {
            title: 'Matowe Olejowane',
            subtitle: "(MO, Matt Oiled)",
            description: "Matowe powierzchnie olejowane.",
            path: 'mo',
        },
        {
            title: 'Struktura tłoczona',
            subtitle: "(ER, Registered Emboss)",
            description: "Wyjątkowy wygląd dzięki konsystencji między wzorem i tłoczeniem.",
            path: 'er',
        },
        {
            title: 'Matrix',
            subtitle: "(MX)",
            description: "Głęboka struktura tłoczenia z typowym dla drewna kontrastem pomiędzy połyskującymi i matowymi elementami.",
            path: 'mx',
        },
        {
            title: 'Wygląd zużycia',
            subtitle: "(UL, Used Look)",
            description: "Stylizowany by nosić oznaki zużycia.",
            path: 'ul',
        }
    ];
    return (
        <div>
            <Path pathTitle="Powierzchnie i struktury"/>
            <div>
                <div className="flex flex-wrap justify-center my-12">
                        {structures.map(structure => (
                            <div key={structure.title} className={`w-[300px] h-96 mx-[2rem] my-5 relative`}>
                                <div className="relative w-full h-[300px]">
                                    <Image src={`/assets/structures/${structure.path}.webp`}
                                           alt={structure.title}
                                           layout="fill"
                                           objectFit="cover"
                                    />
                                </div>
                                <div className="font-sans py-2">
                                    <h2 className="text-xl uppercase font-medium">
                                        {structure.title}
                                    </h2>
                                    <p className="font-light -mt-2">
                                        {structure.subtitle}
                                    </p>
                                    <p>
                                        {structure.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Structures;
