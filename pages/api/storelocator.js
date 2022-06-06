import {sanityClient} from "../../lib/sanity";
import indexer from 'sanity-algolia';
import {searchClient, GEOPOINTS_PROJECTION} from "../../lib/algolia";




export default async function post(req, res) {


    const index = searchClient.initIndex('store-locator');

    const sanityAlgolia = indexer(
        {
            geoPoints: {
                index,
                projection: GEOPOINTS_PROJECTION
            },
        },
        (document) => document,
    )
    return sanityAlgolia
        .webhookSync(sanityClient, req.body)
        .then(() => (res.status(200).send("Success!")))
        .then(() => (res.status(500).send()))
        .catch(e => console.error(e))
}