import { createClient } from "contentful";
import moment from "moment";

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
  return res.items[0].fields;
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
  return res.fields;
}

export async function getMenuItems() {
  let contentType = "menuItem";
  let res;
  try {
    res = await client.getEntries({
      content_type: contentType,
    });
  } catch (error) {
    throw new Error(`Failed to fetch data`);
  }

  const sort = (array) => {
    // Sorts the items by date created.
    return array.sort((a, b) => {
      if (moment(a.sys.createdAt).isAfter(b.sys.createdAt)) {
        return 1;
      } else {
        return -1;
      }
    });
  };

  const soups = res.items.filter((item) => item.fields.category === "Soups");
  const salads = res.items.filter((item) => item.fields.category === "Salads");
  const sandwiches = res.items.filter(
    (item) => item.fields.category === "Sandwiches"
  );
  // const sides = res.items.filter((item) => item.fields.category === "Sides");
  // const drinks = res.items.filter((item) => item.fields.category === "Drinks");
  const catering = res.items.filter(
    (item) => item.fields.category === "Catering"
  );
  const wraps = res.items.filter(
    (item) => item.fields.category === "Wheat Wraps"
  );

  sort(soups)
  sort(salads)
  sort(sandwiches)
  sort(catering)
  sort(wraps)


  return [
    { Salads: salads },
    { Soups: soups },
    { Sandwiches: sandwiches },
    { Wraps: wraps },
    { Catering: catering },
  ];
}
