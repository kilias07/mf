import {LogosSection} from "../MainSite/LogosSection";
import {sanityClient} from "../../lib/sanity";



export const BoxReference = ({logos}) => {
    return (
        <>
            <div>
                tu będzie modal z 3 boxami
            </div>
            <LogosSection logos={logos}/>
        </>
    );
};
