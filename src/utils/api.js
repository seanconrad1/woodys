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

export async function getBrandImageDesktop() {
  return client
    .getEntries({
      content_type: "brandImageDesktop",
    })
    .then(function (entries) {
      return entries.items[0].fields.image.fields.file.url;
    });
}

export async function getBrandImageMobile() {
  return client
    .getEntries({
      content_type: "brandImageMobile",
    })
    .then(function (entries) {
      return entries.items[0].fields.image.fields.file.url;
    });
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

  const predefinedOrder = {
    Salads: 0,
    Soups: 1,
    Sandwiches: 2,
    "Wheat Wraps": 3,
    Catering: 4,
    Lunchboxes: 5,
    Sides: 6,
    Beverages: 7,
  };

  const objOfItems = () => {
    const obj = {};

    // Sort by category
    res.items.forEach((item) => {
      if (obj[item.fields.category]) {
        obj[item.fields.category].push(item);
      } else {
        obj[item.fields.category] = [item];
      }
    });
    // Convert the obj into an array of objects
    return Object.keys(obj).map((category) => ({
      category: category,
      items: obj[category],
    }));
  };

  let objects = objOfItems();

  let arr = [];
  // Sorts the food categories by the predefined list
  objects.forEach((object, idx) => {
    Object.keys(predefinedOrder).forEach((item) => {
      if (object.category === item) {
        arr[predefinedOrder[item]] = object;
      }
    });
  });

  // Return an array of objects with the category as the key and the items as the value.
  return arr;
}

export async function getCateringInfo() {
  let res;
  try {
    res = await client.getEntry("3QlOJBpa9S8dRqmxdCXXXl");
  } catch (error) {
    throw new Error(`Failed to fetch data`);
  }
  return res.fields;
}

export async function getHours() {
  let res;
  try {
    res = await client.getEntry("3iEKTNqhhXdhWtjuj9W30i");
  } catch (error) {
    throw new Error(`Failed to fetch data`);
  }
  return res.fields;
}
