export function currencyFormat(value: number): string {
    // Regex to convert number to currency (.toLocaleString()  won't work, I don't know why, RN maybe?)
    return 'Rp ' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}