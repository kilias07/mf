import Link from 'next/link';
import Image from "next/image";


export const BoxReference = ({exception}) => {

    const boxes = [
        {
            title: 'akcesoria',
            slug: '/akcesoria',
            path: 'ktex1',
        },
        {
            title: 'zamów próbkę',
            slug: '/zamow-probke',
            path: 'probka',
        },
        {
            title: 'lokalizator salonów',
            slug: '/znajdz-salon',
            path: 'lokalizator_salonow',
        },
        {
            title: 'struktury',
            slug: '/struktury',
            path: 'struktury',
        }
    ];

    const filteredBoxes = boxes.filter(box => box.title !== exception);

    return (
        <div className="flex flex-wrap justify-center">
            {filteredBoxes.map(box => (
                <div key={box.title} className={`w-96 h-80 mx-[2rem] my-5 relative`}>
                    <Link href={`${box.slug}`}
                          passHref>
                        <a>
                            <div className="relative w-full h-full">
                                <Image src={`/assets/boxReference/${box.path}.webp`}
                                       alt={box.title}
                                       layout="fill"
                                       objectFit="cover"
                                />
                            </div>
                            <div className="-top-11 relative text-slate-200 bg-gray-800 bg-opacity-50 py-2">
                                <p className="text-center text-xl font-light uppercase">
                                    {box.title}
                                </p>
                            </div>
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    );
};
