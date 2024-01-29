// imports all assets from a folder and returns asset paths keyed to an object
// require.context() must be passed in
// example: importAssetsFromFolder(require.context('../../assets/img', false, /\.(png|jpe?g|svg)$/))

export const importAssetsFromFolder = (r) => {
  const images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

// removes file extension from filename
export function removeExtension(filename) {
  // Define a regular expression pattern to match the extension
  var pattern = /\.[^.]+$/;
  // Use replace() to replace the matched extension with an empty string
  var filenameWithoutExtension = filename.replace(pattern, "");
  return filenameWithoutExtension;
}

// removes file extension from filename
export function removeExtAndDashes(filename) {
  console.log(filename);
  // Define a regular expression pattern to match the extension
  var pattern = /\.[^.]+$/;
  // Use replace() to replace the matched extension with an empty string
  var filenameWithoutExtension = filename.replace(pattern, "");
  var final = filenameWithoutExtension.replaceAll("-", " ");
  return final;
}

export function removeDashes(filename) {
  var final = filename.replaceAll("-", " ");
  return final;
}

export const returnLineBreaks = (text) => {
  if (text.includes("<br/>")) {
    // Map through each segment of text around line breaks added:
    return text.split("<br/>").map((innerText, i) => {
      const lineBreakStyle = {
        display: "block",
        minHeight: "24px",
      };
      // Return a span around each group of text:
      return (
        <span key={i} style={lineBreakStyle}>
          {innerText}
        </span>
      );
    });
  } else {
    // If there's no line breaks, just return the text as is:
    return text;
  }
};

export const truncateText = (text) => {
  const length = 45
  if(text?.length > length) {
    return text.substring(0, length) + "...";
  }else{
    return text
  }
};
