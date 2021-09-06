const MONTHS = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
];


export function getTransactionDate(date: string): string {
    console.log(date);
    const dateTime = date.split(' ');
    const dateParsed = dateTime[0].split('-');

    return `${dateParsed[2]} ${MONTHS[Number(dateParsed[1])]} ${dateParsed[0]}`;
}