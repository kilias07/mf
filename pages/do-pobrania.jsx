import {sanityClient} from "../lib/sanity";
import {AiOutlineDownload} from "react-icons/ai"
import {getFile} from "@sanity/asset-utils";
import {Path} from "../components/Path";

const downloadQuery = `
*[_type == "download"]{
  title,
  _id,
  files
}`

export async function getStaticProps() {
    const files = await sanityClient.fetch(downloadQuery);
    return {
        props: {files}
    }
}

const download = ({files}) => {

    const catalog = files.filter(file => file.title === "Katalog MF");
    return (
        <div>
            <Path pathTitle="do pobrania"/>
            <div className="container mx-auto mt-10">
                {files.map(file => (
                    <div key={file._id} className="my-3">
                        <a href={getFile(file.files.asset, sanityClient.config()).asset.url}
                           className="hover:text-grayText"
                           target="_blank"
                           rel="noreferrer">
                            <AiOutlineDownload className="text-6xl inline-block"/>
                            <span className="ml-5">{file.title}</span>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default download;
