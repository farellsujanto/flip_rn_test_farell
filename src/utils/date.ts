// TODO: English version
const MONTHS = [
    "Januari", "Februari", "Maret",
    "April", "Mei", "Juni",
    "Juli", "Agustus", "September",
    "Oktober", "November", "Desember"
];


export function getTransactionDate(date: string): string {
    // Parse date to split yyyy-mm-dd
    const dateTime = date.split(' ');
    const dateParsed = dateTime[0].split('-');

    // Return dd-MM-yyyy
    return `${dateParsed[2]} ${MONTHS[Number(dateParsed[1])]} ${dateParsed[0]}`;
}