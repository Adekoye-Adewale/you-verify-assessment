export const menuItems = [
        {
                id: 1,
                icon: '/icons/icons.svg',
                title: 'Home',
                link: {
                        href: '/',
                        title: 'Home Page'
                },
        },
        {
                id: 2,
                icon: '/icons/overview-icons.svg',
                title: 'Overview',
                link: {
                        href: '/overview',
                        title: 'Overview Page'
                },
        },
        {
                id: 3,
                icon: '/icons/accounts-icons.svg',
                title: 'Accounts',
                link: {
                        href: '/accounts',
                        title: 'Accounts Page'
                },
        },
        {
                id: 4,
                icon: '/icons/invoice-icons.svg',
                title: 'Invoice',
                link: {
                        href: '/invoice',
                        title: 'Invoice Page'
                },
        },
        {
                id: 5,
                icon: '/icons/beneficiary-management-icons.svg',
                title: 'Beneficiary Management',
                link: {
                        href: '/beneficiary-management',
                        title: 'Beneficiary Management Page'
                },
        },
        {
                id: 6,
                icon: '/icons/help-center-icons.svg',
                title: 'Help Center',
                link: {
                        href: '/help-center',
                        title: 'Help Center Page'
                },
        },
        {
                id: 7,
                icon: '/icons/settings-icons.svg',
                title: 'Settings',
                link: {
                        href: '/settings',
                        title: 'Settings Page'
                },
        },
]

export const overViewCardsData = [
        {
                id: 1,
                title: 'Total Paid',
                total: '1289',
                amount: '4,120,102',
                decimal: '76',
                bgColor: 'bg-[#B6FDD3]',
        },
        {
                id: 2,
                title: 'total overdue',
                total: '13',
                amount: '23,000',
                decimal: '13',
                bgColor: 'bg-[#FFB7BD]',
        },
        {
                id: 3,
                title: 'total draft',
                total: '08',
                amount: '12,200',
                decimal: '00',
                bgColor: 'bg-[#D9D9E0]',
        },
        {
                id: 4,
                title: 'total unpaid',
                total: '06',
                amount: '87,102',
                decimal: '00',
                bgColor: 'bg-[#F8E39B]',
        },
]

export const actionCardsData = [
        {
                id: 1,
                src: '/icons/money.svg',
                alt: 'Create New Invoice Action',
                title: 'Create New Invoice',
                description: 'Create new invoices easily.',
                active: true,
        },
        {
                id: 2,
                src: '/icons/setting-icon.svg',
                alt: 'Change Invoice settings Action',
                title: 'Change Invoice settings',
                description: 'Customise your invoices.',
                active: false,
        },
        {
                id: 3,
                src: '/icons/profile-2user-icon.svg',
                alt: 'Manage Customer list Action',
                title: 'Manage Customer list',
                description: 'Add and remove customers.',
                active: false,
        },
]

export const recentInvoicesData = [
        {
                groupDate: 'today - 27th November, 2022',
                invoices: [
                        {
                                id: 'Invoice - 1023494 - 2304',
                                dueDate: 'May 19th, 2023',
                                amount: '1,311,750.12',
                                status: 'Paid',
                        },
                        {
                                id: 'Invoice - 1023495 - 2304',
                                dueDate: 'May 19th, 2023',
                                amount: '1,311,750.12',
                                status: 'Overdue',
                        },
                ],
        },
        {
                groupDate: '8th december, 2022',
                invoices: [
                        {
                                id: 'Invoice - 1023494 - 2304',
                                dueDate: 'May 19th, 2023',
                                amount: '1,311,750.12',
                                status: 'Draft',
                        },
                        {
                                id: 'Invoice - 1023495 - 2304',
                                dueDate: 'May 19th, 2023',
                                amount: '1,311,750.12',
                                status: 'Pending payment',
                        },
                        {
                                id: 'Invoice - 1023496 - 2304',
                                dueDate: 'May 19th, 2023',
                                amount: '1,311,750.12',
                                status: 'Paid',
                        },
                ],
        },
]

