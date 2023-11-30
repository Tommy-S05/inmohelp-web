'use client'
import {Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue} from "@nextui-org/table";
import formatPrice from "@/utils/formatPrice";

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
                    Capital
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