import {QUERY, algolia} from './storelocator';
import {sanityClient} from "../../lib/sanity";


export default async function get(req, res) {
    const geoPoints = await sanityClient.fetch(QUERY);
    const index = algolia.initIndex('store-locator');
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