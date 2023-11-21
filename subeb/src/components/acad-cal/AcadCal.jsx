import React from 'react';
import { Button, 
  // SelectInput 
} from '../custom-inputs/CustomInputs';
import { Edit } from 'iconsax-react';

import "./adcal.css";
import "../schAdmin/sch-admin.css";
import Table from '../table/Table';

const AcadCal = ({acadData, clickAdd, teacher}) => {


    const columns = [
        {
          name: "Holiday",
          selector: (row) => row?.holiday,
          sortable: true,
        },
        {
          name: "Date",
          selector: (row) => row?.date,
          sortable: true,
        },
    ];


  return (
    <div className='acad-cal'>
    <div className="sch-admin_head">
      <div className="head-left">
        {/* <SelectInput placeholder={term} /> */}
      </div>
      {!teacher && <div className="head-right">
        <Button
          btnText={"Edit"}
          btnClass={"btn-small"}
          rightIcon={<Edit size={16} />}
          btnClick={clickAdd}
        />
      </div>}
    </div>
      <div className="admin-body">
        <div className="admin-body_head">
          <h3>
            Academic Calendar
          </h3>
        </div>
        <Table columns={columns}  data={acadData} />
      </div>
        
    </div>
  )
}

export default AcadCal