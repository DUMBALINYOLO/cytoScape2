interface IitemType {
  [key: string]: string | number | boolean;
}

const sortProps = (item: IitemType): IitemType => {
  const ordered = {};
  // console.log(`lilly test keys ${JSON.stringify(Object.keys(item))}`);
  let tempkeys = Object.keys(item).sort();
  let arr = [];
  tempkeys.forEach((testkey) => {
    if (testkey === "id") {
      arr.unshift("id");
    } else {
      arr.push(testkey);
    }
  });
  // console.log(`test arr: ${JSON.stringify(arr)}`);
  arr.forEach(function (key) {
    ordered[key] = item[key];
  });
  return ordered;
};
const formatArrayToString = (array: string[]): string => {
  let arrayString = "";
  // console.log(`test formatArrayToString before: ${JSON.stringify(array)}`);
  array.forEach((item) => {
    arrayString += `${item},`;
  });
  const trimmedString = arrayString.substring(0, arrayString.length - 1);
  // console.log(`test formatArrayToString after: ${JSON.stringify(trimmedString)}`);
  return `"${trimmedString}"`;
};

const formatString = (itemNotFormatted: string): string => {
  // console.log(`test formatString before: ${JSON.stringify(itemNotFormatted)}`);
  let temp = itemNotFormatted.replace(/,/g, "");
  // console.log(`test formatString after: ${JSON.stringify(temp)}`);
  return temp;
};

const formatItems = (itemsNotFormatted: IitemType[]): IitemType[] =>
  itemsNotFormatted.map((item) => {
    const temp = {};
    //console.log(`test header: ${JSON.stringify(item)}`);
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "string") {
        // console.log(`print the item ${JSON.stringify(item[key])}`);
        temp[key] = formatString(item[key] as string);
      } else if (Array.isArray(item[key])) {
        temp[key] = formatArrayToString(item[key] as any) as string;
      } else {
        temp[key] = item[key];
      }
    });
    return sortProps(temp);
  });

const convertToCSV = (objArray: string): string => {
  const array = typeof objArray !== "object" ? JSON.parse(objArray) : objArray;
  let str = "";

  // tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < array.length; i++) {
    let line = "";
    for (const index in array[i]) {
      if (line !== "") {
        line += `,`;
      }

      line += array[i][index];
    }

    // tslint:disable-next-line: prefer-template
    str = `${str}${line}\r\n`;
  }
  // console.log(`lilly test str ${JSON.stringify(str)}`);
  return str;
};

function sortReportRecords(itemA: any, itemB: any) {
  if (itemA["id"] === undefined || itemB["id"] === undefined) {
    return 0;
  }
  let arrA = itemA.id.split("-");
  let arrB = itemB.id.split("-");
  if (parseInt(arrA[1], 10) > parseInt(arrB[1], 10)) {
    return 1;
  } else if (parseInt(arrA[1], 10) === parseInt(arrB[1], 10)) {
    if (parseInt(arrA[2], 10) > parseInt(arrB[2], 10)) {
      return 1;
    } else {
      return -1;
    }
  } else {
    return -1;
  }
}

const exportCSVFile = ({
  headers,
  itemsIn,
  fileTitle
}: {
  headers: IitemType;
  itemsIn: IitemType[];
  fileTitle: string;
}) => {
  let items: IitemType[] = itemsIn;
  if (headers) {
    items = [formatItems([headers])[0], ...formatItems(itemsIn)];
    items.sort(sortReportRecords);
    //console.log(`after format: ${JSON.stringify(items)}`);
  }
  //add string for missing columns

  // Convert Object to JSON
  const jsonObject = JSON.stringify(items);

  const csv = convertToCSV(jsonObject);

  const exportedFilename = `${formatString(fileTitle)}.csv` || "export.csv";

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, exportedFilename);
  } else {
    const link = document.createElement("a");
    if (link.download !== undefined) {
      // feature detection
      // Browsers that support HTML5 download attribute
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", exportedFilename);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};

export default exportCSVFile;
