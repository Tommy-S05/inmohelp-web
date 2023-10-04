'use client'
import {Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue} from "@nextui-org/table";
import formatPrice from "@/utils/formatPrice";

const rows = [
    {
        // key: "1",
        period: "Septiembre 2023",
        initial_balance: 300000,
        interest_paid: 3000,
        principal_paid: 85.84,
        remaining_balance: 299914.16,
    },
    {
        // key: "2",
        period: "Octubre 2023",
        initial_balance: 299914.16,
        interest_paid: 2999.14,
        principal_paid: 86.7,
        remaining_balance: 299827.47,
    },
    {
        // key: "3",
        period: "Noviembre 2023",
        initial_balance: 299827.47,
        interest_paid: 2998.27,
        principal_paid: 87.56,
        remaining_balance: 299651.46,
    },
    {
        // key: "4",
        period: "Diciembre 2023",
        initial_balance: 299651.46,
        interest_paid: 2996.51,
        principal_paid: 89.32,
        remaining_balance: 299562.14,
    },
];

export default function AmortizationTable({amortization}) {
    const USDollar = formatPrice();
    return (
        <Table className={'col-span-12'} aria-label={'Tabla de amortización'}>
            {/*<TableHeader columns={columns}>*/}
            <TableHeader>
                <TableColumn key={'period'}>
                    Periodo
                </TableColumn>
                <TableColumn key={'initial_balance'}>
                    Saldo inicial
                </TableColumn>
                <TableColumn key={'interest_paid'}>
                    Interés
                </TableColumn>
                <TableColumn key={'principal_paid'}>
                    Principal
                </TableColumn>
                {/*<TableColumn key={'monthlyPayment'}>*/}
                {/*    Cuota mensual*/}
                {/*</TableColumn>*/}
                <TableColumn key={'remaining_balance'}>
                    Saldo restante
                </TableColumn>

                {/*{*/}
                {/*    (column) => (*/}
                {/*        <TableColumn key={column.key}>*/}
                {/*            {column.label}*/}
                {/*        </TableColumn>*/}
                {/*    )*/}
                {/*}*/}
            </TableHeader>
            <TableBody
                items={amortization}
                emptyContent={'No hay datos para mostrar. Genera una tabla de amortización.'}
            >
                {
                    (item) => (
                        <TableRow key={item.period}>
                            {
                                (columnKey) => (
                                    <TableCell>
                                        {
                                            columnKey !== 'period' ? USDollar.format(getKeyValue(item, columnKey)) : getKeyValue(item, columnKey)
                                        }
                                    </TableCell>
                                )
                            }
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    )
}