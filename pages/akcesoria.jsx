import {sanityClient} from "../lib/sanity";
import Image from "next/image";
import {Path} from "../components/Path";

// const accessoriesQuery = `*[_type == "accessories"]{
//   _id,
//   attributes,
//   genre,
//   poster,
//   subtitle,
//   title
// }`;

const accessories = ({accessories}) => {
    return (
        <>
            <Path pathTitle="akcesoria"/>
            <div className="font-sans mx-5 my-10">
                <h2 className="font-sans text-2xl font-medium">LISTWY PRZYPODŁOGOWE</h2>
                <p>Listwy Drewniane KTEX 1</p>
                <div className="relative w-96 h-80 my-5">
                    <Image src="/assets/boxReference/ktex1.webp"
                           alt="zdjęcie listew przypodłogowych"
                           layout="fill"
                           priority/>
                </div>
                <p className="font-light">Wymiary: 19 x 58 x 2400 mm</p>
                <p className="font-light">PAKIET 10 szt, Paleta 56 pakietów, pudełka po 10 Pakietów</p>
            </div>
            <div>

                <h2 className="font-sans text-2xl font-medium mx-5 ">Akceosria</h2>
                <div className="flex flex-wrap font-sans mx-5 mb-10">
                    <div className="m-3">
                        <div className="relative w-[300px] h-[300px] my-5">
                            <Image src="/assets/accessories/plyn.webp"
                                   alt="zdjęcie plynu"
                                   layout="fill"
                                   priority/>
                        </div>
                        <p className="font-light w-[300px]">Do szybkiego i łatwego montażu listew przypodłogowych.</p>
                    </div>

                    <div className="m-3">
                        <div className="relative w-[300px] h-[300px] my-5">
                            <Image src="/assets/accessories/klipsy.webp"
                                   alt="zdjęcie klipsy do listew"
                                   layout="fill"
                                   priority/>
                        </div>
                        <p className="font-light w-[300px]">Klipsy motażowe przeznaczone do listew przypodłogowych MY FLOOR.</p>
                    </div>
                </div>

                <h2 className="font-sans text-2xl font-medium mx-5 ">Podkłady Izolacyjne</h2>
                <div className="flex flex-wrap font-sans mx-5 mb-10">
                    <div className="m-3">
                        <div className="relative w-[300px] h-[300px] my-5">
                            <Image src="/assets/accessories/plyn.webp"
                                   alt="zdjęcie plynu"
                                   layout="fill"
                                   priority/>
                        </div>
                        <p className="font-light w-[300px]">Izolacja Premium Sound</p>
                        <p className="font-light w-[300px]">PU/minerały + Folia ALU</p>
                        <p className="font-light w-[300px]">Rolka o wym. 8500 x 1000 x 1,8 mm</p>
                        <p className="font-light w-[300px]">Rolka o wym. 8500 x 1000 x 1,8 mm</p>
                        <p className="font-light w-[300px]">1 opakowanie 1 rolka = 8,5 m2</p>
                        <p className="font-light w-[300px]">1 paleta 40 rolek</p>
                    </div>

                    <div className="m-3">
                        <div className="relative w-[300px] h-[300px] my-5">
                            <Image src="/assets/accessories/klipsy.webp"
                                   alt="zdjęcie klipsy do listew"
                                   layout="fill"
                                   priority/>
                        </div>
                        <p className="font-light w-[300px]">Izolacja Superior Sound</p>
                        <p className="font-light w-[300px]">PU/minerały + Folia ALU</p>
                        <p className="font-light w-[300px]">Rolka o wym. 5500 x 1000 x 2,8 mm</p>
                        <p className="font-light w-[300px]">1 opakowanie 1 rolka = 5,5 m2</p>
                        <p className="font-light w-[300px]">1 paleta 40 rolek</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default accessories;


// export async function getStaticProps() {
//     const accessories = await sanityClient.fetch(accessoriesQuery);
//     return {
//         props: {accessories}
//     }
// }
