'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { 
        SenderProps, 
        InvoiceItem, 
        InvoicePreviewProps, 
        InvoiceProps, 
        PaymentInformation, 
        PopUpHeaderProps, 
        TotalTableProps 
} from './types';
import { 
        calculateTotal, 
        calculateSubtotal, 
        calculateDiscount, 
        calculateFinalTotal 
} from '@/util/calculator';
import { formatToUSD } from '@/util/formatter';
import { PriButton, SecButton } from '../buttons';
import { invoiceActivities, reminderFrequencies } from '@/constant';
import Image from 'next/image';
import {
        Table,
        TableBody,
        TableCell,
        TableFooter,
        TableRow,
} from "@/components/ui/table"
import { ActivityCard } from '../invoice';
import { Fragment } from 'react/jsx-runtime';
import { useState } from 'react';

export default function InvoicePopUp({ invoices }: { invoices: InvoiceProps['invoice'][] }) {

        const searchParams = useSearchParams();
        const inv = searchParams.get('inv');

        const invoice = invoices.find((data: InvoiceProps['invoice']) => data.id === inv);

        if (!invoice) return null

        return (
                <PopUpWrapper>
                        <PopUpContent 
                                invoice={invoice} 
                        />
                </PopUpWrapper>
        )
}

const PopUpWrapper = ({ children }: { children: React.ReactNode }) => {

        const router = useRouter();

        return (
                <div className="fixed top-0 left-0 w-screen h-screen bg-[#1F1F23]/50 z-50 py-2.5 px-2.5 md:py-15 md:px-12.5 overflow-y-auto">
                        <div className="flex flex-col">
                                <button
                                        className="ml-auto cursor-pointer"
                                        title="Close invoice"
                                        onClick={() => router.push('/invoice')}
                                >
                                        <CloseIcon />
                                </button>
                                {children}
                        </div>
                </div>
        )
}

const PopUpContent = ({ invoice } : InvoiceProps ) => {

        return (
                <div className="bg-white rounded-lg md:rounded-[40px] p-2.5 md:p-10 space-y-4 md:space-y-8 overflow-y-auto">
                        <PopUpHeader 
                                id={invoice.id}
                                status="Paid"
                        />
                        <RemindersSection />
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                                <InvoicePreview
                                        sender={invoice.sender}
                                        customer={invoice.customer}
                                        invoiceNumber={invoice.invoiceNumber}
                                        issueDate={invoice.issueDate}
                                        dueDate={invoice.dueDate}
                                        billingCurrency={invoice.billingCurrency}
                                        items={invoice.items}
                                        discount={invoice.discount}
                                        accountName={invoice.paymentInformation.accountName}
                                        accountNumber={invoice.paymentInformation.accountNumber}
                                        achRoutingNumber={invoice.paymentInformation.achRoutingNumber}
                                        bankName={invoice.paymentInformation.bankName}
                                        bankAddress={invoice.paymentInformation.bankAddress}
                                        note={invoice.note}
                                />
                                <InvoiceActivity/>
                        </div>
                </div>
        )
}

const PopUpHeader = ({ id, status }: PopUpHeaderProps) => {
        return (
                <div className='flex flex-col md:flex-row md:items-center justify-between gap-2'>
                        <div className='flex flex-col gap-2 md:gap-6'>
                                <div className='space-y-1 md:space-y-2'>
                                        <h2 className='font-bold text-4 md:text-8 text-[#1F1F23]'>
                                                {id}
                                        </h2>
                                        <p className='text-sm md:text-base text-[#697598]'>
                                                View the details and activity of this invoice
                                        </p>
                                </div>
                                <div>
                                        <span className='text-[7.5px] md:text-[10px] text-[#003EFF] py-1 px-2.5 md:py-2.5 md:px-4 bg-[#F2FBFF] rounded-2xl border border-[#003EFF33]'>
                                                {status}
                                        </span>
                                </div>
                        </div>
                        <div className='flex gap-2.5 md:gap-6 items-center'>
                                <SecButton 
                                        title="Download As PDF"
                                        href='/'
                                />
                                <PriButton
                                        title="Send Invoice"
                                        href='/'
                                />
                                <button >
                                        More
                                </button>
                        </div>
                </div>
        )
}

