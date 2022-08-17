export function parseInputString(queryText) {
  console.log(`test queryTest: ${JSON.stringify(queryText)}`);
  const temp = parseQueryString(queryText);
  console.log(`lilly test here: ${JSON.stringify(temp)}`);
}

/**
 * The function build up the correct query string for cve keyword search
 * @param {*} queryarr the input query string in array
 */
function parseQueryString(queryText) {
  let queryString = "";
  if (queryText.indexOf(",") === -1 && queryText.indexOf("&") === -1) {
    queryString = replaceSpecialString(queryText.trim());
    queryString = "(" + queryString + ")";
    return queryString;
  }
  //split ","
  let queryArr = queryText.split(",");
  if (queryArr.length === 1) {
    queryString = queryArr[0]
      .trim()
      .split("&")
      .reduce((x, y) => andReduce(x, y));
  } else {
    queryString = queryArr.reduce(
      (x, y) =>
        x
          .trim()
          .split("&")
          .reduce((xAccum, xItem) => andReduce(xAccum, xItem)) +
        " OR " +
        y
          .trim()
          .split("&")
          .reduce((yAccum, yItem) => andReduce(yAccum, yItem))
    );
  }
  queryString = replaceSpecialString(queryString);
  return queryString;
}

function andReduce(x, y) {
  let result = "(" + x.trim() + " AND " + y.trim() + ")";
  return result;
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function replaceSpecialString(queryText) {
  // replace "!" symbol to not
  let queryString = "";
  let regex = /!/g;
  queryString = queryText.replace("!", "NOT ");
  // add quote for cve ids since cve id value is tokenized in elastic
  regex = /(CVE-\d*-\d*)/gi;
  queryString = queryString.replace(regex, '"$1"');
  return queryString;
}
