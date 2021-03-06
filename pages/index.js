import {sanityClient} from "../lib/sanity";
import {HeroSection} from "../components/MainSite/HeroSection";
import {CollectionSection} from "../components/MainSite/CollectionSection";
import {FindInspiration} from "../components/MainSite/FindInspiration";
import {BlogSection} from "../components/MainSite/BlogSection";
import {LogosSection} from "../components/MainSite/LogosSection";
import {BoxReference} from "../components/Product/BoxRefernece";
import Head from "next/head";


const collectionQuery = `*[_type == "collection"]{
        _id,
        title,
        slug,
        description,
        featuredImage
}`;

const postsQuery = `*[_type == "posts"]{
  _id,
  title,
  description,
  featuredImage,
  slug
}`;

const heroSectionQuery = `*[_type == "heroSection"]{
    title,
    aditionalText,
    featuredImage
}`;

const certificateQuery = `*[_type == 'certifcateLogo']{
    _id,
    title,
    featuredImage
}`;

const shopsQuery = `*[_type == 'shopsLogo']{
    _id,
    title,
    featuredImage
}`;


export default function Home({collections, posts, certificateLogos, shopsLogo, heroSection}) {
    return (
        <>
        <Head>
            <title>Main Page</title>
            <meta name="description" content="Strona MyFloor to najwyżej jakości paneli podłogowe sprzedawane na terenie całej Polski, zapraszamy zapoznania się z naszą ofertą"/>
        </Head>
        <div className="text-4xl max-w-screen-3xl mx-auto">
            <HeroSection content={heroSection}/>
            <CollectionSection collections={collections}/>
            <FindInspiration/>
            <BoxReference exception="lokalizator salonów"/>
            <LogosSection logos={certificateLogos}/>
            <BlogSection posts={posts}/>
            <LogosSection logos={shopsLogo}/>
        </div>
        </>
    )
}

export async function getStaticProps() {
    const collections = await sanityClient.fetch(collectionQuery);
    const posts = await sanityClient.fetch(postsQuery);
    const certificateLogos = await sanityClient.fetch(certificateQuery);
    const shopsLogo = await sanityClient.fetch(shopsQuery);
    const heroSection = await sanityClient.fetch(heroSectionQuery);
    return {
        props: {collections, posts, certificateLogos, shopsLogo, heroSection}
    }
}