import {sanityClient} from "../../lib/sanity";
import indexer from 'sanity-algolia';
import {searchClient, GEOPOINTS_PROJECTION} from "../../lib/algolia";




export default async function post(req, res) {

    if (req.headers['content-type'] !== 'application/json') {
        res.status(400)
        res.json({message: 'Bad request'})
        return
    }

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
    return await sanityAlgolia
        .webhookSync(sanityClient, req.body)
        .then(() => (res.status(200).send("Success!")))
        .then(() => (res.status(500).send("Something went wrong")))
        .catch((e) => (console.error(e)));
}