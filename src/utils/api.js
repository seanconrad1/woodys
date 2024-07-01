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

  const predefinedOrder = ["Salads", "Soups", "Sandwiches", "Wheat Wraps", "Lunchboxes", "Catering"];

  const objOfItems = () => {
    const obj = {};
    // Sort the items by date created
    res.items.forEach((item) => {
      if (obj[item.fields.category]) {
        obj[item.fields.category].push(item);
      } else {
        obj[item.fields.category] = [item];
      }
    });
    // Convert the obj into an array of objects
    return Object.keys(obj).map(category => ({
      category: category,
      items: obj[category]
    }));
  };

  const objects = objOfItems();

  // objects.sort((a, b) => {
  //   const indexA = predefinedOrder.indexOf(a.category);
  //   const indexB = predefinedOrder.indexOf(b.category);
  
  //   if (indexA === -1 && indexB === -1) return 0; // Both categories are not in the predefined order, keep their relative order
  //   if (indexA === -1) return 1; // Only A is not in the predefined order, place A after B
  //   if (indexB === -1) return -1; // Only B is not in the predefined order, place B after A
  
  //   return indexA - indexB; // Both categories are in the predefined order, sort them according to the predefined order
  // });


  // Return an array of objects with the category as the key and the items as the value.
  return objects
}

export async function getCateringInfo() {
  let res;
  try {
    res = await client.getEntry("2NHDnekvClmuKVFjGQZxYI");
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
