import React from 'react'
import './table.css'
import DataTable from 'react-data-table-component';

function Table({columns, data}) {

    const customStyles = {
        rows:{ 
            style: {
                color: '#242424',
                fontFamily: 'Work Sans',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: '140%',
                letterSpacing: '0.1px',
                whiteSpace: 'break-spaces'
            },
        },
        headCells: {
            style: {
                color: '#5C5C5C',
                fontFamily: 'Helvetica',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '140%', /* 16.8px */
                letterSpacing: '0.4px',
                padding: 'var(--16, 16px) var(--24, 24px)',
            },
        },
        cells: {
            style: {
                display: 'flex',
                height: '72px',
                padding: 'var(--16, 16px) var(--24, 24px)',
                alignItems: 'center',
                gap: '12px',
                alignSelf: 'stretch',
                borderBottom: '#EBEEF2',
                background: '#F5F7F9',
            },
        },
    };
    
  return (
    <div className='table_comp'> 
    <DataTable
        columns={columns}
        data={data}
        pagination
        customStyles={customStyles}
    >
    </DataTable>
    </div>
  )
}

export default Table
