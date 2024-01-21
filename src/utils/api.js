import { createClient } from "contentful";

const client = createClient({
  accessToken: process.env.CONTENTFUL_DELIVERY_API_KEY,
  space: process.env.CONTENTFUL_SPACE_ID,
  host: "cdn.contentful.com",
});

export async function getSoups() {
  let res;
  try {
    res = await client.getEntry("6gvl2wdvgjmtdf0p9En36F");
  } catch (error) {
    throw new Error(`Failed to fetch data`);
  }

  return res.fields;
}

export async function getCarouselImages() {
  let res;
  try {
    res = await client.getEntry("1qX659JlgH2j79yxMprVxU");
  } catch (error) {
    throw new Error(`Failed to fetch data`);
  }
  // console.log(res.fields.images);
  return res.fields.images;
}
