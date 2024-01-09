// imports all assets from a folder and returns asset paths keyed to an object
// require.context() must be passed in
// example: importAssetsFromFolder(require.context('../../assets/img', false, /\.(png|jpe?g|svg)$/))
export const importAssetsFromFolder = r => {
	const images = {}
	r.keys().forEach(item => {
		images[item.replace('./', '')] = r(item)
	})
	return images
}

// removes file extension from filename
export function removeExtension(filename) {
	// Define a regular expression pattern to match the extension
	var pattern = /\.[^.]+$/;
	// Use replace() to replace the matched extension with an empty string
	var filenameWithoutExtension = filename.replace(pattern, '');
	return filenameWithoutExtension;
}

// removes file extension from filename
export function removeExtAndDashes(filename) {
	// Define a regular expression pattern to match the extension
	var pattern = /\.[^.]+$/;
	// Use replace() to replace the matched extension with an empty string
	var filenameWithoutExtension = filename.replace(pattern, '');
	var final = filenameWithoutExtension.replaceAll('-', ' ')
	return final;
}