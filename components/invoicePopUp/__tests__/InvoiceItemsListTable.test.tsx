import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { InvoiceItemsListTable } from '..'
import { InvoiceItem } from '../types'

describe('InvoiceItemsListTable', () => {
        const items: InvoiceItem[] = [
                {
                        id: 1,
                        name: 'Design Work',
                        description: 'Landing page UI',
                        quantity: 2,
                        price: 150,
                },
                {
                        id: 2,
                        name: 'Development',
                        description: 'Frontend implementation',
                        quantity: 1,
                        price: 300,
                },
        ]

        it('renders invoice items correctly', () => {
                render(
                        <InvoiceItemsListTable
                                items={items}
                                discount={10}
                        />
                )

                // Item names
                expect(screen.getByText('Design Work')).toBeInTheDocument()
                expect(screen.getByText('Development')).toBeInTheDocument()

                // Descriptions
                expect(screen.getByText('Landing page UI')).toBeInTheDocument()
                expect(screen.getByText('Frontend implementation')).toBeInTheDocument()

                // Quantities
                expect(screen.getByText('2')).toBeInTheDocument()
                expect(screen.getByText('1')).toBeInTheDocument()
        })

        it('calculates and displays totals correctly', () => {
                render(
                        <InvoiceItemsListTable
                                items={items}
                                discount={10}
                        />
                )

                /**
                 * Calculations:
                 * Design: 2 × 150 = 300
                 * Dev: 1 × 300 = 300
                 * Subtotal = 600
                 * Discount 10% = 60
                 * Final = 540
                 */

                // Row totals
                expect(screen.getAllByText('$300.00')).toBeInTheDocument()
                expect(screen.getByText('$600.00')).toBeInTheDocument()

                // Subtotal
                expect(screen.getByText('Subtotal')).toBeInTheDocument()
                expect(screen.getByText('$600.00')).toBeInTheDocument()

                // Discount
                expect(screen.getByText('Discount (10)')).toBeInTheDocument()
                expect(screen.getByText('- $60.00')).toBeInTheDocument()

                // Final total
                expect(screen.getByText('Total amount due')).toBeInTheDocument()
                expect(screen.getByText('$540.00')).toBeInTheDocument()
        })
})