const RemindersSection = () => {
        return (
                <div className='flex flex-wrap items-center gap-4 md:gap-6 p-2.5 md:p-6 rounded-lg md:rounded-[24px] border border-[#E3E6EF]'>
                        <div>
                                <h3 className='uppercase text-xs text-[#666F77]'>
                                        Reminders
                                </h3>
                        </div>
                        <div className='flex flex-wrap gap-2 md:gap-3'>
                                {reminderFrequencies.map((text) => (
                                        <ReminderFilter 
                                                key={text}
                                                text={text}
                                        />
                                ))}
                        </div>
                </div>
        )
}

const ReminderFilter = ({ text } : { text: string }) => {

        const [ filterActive, setFilterActive ] = useState(true)

        const handeleFilterToggle = () => {
                setFilterActive(!filterActive)
        }

        return (
                <button 
                        className={`text-xs md:text-sm font-medium flex items-center gap-1.5 md:gap-2.5 p-2 md:p-4 rounded-[24px] ${filterActive ? 'bg-[#E6FFF0]' : ' border border-[#E3E6EF] bg-white'}`}
                        onClick={handeleFilterToggle}
                >
                        <span>
                                {text}
                        </span>
                        <span className={`${filterActive ? 'block' : 'hidden'}`}>
                                <CheckIcon />
                        </span>
                </button>
        )
}

const InvoicePreview = (
        { 
                sender, 
                customer, 
                invoiceNumber, 
                issueDate, 
                dueDate, 
                billingCurrency, 
                items, 
                discount, 
                accountName, 
                accountNumber, 
                achRoutingNumber, 
                bankName, 
                bankAddress,
                note
        }: InvoicePreviewProps & PaymentInformation) => {
        return (
                <div className='col-span-2 p-2.5 md:p-8 rounded-lg md:rounded-[40px] bg-white border border-[#E3E6EF] space-y-4 md:space-y-6'>
                        <div className='p-2.5 md:p-8 bg-[#FCDDEC] rounded-lg md:rounded-[40px] space-y-5 md:space-y-8'>
                                <div className='flex flex-col md:flex-row justify-between gap-4'>
                                        <InvoiceSender
                                                title='Sender'
                                                src={sender?.img}
                                                name={sender.name}
                                                phoneNumber={sender.phoneNumber}
                                                address={sender.address}
                                                email={sender.email}
                                        />
                                        <InvoiceSender
                                                title='Customer'
                                                name={customer.name}
                                                src={customer?.img}
                                                phoneNumber={customer.phoneNumber}
                                                address={customer?.address}
                                                email={customer.email}
                                        />
                                </div>
                                <div className='space-y-2'>
                                        <h3 className='text-[10px] md:text-xs text-[#697598] font-medium uppercase'>
                                                Invoice Details
                                        </h3>
                                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-5'>
                                                <InvoiceDetailCard
                                                        title='Invoice no'
                                                        text={invoiceNumber}
                                                />
                                                <InvoiceDetailCard
                                                        title='Issue date'
                                                        text={issueDate}
                                                />
                                                <InvoiceDetailCard
                                                        title='Due date'
                                                        text={dueDate}
                                                />
                                                <InvoiceDetailCard
                                                        title='Billing currency'
                                                        text={billingCurrency}
                                                />
                                        </div>
                                </div>
                        </div>
                        <InvoiceItemsListTable 
                                items={items}
                                discount={discount}
                        />
                        <PaymentInfoSection
                                accountName={accountName}
                                accountNumber={accountNumber}
                                achRoutingNumber={achRoutingNumber}
                                bankName={bankName}
                                bankAddress={bankAddress}
                        />
                        <NoteSection 
                                note={note || ''}
                        />
                </div>
        )
}

