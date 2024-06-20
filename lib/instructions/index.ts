export enum DisplayName {
    Memo = "Memo",
    Transfer = "Transfer",
    MultiTransfer = "Multi Transfer",
    Burn = "Burn",
    Unkown = "Unkown",
    Raw = "Raw",
}

export function getDisplayName(input: string | undefined): DisplayName {
    switch (input) {
        case 'memo':
            return DisplayName.Memo;
        case 'transfer':
        case 'transferChecked':
            return DisplayName.Transfer;
        case 'multitransfer2':
        case 'multitransfer4':
            return DisplayName.MultiTransfer;
        case 'burn':
            return DisplayName.Burn;
        case undefined:
            return DisplayName.Raw;
        default:
            return DisplayName.Unkown;
    }
}