export const recentActivitiesData = [
        {
                id: 1,
                activity: 'Invoice Creation',
                timeAgo: 'Yesterday, 12:05 PM',
                user: '00239434/Olaniyi Ojo Adewale',
                userAvatar: '/images/avatar.png'
        },
        {
                id: 2,
                activity: 'Invoice Creation',
                timeAgo: 'Yesterday, 12:05 PM',
                user: '00239434/Olaniyi Ojo Adewale',
                userAvatar: '/icons/avatar.svg'
        },
        {
                id: 3,
                activity: 'Invoice Creation',
                timeAgo: 'Yesterday, 12:05 PM',
                user: '00239434/Olaniyi Ojo Adewale',
                userAvatar: '/icons/avatar.svg'
        },
        {
                id: 4,
                activity: 'Invoice Creation',
                timeAgo: 'Yesterday, 12:05 PM',
                user: '00239434/Olaniyi Ojo Adewale',
                userAvatar: '/icons/avatar.svg'
        },
]

export const invoices = [
        {
                id: 'Invoice - 1023494 - 2304',
                invoiceNumber: '1023902390',
                issueDate: 'March 30th, 2023',
                dueDate: 'May 19th, 2023',
                amount: '1,311,750.12',
                status: 'Partial Payment',
                billingCurrency: 'USD ($)',
                discount: 2.5,
                sender: {
                        img: '/images/logo-frame.png',
                        name: 'Fabulous Enterprise',
                        phoneNumber: '+386 989 271 3115',
                        address: '1331 Hart Ridge Road 48436 Gaines, MI.',
                        email: 'info@fabulousenterise.co'
                },
                customer: {
                        name: 'Olaniyi Ojo Adewale',
                        phoneNumber: '+386 989 271 3115',
                        email: 'info@fabulousenterise.co',
                },
                items: [
                        {
                                id: 101101,
                                name: 'Email Marketing',
                                description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ',
                                quantity: 10,
                                price: 1500,
                        },
                        {
                                id: 101102,
                                name: 'Video looping effect',
                                description: ' ',
                                quantity: 6,
                                price: 1110500,
                        },
                        {
                                id: 101103,
                                name: 'Graphic design for emailst',
                                description: 'Tsit voluptatem accusantium  ',
                                quantity: 7,
                                price: 2750,
                        },
                        {
                                id: 101104,
                                name: 'Video looping effect',
                                description: ' ',
                                quantity: 6,
                                price: 1110500,
                        },
                ],
                paymentInformation: {
                        accountName: '1023902390',
                        accountNumber: 'March 30th, 2023',
                        achRoutingNumber: 'May 19th, 2023',
                        bankName: 'USD ($)',
                        bankAddress: '1023902390',
                },
                note: 'Thank you for your patronage'
        },
        {
                id: 'Invoice - 1023495 - 2304',
                invoiceNumber: '1023902390',
                issueDate: 'March 30th, 2023',
                dueDate: 'May 19th, 2023',
                amount: '1,311,750.12',
                status: 'Partial Payment',
                billingCurrency: 'USD ($)',
                discount: 2.5,
                sender: {
                        name: 'Fabulous Enterprise',
                        phoneNumber: '+386 989 271 3115',
                        address: '1331 Hart Ridge Road 48436 Gaines, MI.',
                        email: 'info@fabulousenterise.co'
                },
                customer: {
                        name: 'Olaniyi Ojo Adewale',
                        phoneNumber: '+386 989 271 3115',
                        email: 'info@fabulousenterise.co',
                },
                items: [
                        {
                                id: 101101,
                                name: 'Email Marketing',
                                description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ',
                                quantity: 10,
                                price: 1500,
                        },
                        {
                                id: 101102,
                                name: 'Video looping effect',
                                description: ' ',
                                quantity: 6,
                                price: 1110500,
                        },
                        {
                                id: 101103,
                                name: 'Graphic design for emailst',
                                description: 'Tsit voluptatem accusantium  ',
                                quantity: 7,
                                price: 2750,
                        },
                        {
                                id: 101103,
                                name: 'Video looping effect',
                                description: ' ',
                                quantity: 6,
                                price: 1110500,
                        },
                ],
                paymentInformation: {
                        accountName: '1023902390',
                        accountNumber: 'March 30th, 2023',
                        achRoutingNumber: 'May 19th, 2023',
                        bankName: 'USD ($)',
                        bankAddress: '1023902390',
                },
                note: 'Thank you for your patronage'
        },
        {
                id: 'Invoice - 1023496 - 2304',
                invoiceNumber: '1023902390',
                issueDate: 'March 30th, 2023',
                dueDate: 'May 19th, 2023',
                amount: '1,311,750.12',
                status: 'Partial Payment',
                billingCurrency: 'USD ($)',
                discount: 2.5,
                sender: {
                        name: 'Fabulous Enterprise',
                        phoneNumber: '+386 989 271 3115',
                        address: '1331 Hart Ridge Road 48436 Gaines, MI.',
                        email: 'info@fabulousenterise.co'
                },
                customer: {
                        name: 'Olaniyi Ojo Adewale',
                        phoneNumber: '+386 989 271 3115',
                        email: 'info@fabulousenterise.co',
                },
                items: [
                        {
                                id: 101101,
                                name: 'Email Marketing',
                                description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ',
                                quantity: 10,
                                price: 1500,
                        },
                        {
                                id: 101102,
                                name: 'Video looping effect',
                                description: ' ',
                                quantity: 6,
                                price: 1110500,
                        },
                        {
                                id: 101103,
                                name: 'Graphic design for emailst',
                                description: 'Tsit voluptatem accusantium  ',
                                quantity: 7,
                                price: 2750,
                        },
                        {
                                id: 101103,
                                name: 'Video looping effect',
                                description: ' ',
                                quantity: 6,
                                price: 1110500,
                        },
                ],
                paymentInformation: {
                        accountName: '1023902390',
                        accountNumber: 'March 30th, 2023',
                        achRoutingNumber: 'May 19th, 2023',
                        bankName: 'USD ($)',
                        bankAddress: '1023902390',
                },
                note: 'Thank you for your patronage'
        },
]

