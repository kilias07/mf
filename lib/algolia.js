import algoliasearch from "algoliasearch";

export const QUERY = `*[_type == "geoPoints"]{
  "objectID":_id,
  _rev,
  title,
  "_geoloc": location{
  lat,
  lng
  },
  address[][0]{
    cityName,
    postalCode,
    streetName
  }
}`

export const GEOPOINTS_PROJECTION = `{
  "objectID":_id,
  _rev,
  title,
  "_geoloc":location{
    lat,
    lng
  },
  address[][0]{
    cityName,
    postalCode,
    streetName
  }
}`

const algoliaID = process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_KEY;
export const searchClient = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID, process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_KEY);