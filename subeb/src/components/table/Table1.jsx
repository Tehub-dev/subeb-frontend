import React from 'react'
import { useTable } from "react-table"
import './table.css'

function Table1() {
    const school = [
        {
            id: 1,
            schoolName: `SAINT JOHN'S CHRIST APOSTOLIC CHURCH PRIMARY SCHOOL, IKARE`,
            lga: `AKOKO-NORTH-EAST`,
            SchoolAdmin: `Olivia Rhye`
        },
        {
            id: 2,
            schoolName: `ST JOSEPH CAC OKELA PRIMARY SCHOOL, IKARE.`,
            lga: `AKOKO-NORTH-EAST`,
            SchoolAdmin: `Olivia Rhye`
        },
        {
            id: 3,
            schoolName: `SAINT JAME'S ANGLICAN PRIMARY SCHOOL, UGBE- AKOKO`,
            lga: `AKOKO-NORTH-EAST`,
            SchoolAdmin: `Olivia Rhye`
        },
        {
            id: 4,
            schoolName: `ST JOSEPH CAC OKELA PRIMARY SCHOOL, IKARE.`,
            lga: `AKOKO-NORTH-WEST`,
            SchoolAdmin: `Olivia Rhye`
        },
        {
            id: 5,
            schoolName: `ST JOSEPH CAC OKELA PRIMARY SCHOOL, IKARE.`,
            lga: `AKOKO-NORTH-EAST`,
            SchoolAdmin: `Olivia Rhye`
        }
    ];

    const data = React.useMemo(() => school, []);
    const columns = React.useMemo(() => [
    {
        Header: "School Name",
        accessor: "schoolName",
    },
    {
        Header: "LGA",
        accessor: "lga",
    },
    {
        Header: "School Admin",
        accessor: "SchoolAdmin",
    },
], 
    []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });
    return (
        <div className='table1'>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) =>{
                       prepareRow(row)
                       return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()}>
                                    {cell.render("Cell")}
                                </td>
                            ))}
                        </tr>
                       ) 
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table1
