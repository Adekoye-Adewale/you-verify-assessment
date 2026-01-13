import Image from "next/image";
import { Fragment } from "react/jsx-runtime";
import { actionCardsData, overViewCardsData, recentActivitiesData, recentInvoicesData } from "@/constant";
import { PriButton, SecButton } from "../buttons"
import { getStatusStyle } from "@/util/getStatusStyle";
import {
        Table,
        TableBody,
        TableCaption,
        TableCell,
        TableFooter,
        TableHead,
        TableHeader,
        TableRow,
} from "@/components/ui/table"

type OverviewCardProps = {
        title: string;
        total: string;
        amount: string;
        decimal: string;
        bgColor: string;
}

type ActionCardProps = {
        src: string;
        alt: string;
        title: string;
        description: string;
        cardActive: boolean;
}

type ActivityCardProps = {
        activity: string;
        timeAgo: string;
        user: string;
        userAvatar: string
}

type InvoicesCardProps = {
        id: string;
        dueDate: string;
        amount: string;
        status: string;
}

export default function InvoicePageComponent() {
        return (
                <div className="space-y-5 md:space-y-10 z-1 w-full overflow-x-hidden">
                        <PageHeader />
                        <PageSubHeader />
                        <OverviewSection />
                        <ActionSection />
                        <div className="flex flex-wrap gap-8">
                                <RecentInvoicesSection />
                                <RecentActivitiesSection />
                        </div>
                </div>
        )
}

