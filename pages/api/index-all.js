import {sanityClient} from "../../lib/sanity";
import {searchClient, QUERY} from "../../lib/algolia";


export default async function get(req, res) {
    const geoPoints = await sanityClient.fetch(QUERY);
    const index = searchClient.initIndex('store-locator');
    try {
        console.time(`Saving ${geoPoints.length} documents to index:`);
        await index.saveObjects(geoPoints);
        console.timeEnd(`Saving ${geoPoints.length} documents to index:`)
        return (
            res.status(200)
                .send('Success!')
        )
    } catch (error) {
        console.error(error)
        return (
            res.status(500)
                .send(error)
        )
    }
}