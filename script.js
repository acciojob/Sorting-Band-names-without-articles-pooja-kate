//your code here
// Given array of band names
let bandNames = ['The Beatles', 'Led Zeppelin', 'Aerosmith', 'The Rolling Stones', 'Pink Floyd', 'Queen'];

// Function to remove articles and sort lexicographically
function sortAndFormatBands(bands) {
  const articles = ['a', 'an', 'the'];

  // Remove articles and sort
  const sortedBands = bands.sort((a, b) => {
    const aWords = a.split(' ');
    const bWords = b.split(' ');

    const aMain = aWords.filter(word => !articles.includes(word.toLowerCase()));
    const bMain = bWords.filter(word => !articles.includes(word.toLowerCase()));

    return aMain.join(' ').localeCompare(bMain.join(' '));
  });

  return sortedBands;
}

// Sort the band names
const sortedBands = sortAndFormatBands(bandNames);

// Get the UL element
const ulElement = document.getElementById('band');

// Populate the UL element with sorted band names
sortedBands.forEach(band => {
  const liElement = document.createElement('li');
  liElement.textContent = band;
  ulElement.appendChild(liElement);
});

