import {PortableText, PortableTextComponentsProvider,} from '@portabletext/react'
import Image from "next/image";


export const ProductInfo = ({productInfo}) => {

    const properties = productInfo.collection.properties[0];
    const components = {
        block: {
            h2: ({children}) => <h2 className="text-2xl my-3">{children}</h2>,
            normal: ({children}) => <p className="text-sm">{children}</p>,
        },
        listItem: {
            bullet: ({children}) => <li className="text-sm pl-1 pt-1"> - {children}</li>
        }
    }

    return (
        <div className="md:w-[40rem] md:p-3">
            <div className="text-grayText uppercase">
                <p className="text-3xl font-medium">{productInfo.title}</p>
                <p className="text-2xl font-light">{productInfo.code}</p>
            </div>
            <div className="my-4">
                <a href={productInfo.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="px-4 py-3 bg-blueButton uppercase text-white">
                    Pokaż w kreatorze wnętrz
                </a>
            </div>
            <div>
                <PortableTextComponentsProvider components={components}>
                    <PortableText value={productInfo.description}/>
                </PortableTextComponentsProvider>
            </div>
            <div className="px-2 mt-8 text-grayText">
                <p className="font-bold pb-1 text-lg">Dane techniczne</p>
                <hr/>
                <div className="flex justify-between py-1">
                    <span>Grubość</span>
                    <div className="w-44">
                        <span>{properties.dimensions.thickness} mm</span>
                    </div>
                </div>
                <hr/>
                <div className="flex justify-between py-1">
                    <span>Wymiary</span>
                    <div className="w-44">
                        <span>{properties.dimensions.length} mm x {properties.dimensions.width} mm</span>
                    </div>
                </div>
                <hr/>

                <div className="flex justify-between py-1">
                    <span>Klasa ścieralności</span>
                    <div className="w-44">
                        <span className="uppercase">{properties.abrassion.abrassion}</span>
                    </div>
                </div>
                <hr/>

                <div className="flex justify-between py-1">
                    <span>System montażu</span>
                    <div className="w-44">
                        <span>na click</span>
                    </div>
                </div>
                <hr/>

                <div className="flex justify-between py-1">
                    <span>Odporność na wodę</span>
                    <div className="w-44">
                        <span>{productInfo.collection.waterproof ? "tak" : "nie"}</span>
                    </div>
                </div>
                <hr/>

                <div className="flex justify-between py-1">
                    <span>Ilość elementów w opakowaniu</span>
                    <div className="w-44">
                        <span>{properties.package.numberOfBoards}</span>
                    </div>
                </div>
                <hr/>

                <div className="flex justify-between py-1">
                    <span>Opakowanie</span>
                    <div className="w-44">
                        <span>{properties.package.square} m2</span>
                    </div>
                </div>
                <hr/>

            </div>
            <div className="flex">
                <div className="w-24 h-24 mt-8">
                    <Image src="/assets/aquaProtect.png" height="200" width="179" layout="responsive"/>
                </div>
                <div className="w-24 h-24 mt-8">
                    <Image src="/assets/scratchProtect.png" height="200" width="179"/>
                </div>
                <div className="w-24 h-24 mt-8">
                    <Image src="/assets/swellProtect.png" height="200" width="179"/>
                </div>
            </div>
        </div>
    );
};
