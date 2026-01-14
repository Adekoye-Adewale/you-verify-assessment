export type Sender = {
        img?: string;
        name: string;
        phoneNumber: string;
        address: string;
        email: string;
}

export type Customer = {
        img?: string;
        name: string;
        phoneNumber: string;
        address?: string;
        email: string;
}

export type PaymentInformation = {
        accountName: string;
        accountNumber: string;
        achRoutingNumber: string;
        bankName: string;
        bankAddress: string;
}

export type InvoiceItem = {
        id?: number;
        name: string;
        description: string;
        quantity: number;
        price: number;
}

export type InvoiceProps = {
        invoice: {
                id: string;
                invoiceNumber: string;
                issueDate: string;
                dueDate: string;
                amount: string;
                status: string;
                billingCurrency: string;
                discount: number;
                sender: Sender;
                customer: Customer;
                items: InvoiceItem[];
                paymentInformation: PaymentInformation;
                note?: string;
        }
}

export type PopUpHeaderProps = {
        id: string,
        status: string,
}

export type SenderProps = {
        title: string
        src?: string;
        name: string;
        phoneNumber: string;
        address?: string
        email: string
}

export type InvoicePreviewProps = {
        sender: Sender;
        customer: Customer;
        invoiceNumber: string;
        issueDate: string;
        dueDate: string;
        billingCurrency: string;
        items: InvoiceItem[];
        discount: number;
        note?: string
}

export type TotalTableProps = {
        subtotal: number;
        discount: number;
        finalTotal: number;
}

