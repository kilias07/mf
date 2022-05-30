import {urlFor} from "../../lib/sanity";
import Image from "next/image";

export const LogosSection = ({logos}) => {
    return (
        <div className="flex justify-center mb-10">
            {logos.map(logo => (
                <div className="mx-5" key={logo._id}>
                    <Image src={urlFor(logo.featuredImage).url()}
                           width="100px"
                           height="100px"
                           objectFit="contain"/>
                </div>
            ))}
        </div>
    );
};
