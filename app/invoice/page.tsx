import { Suspense } from 'react'
import InvoicePageComponent from "@/components/invoice";
import Loading from '@/components/loading';

export default function InvoicePage() {
        return (
                <Suspense fallback={<Loading/>}>
                        <InvoicePageComponent/>
                </Suspense>
        )
}
