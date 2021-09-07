export function decodeBankName(name: string): string {
    // TODO: standarize name capitalization
    // Upercase bank name    
    if (name.length <= 4) {
        return name.toUpperCase();
    }

    return name.charAt(0).toUpperCase() + name.slice(1);

}