export const PageHeader = () => {
        return (
                <div className='flex justify-between items-center border-b border-[#A1B8FF33] pb-4 md:pb-8'>
                        <h1 className="text-lg md:text-[28px] text-[#373B47] font-medium uppercase ">
                                Invoice
                        </h1>

                        <div className="flex items-center gap-4 md:gap-6">
                                <div className="p-4 md:p-5 bg-white rounded-full">
                                        <NotificationIcon />
                                </div>
                                <div className="flex items-center p-2 md:p-3 bg-white rounded-full">
                                        <div className="grid place-content-center size-5 md:size-10 rounded-full bg-[#003EFF] text-white font-semibold">
                                                <span className="text-xs md:text-base">
                                                        KO
                                                </span>
                                        </div>
                                        <div>
                                                <ChevronDownIcon />
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

const PageSubHeader = () => {
        return (
                <div className="flex justify-between items-center flex-wrap">
                        <div>
                                <h2 className="text-[#1F1F23] text-lg md:text-[32px]">
                                        Invoice
                                </h2>
                        </div>
                        <div className="flex  gap-5 md:gap-8">
                                <SecButton
                                        href={"#"}
                                        title={"See What's New"}
                                />
                                <PriButton
                                        href={"#"}
                                        title={"Create"}
                                />
                        </div>
                </div>
        )
}

const OverviewSection = () => {
        return (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-8">
                        {overViewCardsData.map((card) => (
                                <Fragment key={card.id}>
                                        <OverviewCard
                                                title={card.title}
                                                total={card.total}
                                                amount={card.amount}
                                                decimal={card.decimal}
                                                bgColor={card.bgColor}
                                        />
                                </Fragment>
                        ))}
                </div>
        )
}

const OverviewCard = ({ title, total, amount, decimal, bgColor }: OverviewCardProps) => {
        return (
                <div className="flex flex-col gap-2 md:gap-4 bg-white rounded-lg md:rounded-3xl p-4 md:py-8 md:px-10 hover:bg-[#697598]/10 transition-all duration-300">
                        <OverviewIcon />
                        <div>
                                <div className="flex gap-2 items-center">
                                        <span className="uppercase text-[10px] md:text-xs">
                                                {title}
                                        </span>
                                        <span className={`text-[7.5px] md:text-sm text-[#373B47] font-medium py-0.5 px-1.5 md:py-3 md:px-4 rounded-3xl ${bgColor}`}>
                                                {total}
                                        </span>
                                </div>
                                <div>
                                        <span className="text-base md:text-[28px] text-[#1F1F23] font-medium">
                                                {`$`}{amount}.
                                        </span>
                                        <span className="text-xs md:text-sm text-[#697598]">
                                                {decimal}
                                        </span>
                                </div>
                        </div>
                </div>
        )
}

const ActionSection = () => {
        return (
                <div className="flex flex-col gap-6">
                        <div className="flex gap-10 items-center ">
                                <h3 className="text-[#1F1F23] text-base md:text-[20px] text-nowrap font-medium">
                                        Invoice Actions
                                </h3>
                                <div className="h-px w-full bg-white"></div>
                        </div>
                        <div>
                                <div className="grid grid-col-1 md:grid-cols-3 gap-2.5 md:gap-8">
                                        {actionCardsData.map((card) => (
                                                <Fragment key={card.id}>
                                                        <ActionCard
                                                                src={card.src}
                                                                alt={card.alt}
                                                                title={card.title}
                                                                description={card.description}
                                                                cardActive={card.active}
                                                        />
                                                </Fragment>
                                        ))}
                                </div>
                        </div>
                </div>
        )
}

const ActionCard = ({ src, alt, title, description, cardActive }: ActionCardProps) => {
        return (
                <div className={`flex flex-col gap-2 md:gap-4 rounded-lg md:rounded-3xl p-4 md:py-8 md:px-10 transition-all duration-300 ${cardActive ? 'bg-[#003EFF] hover:bg-[#697598]/90' : 'bg-white hover:bg-[#697598]/10'}`}>
                        <Image
                                src={src}
                                alt={alt}
                                title={title}
                                width={80}
                                height={80}
                                className="size-5 md:size-20"
                        />
                        <div className="space-y-2">
                                <h4 className={`text-base md:text-[22px] font-medium ${cardActive ? 'text-white' : 'text-[#373B47]'}`}>
                                        {title}
                                </h4>
                                <p className={`text-xs md:text-sm font-medium ${cardActive ? 'text-[#F6F8FA]' : 'text-[#697598]'}`}>
                                        {description}
                                </p>
                        </div>
                </div>
        )
}

const RecentInvoicesSection = () => {
        return (
                <div className="basis-60 md:basis-154.25 grow shrink rounded-2xl md:rounded-[40px] bg-white p-4 md:p-8 overflow-x-auto">
                        <RecentSectionHeader
                                title="Recent Invoices"
                                btnText="view all invoices"
                        />
                        <InvoicesTable />
                </div>
        )
}

const RecentActivitiesSection = () => {
        return (
                <div className="basis-60 md:basis-107.75 grow shrink rounded-2xl md:rounded-[40px] bg-white p-4 md:p-8">
                        <RecentSectionHeader
                                title="Recent Activities"
                                btnText="view all"
                        />
                        <div className="space-y-6 mt-6">
                                {recentActivitiesData.map((activity) => (
                                        <Fragment key={activity.id}>
                                                <ActivityCard
                                                        activity={activity.activity}
                                                        timeAgo={activity.timeAgo}
                                                        user={activity.user}
                                                        userAvatar={activity.userAvatar}
                                                />
                                        </Fragment>
                                ))}
                        </div>
                </div>
        )
}

const RecentSectionHeader = ({ title, btnText }: { title: string; btnText: string }) => {
        return (
                <div className="flex flex-wrap justify-between items-center">
                        <h3 className="text-[#1F1F23] text-sm md:text-[20px] text-nowrap font-medium">
                                {title}
                        </h3>
                        <SecButton
                                href={"#"}
                                title={btnText}
                                color="text-[#003EFF]"
                        />
                </div>
        )
}

const InvoicesTable = () => {
        return (
                <div>
                        {recentInvoicesData.map((data, index) => (
                                <div key={index}>
                                        <h4 className="text-xs uppercase text-[#1F1F23] py-2.5">
                                                {data.groupDate}
                                        </h4>
                                        <Table>
                                                <TableBody>
                                                        {data.invoices.map((item, index) => (
                                                                <Fragment key={index}>
                                                                        <InvoicesCard
                                                                                id={item.id}
                                                                                dueDate={item.dueDate}
                                                                                amount={item.amount}
                                                                                status={item.status}
                                                                        />
                                                                </Fragment>
                                                        ))}
                                                </TableBody>
                                        </Table>
                                </div>
                        ))}
                </div>
        )
}

const InvoicesCard = ({ id, dueDate, amount, status }: InvoicesCardProps) => {
        return (
                <TableRow className="border-b-0">
                        <TableCell className="py-2 md:py-4 px-4 md:px-6 w-20 md:w-36 cursor-pointer">
                                <div className="flex font-medium text-xs md:text-sm text-[#373B47] hover:text-blue-800 text-wrap transition-all duration-300">
                                        {id}
                                </div>
                        </TableCell>
                        <TableCell className="py-2 md:py-4 px-4 md:px-6">
                                <div className="flex flex-col gap-1 ">
                                        <span className="text-[8px] md:text-[10px] uppercase text-[#666F77]">
                                                Due date
                                        </span>
                                        <span className="text-xs md:text-sm font-medium text-[#697598]">
                                                {dueDate}
                                        </span>
                                </div>
                        </TableCell>
                        <TableCell className="py-2 md:py-4 px-4 md:px-6">
                                <div className="flex flex-col gap-1 text-right">
                                        <span className="text-xs md:text-base font-medium text-[#373B47]">
                                                {'$'}{amount}
                                        </span>
                                        <div>
                                                <span className={`text-[7.5px] py-[7.5px] px-6 uppercase font-medium border-[0.75] rounded-[18px] ${getStatusStyle(status)}`}>
                                                        {status}
                                                </span>
                                        </div>
                                </div>
                        </TableCell>
                </TableRow>
        )
}

const ActivityCard = ({ activity, timeAgo, user, userAvatar }: ActivityCardProps) => {
        return (
                <div className="flex gap-4">
                        <div>
                                <Image
                                        src={userAvatar}
                                        alt={user}
                                        title={user}
                                        width={48}
                                        height={48}
                                />
                        </div>
                        <div className="space-y-1">
                                <div className="space-y-1">
                                        <p className="text-sm md:text-[18px] font-medium">
                                                {activity}
                                        </p>
                                        <span className="text-xs md:text-sm text-[#697598]">
                                                {timeAgo}
                                        </span>
                                </div>
                                <div className="text-xs md:text-sm font-medium p-4 bg-[#F6F8FA] rounded-4xl">
                                        <span className="text-[#697598]">
                                                Created invoice
                                        </span>{' '}
                                        <span className="text-[#1F1F23]">
                                                {user}
                                        </span>
                                </div>
                        </div>
                </div>
        )
}

const NotificationIcon = () => {
        return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-3 md:size-6">
                        <path opacity="0.4" d="M12 6.43994V9.76994" stroke="#373B47" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                        <path d="M12.02 2C8.34002 2 5.36002 4.98 5.36002 8.66V10.76C5.36002 11.44 5.08002 12.46 4.73002 13.04L3.46002 15.16C2.68002 16.47 3.22002 17.93 4.66002 18.41C9.44002 20 14.61 20 19.39 18.41C20.74 17.96 21.32 16.38 20.59 15.16L19.32 13.04C18.97 12.46 18.69 11.43 18.69 10.76V8.66C18.68 5 15.68 2 12.02 2Z" stroke="#373B47" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                        <path opacity="0.4" d="M15.33 18.8199C15.33 20.6499 13.83 22.1499 12 22.1499C11.09 22.1499 10.25 21.7699 9.65004 21.1699C9.05004 20.5699 8.67004 19.7299 8.67004 18.8199" stroke="#373B47" strokeWidth="1.5" strokeMiterlimit="10" />
                </svg>

        )
}

const ChevronDownIcon = () => {
        return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.8077 14.3075L16.3377 10.7775C16.6277 10.4775 16.6277 10.0075 16.3377 9.7175C16.0477 9.4275 15.5677 9.4275 15.2777 9.7175L12.2777 12.7175L9.2777 9.7175C8.9877 9.4275 8.5077 9.4275 8.2177 9.7175C8.07822 9.85864 8 10.0491 8 10.2475C8 10.4459 8.07822 10.6364 8.2177 10.7775L11.7477 14.3075C11.8977 14.4575 12.0877 14.5275 12.2777 14.5275C12.4677 14.5275 12.6577 14.4575 12.8077 14.3075Z" fill="#697598" />
                </svg>

        )
}

