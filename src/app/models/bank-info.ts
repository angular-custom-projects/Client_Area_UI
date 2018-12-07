export class BankInfo {
    constructor(
        public bank_payee_name: string,
        public bank_name: string,
        public bank_address: string,
        public bank_acc_no: number,
        public bank_swift_code: string,
        public bank_country: string) {
    }
}