export const reminderFrequencies = [
        '14 days before due date',
        '7 days before due date',
        '3 days before due date',
        '24 hrs before due date',
        'On due date',
]

export const invoiceActivities = [
        {
                id: 1,
                activity: 'You',
                timeAgo: 'Today, 12:20 PM',
                act: 'Created invoice',
                user: '00239434/Olaniyi Ojo Adewale',
                userAvatar: '/images/avatar.png'
        },
        {
                id: 2,
                activity: 'You',
                act: 'Sent invoice',
                timeAgo: 'Today, 12:20 PM',
                user: '00239434/Olaniyi Ojo Adewale to Olaniyi Ojo Adewale',
                userAvatar: '/images/avatar.png'
        },
        {
                id: 3,
                activity: 'Payment Confirmed',
                act: 'You manually confirmed a partial payment of',
                timeAgo: 'Today, 12:20 PM',
                user: '$503,000.00',
                userAvatar: '/images/avatar.png'
        },
        {
                id: 4,
                activity: 'Payment Confirmed',
                act: 'You manually confirmed a full payment of',
                timeAgo: 'Today, 12:20 PM',
                user: '$6,000,000.00',
                userAvatar: '/images/avatar.png'
        },
        {
                id: 5,
                activity: 'You ',
                act: 'Sent invoice',
                timeAgo: 'Today, 12:20 PM',
                user: '00239434/Olaniyi Ojo Adewale to Olaniyi Ojo Adewale',
                userAvatar: '/images/avatar.png'
        },
]