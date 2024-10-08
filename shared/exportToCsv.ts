export const exportToCsv = <T extends object>(filename: string, rows: T[]) => {
  if (!rows || !rows.length) {
    return;
  }

  // Extract the keys (headers) from the first object in the array
  const headers = Object.keys(rows[0]) as Array<keyof T>;

  // Map the rows to CSV format
  const csvContent =
    headers.join(",") +
    "\n" +
    rows
      .map((row) =>
        headers
          .map((header) => {
            const value = row[header];
            // Escape any commas or quotes in the values
            if (typeof value === "string") {
              return `"${value.replace(/"/g, '""')}"`;
            }
            return value;
          })
          .join(",")
      )
      .join("\n");

  // Create a Blob from the CSV content
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

  // Create a link element for download
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", filename);

  // Append link to the body and trigger click
  document.body.appendChild(link);
  link.click();

  // Cleanup by removing the link and releasing the object URL
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
