import exportCsvFile from "./exportToJson";
import { dataSummaryDetailsData2 } from "./sampleData";
//import { dataSummaryDetailsData } from "../dataForTableTest";

export function exportCsv() {
  const headers = {
    last_ic_reported_date: "Last IC Reported Date",
    icoastid: "ICOAST ID",
    agency: "Agency",
    cve_id: "CVE ID",
    cvssV3: "CVSS_V3",
    count: "Count",
    countries: "State Actor Using CVE",
    cvssV2: "CVSS_V2",
    exploitdb_id: "Exploit DB ID",
    cve_published_date: "CVE Published Date",
    network: "Network"
  };
  const results = dataSummaryDetailsData2;

  let itemsIn: any = [];

  const missingColumn = Object.keys(headers).filter(
    (typeInHeader) => !Object.keys(results[0]).includes(typeInHeader)
  );

  if (missingColumn.length > 0) {
    results.forEach((item) => {
      missingColumn.forEach((newKey) => {
        item[newKey] = "";
      });
    });
  }

  results.forEach((item) => {
    Object.keys(item).forEach(function (k) {
      if (item[k] === null || item[k] === undefined) {
        item[k] = "";
      }
    });
    itemsIn.push(item);
  });
  console.log(`lilly testing final : ${JSON.stringify(itemsIn)}`);
  const fileTitle = "report";
  exportCsvFile({ headers, itemsIn, fileTitle });
}