const OverviewIcon = () => {
        return (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-5 md:size-10">
                        <path d="M28.3333 16.6666H31.6666C34.9999 16.6666 36.6666 15 36.6666 11.6666V8.33331C36.6666 4.99998 34.9999 3.33331 31.6666 3.33331H28.3333C24.9999 3.33331 23.3333 4.99998 23.3333 8.33331V11.6666C23.3333 15 24.9999 16.6666 28.3333 16.6666Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.33325 36.6666H11.6666C14.9999 36.6666 16.6666 35 16.6666 31.6666V28.3333C16.6666 25 14.9999 23.3333 11.6666 23.3333H8.33325C4.99992 23.3333 3.33325 25 3.33325 28.3333V31.6666C3.33325 35 4.99992 36.6666 8.33325 36.6666Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path opacity="0.34" d="M9.99992 16.6666C13.6818 16.6666 16.6666 13.6819 16.6666 9.99998C16.6666 6.31808 13.6818 3.33331 9.99992 3.33331C6.31802 3.33331 3.33325 6.31808 3.33325 9.99998C3.33325 13.6819 6.31802 16.6666 9.99992 16.6666Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path opacity="0.34" d="M29.9999 36.6666C33.6818 36.6666 36.6666 33.6819 36.6666 30C36.6666 26.3181 33.6818 23.3333 29.9999 23.3333C26.318 23.3333 23.3333 26.3181 23.3333 30C23.3333 33.6819 26.318 36.6666 29.9999 36.6666Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

        )
}
