import parseCSV from "csv-parse/lib/sync";

/**
 *
 * @param csvData
 * @param extraOptions
 * @returns {[]}
 */
let readCSV=(csvData, extraOptions)=>{
  let csvOptions = {
    columns: true,
    skip_empty_lines: true,
    ...(extraOptions||{})
  };
  let out = [];
  for (let record of parseCSV(csvData, csvOptions)) {
    out.push(record)
  }
  return out;
}

export default readCSV;