const InvoiceSender = ({ title, src, name, phoneNumber, address, email } : SenderProps ) => {
        return (
                <div className='space-y-2 md:space-y-4'>
                        <div>
                                <h3 className='text-[10px] md:text-xs text-[#697598] font-medium uppercase'>
                                        {title}
                                </h3>
                        </div>
                        <div className='flex items-start gap-4'>
                                {src && (
                                        <div>
                                                <Image 
                                                        src={src}
                                                        alt={name}
                                                        width={60}
                                                        height={60}
                                                />
                                        </div>
                                )}
                                <div className='space-y-0.5 md:space-y-2'>
                                        <h4 className='text-sm md:text-base text-[#1F1F23] font-medium'>
                                                {name}
                                        </h4>
                                        <div className='text-xs text-[#697598] space-y-0.5 md:space-y-2'>
                                                <p>
                                                        {phoneNumber}
                                                </p>

                                                <p>
                                                        {address}
                                                </p>

                                                <p>
                                                        {email}
                                                </p>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

const InvoiceDetailCard = ({ title, text } : { title:string; text:string }) => {
        return (
                <div className='space-y-1'>
                        <h4 className='text-[10px] text-[#666F77] uppercase'>
                                {title}
                        </h4>
                        <p className='font-medium text-xs text-[#1F1F23]'>
                                {text}
                        </p>
                </div>
        )
}

export const InvoiceItemsListTable = ({ items, discount }: { items: InvoiceItem[]; discount: number }) => {

        const subtotal = calculateSubtotal(items);
        const finalTotal = calculateFinalTotal(subtotal, discount);

        return (
                <div className='space-y-3 md:space-y-6'>
                        <div className='flex items-center gap-4 md:gap-10'>
                                <h3 className='text-base md:text-[20px] font-medium text-[#1F1F23]'>
                                        Items
                                </h3>
                                <div className='h-px w-full bg-[#E3E6EF]'></div>
                        </div>
                        <Table>
                                <TableBody>
                                        {items.map((item) => (
                                                <Fragment
                                                        key={item.id}
                                                >
                                                        <InvoiceItemsListRow
                                                                item={item}
                                                        />
                                                </Fragment>
                                        ))}
                                </TableBody>
                                <TotalTable
                                        subtotal={(subtotal)}
                                        discount={discount}
                                        finalTotal={finalTotal}
                                />
                        </Table>
                </div>
        )
}

const InvoiceItemsListRow = ({ item } : { item: InvoiceItem}) => {

        const total = calculateTotal(item.quantity, item.price)

        return (
                <TableRow className='border-b-0'>
                        <TableCell>
                                <div className='max-w-62.5'>
                                        <h4 className='text-xs md:text-base text-[#1F1F23]'>
                                                {item.name}
                                        </h4>
                                        <p className='text-[10px] md:text-[13px] text-[#666F77] text-wrap'>
                                                {item.description}
                                        </p>
                                </div>
                        </TableCell>

                        <TableCell className='text-xs md:text-base text-[#1F1F23]'>
                                <span>
                                        {item.quantity}
                                </span>
                        </TableCell>

                        <TableCell className='text-right text-xs md:text-base text-[#1F1F23]'>
                                {formatToUSD(item.price)}
                        </TableCell>

                        <TableCell className='text-right text-xs md:text-base text-[#1F1F23]'>
                                {formatToUSD(total)}
                        </TableCell>
                </TableRow>
        )
}

const TotalTable = ({ subtotal, discount, finalTotal }: TotalTableProps ) => {
        return (
                <TableFooter className='border-t-0 bg-white'>
                        <TableRow className='border-b-0'>
                                <TableCell 
                                        colSpan={3}  
                                        className='text-right'
                                >
                                        <p className='text-xs md:text-sm text-[#B7BDCF]'>
                                                Subtotal
                                        </p>
                                </TableCell>

                                <TableCell
                                        className='text-right'
                                >
                                        <p className='text-sm md:text-[20px] text-[#373B47]'>
                                                {formatToUSD(subtotal)}
                                        </p>
                                </TableCell>
                        </TableRow>

                        <TableRow className='border-b-0'>
                                <TableCell 
                                        colSpan={3} 
                                        className='text-right'
                                >
                                        <p className='text-xs md:text-sm text-[#B7BDCF]'>
                                                Discount ({discount})
                                        </p>
                                </TableCell>

                                <TableCell
                                        className='text-right'
                                >
                                        <p className='text-sm md:text-[20px] text-[#373B47]'>
                                                {formatToUSD(calculateDiscount(subtotal, discount))}
                                        </p>
                                </TableCell>
                        </TableRow>

                        <TableRow>
                                <TableCell 
                                        colSpan={3} 
                                        className='text-right'
                                >
                                        <p className='text-sm md:text-[18px] text-[#373B47]'>
                                                Total amount due
                                        </p>
                                </TableCell>

                                <TableCell
                                        className='text-right'
                                >
                                        <p className='text-lg md:text-[25px] text-[#373B47]'>
                                                {formatToUSD(finalTotal)}
                                        </p>
                                </TableCell>
                        </TableRow>
                </TableFooter>
                
        )
}

const PaymentInfoSection = ({ accountName, accountNumber, achRoutingNumber, bankName, bankAddress } : PaymentInformation ) => {
        return (
                <div className='border border-[#E3E6EF] py-2.5 px-2.5 md:py-4 md:px-6 rounded-2xl md:rounded-[24px]'>
                        <div className='space-y-1 md:space-y-2'>
                                <div>
                                        <h3 className='font-medium text-xs text-[#697598] uppercase'>
                                                Payment information
                                        </h3>
                                </div>
                                <div className='grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2'>
                                        <InvoiceDetailCard 
                                                title='Account name' 
                                                text={accountName}
                                        />
                                        <InvoiceDetailCard 
                                                title='Account number' 
                                                text={accountNumber}
                                        />
                                        <InvoiceDetailCard 
                                                title='Ach routing no' 
                                                text={achRoutingNumber}
                                        />
                                        <InvoiceDetailCard 
                                                title='Bank name' 
                                                text={bankName}
                                        />
                                        <InvoiceDetailCard 
                                                title='bank address' 
                                                text={bankAddress}
                                        />
                                        <InvoiceDetailCard 
                                                title='account number' 
                                                text={accountNumber}
                                        />
                                </div>
                        </div>
                </div>
        )
}

const NoteSection = ({ note }: { note: string } ) => {
        return (
                <div className='bg-[#F6F8FA] rounded-[24px] py-2.5 px-2.5 md:py-4 md:px-6'>
                        <h3 className='text-[#B7BDCF] uppercase text-sm'>
                                Note
                        </h3>
                        <p className='text-sm md:text-base text-[#666F77]'>
                                {note}
                        </p>
                </div>
        )
}

const InvoiceActivity = () => {
        return (
                <div className='space-y-4 md:space-y-6'>
                        <h3>
                                Invoice Activity
                        </h3>
                        <div className='space-y-4 md:space-y-6'>
                                {invoiceActivities.map((activity) => (
                                        <Fragment key={activity.id}>
                                                <ActivityCard
                                                        activity={activity.activity}
                                                        timeAgo={activity.timeAgo}
                                                        user={activity.user}
                                                        userAvatar={activity.userAvatar}
                                                        act={activity.act}
                                                />
                                        </Fragment>
                                ))}
                        </div>
                </div>
        )
}

const CloseIcon = () => {
        return (
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className='size-5 md:size-full'>
                        <rect x="0.5" y="0.5" width="63" height="63" rx="31.5" fill="white" />
                        <rect x="0.5" y="0.5" width="63" height="63" rx="31.5" stroke="#E3E6EF" />
                        <path opacity="0.4" d="M24.9289 24.929L39.0711 39.0711" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M24.9289 39.0711L39.0711 24.929" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

        )
}

const CheckIcon = () => {
        return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#E6FFF0" />
                        <path d="M7.75 12L10.58 14.83L16.25 9.16998" stroke="#2DB260" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

        )
}