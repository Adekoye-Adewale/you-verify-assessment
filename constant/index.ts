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
                                id: 'Invoice - 1023494 - 2304',
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
                                id: 'Invoice - 1023494 - 2304',
                                dueDate: 'May 19th, 2023',
                                amount: '1,311,750.12',
                                status: 'Pending payment',
                        },
                        {
                                id: 'Invoice - 1023494 - 2304',
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