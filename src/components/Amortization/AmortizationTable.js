'use client'
import {Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue} from "@nextui-org/table";
import formatPrice from "@/utils/formatPrice";

const rows = [
    {
        key: "1",
        period: "Septiembre 2023",
        initial_balance: 300000,
        interest: 3000,
        principal: 85.84,
        remaining_balance: 299914.16,
    },
    {
        key: "2",
        period: "Octubre 2023",
        initial_balance: 299914.16,
        interest: 2999.14,
        principal: 86.7,
        remaining_balance: 299827.47,
    },
    {
        key: "3",
        period: "Noviembre 2023",
        initial_balance: 299827.47,
        interest: 2998.27,
        principal: 87.56,
        remaining_balance: 299651.46,
    },
    {
        key: "4",
        period: "Diciembre 2023",
        initial_balance: 299651.46,
        interest: 2996.51,
        principal: 89.32,
        remaining_balance: 299562.14,
    },
];

export default function AmortizationTable({amortization}) {
    const USDollar = formatPrice();
    return (
        <Table className={'col-span-12'}>
            {/*<TableHeader columns={columns}>*/}
            <TableHeader>
                <TableColumn key={'period'}>
                    Periodo
                </TableColumn>
                <TableColumn key={'initial_balance'}>
                    Saldo inicial
                </TableColumn>
                <TableColumn key={'interest'}>
                    Interés
                </TableColumn>
                <TableColumn key={'principal'}>
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
                items={rows}
                emptyContent={'No hay datos para mostrar. Genera una tabla de amortización.'}
            >
                {
                    (item, index) => (
                        <TableRow key={index}>
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