import { InvoiceItem } from "@/components/invoicePopUp/types";

const calculateTotal = (quantity: number, price: number): number => {
        return quantity * price
};

const calculateItemTotal = (item: InvoiceItem): number => {
        return item.quantity * item.price
};

const calculateSubtotal = (items: InvoiceItem[]): number => {
        return items.reduce((sum, item) => {
                return sum + calculateItemTotal(item)
        }, 0);
};

const calculateDiscount = (subtotal: number, discount: number): number => {
        return subtotal * (discount / 100)
}

const calculateFinalTotal = (subtotal: number, discount: number): number => {
        return subtotal - subtotal * (discount / 100)
};

export { calculateTotal, calculateItemTotal, calculateSubtotal, calculateDiscount, calculateFinalTotal }