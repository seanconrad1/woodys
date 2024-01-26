import { createClient } from "contentful";

const client = createClient({
  accessToken: process.env.CONTENTFUL_DELIVERY_API_KEY,
  space: process.env.CONTENTFUL_SPACE_ID,
  host: "cdn.contentful.com",
});

export async function getSoups() {
  const contentType = "weeklySoups";
  let res;
  try {
    res = await client.getEntries({
      content_type: contentType,
      include: 4, // The number of nested CMS entries to include
    });
  } catch (error) {
    throw new Error(`Failed to fetch data`);
  }
  return res.items;
}

export async function getSoupPageImage() {
  const contentType = "soupsPageImage";
  let res;
  try {
    res = await client.getEntries({
      content_type: contentType,
      include: 1, // The number of nested CMS entries to include
    });
  } catch (error) {
    throw new Error(`Failed to fetch data`);
  }
  return res.items[0].fields
}

export async function getCarouselImages() {
  let res;
  try {
    res = await client.getEntry("1qX659JlgH2j79yxMprVxU");
  } catch (error) {
    throw new Error(`Failed to fetch data`);
  }
  return res.fields.images;
}

export async function getAddressAndPhone() {
  let res;
  try {
    res = await client.getEntry("2CcCKNEoGU9R2Hvkb6bL4");
  } catch (error) {
    throw new Error(`Failed to fetch data`);
  }
  return res.fields;
}

export async function getBlurbs() {
  const contentType = "blurb";
  let res;
  try {
    res = await client.getEntries({
      content_type: contentType,
      include: 3, // The number of nested CMS entries to include
    });
  } catch (error) {
    throw new Error(`Failed to fetch data`);
  }
  return res.items;
}


export async function getFoodCards() {
  const contentType = "foodCard";
  let res;
  try {
    res = await client.getEntries({
      content_type: contentType,
      include: 3, // The number of nested CMS entries to include
    });
  } catch (error) {
    throw new Error(`Failed to fetch data`);
  }
  return res.items;
}


export async function getAboutUs() {
  let res;
  try {
    res = await client.getEntry("2NHDnekvClmuKVFjGQZxYI");
  } catch (error) {
    throw new Error(`Failed to fetch data`);
  }
  return res.fields
}
