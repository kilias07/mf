import algoliasearch from "algoliasearch";

export const QUERY = `*[_type == "geoPoints"]{
  "objectID":_id,
  _rev,
  title,
  location,
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
  location,
  address[][0]{
    cityName,
    postalCode,
    streetName
  }
}`


export const algolia = algoliasearch(
    process.env.ALGOLIA_APPLICATION_ID,
    process.env.ALGOLIA_ADMIN_KEY,
);