import React, { useState } from 'react';
import { Button, SelectInput, 
  // SelectInput 
} from '../custom-inputs/CustomInputs';
import { Edit } from 'iconsax-react';

import "./adcal.css";
import "../schAdmin/sch-admin.css";
import { terms } from '../charts/Data';
// import Table from '../table/Table';

const AcadCal = ({acadData, clickAdd, teacher}) => {

  const termArr = terms;
  const [plTerm, setPlTerm] = useState(acadData?.term);
  const [plSession, setPlSession] = useState(acadData?.academicSession);
  const sessionArr = [plSession]
  // console.log(plSession);


  return (
    <div className='acad-cal'>
    <div className="sch-admin_head">
      <div className="head-left">
        <SelectInput placeholder={plTerm} setPlaceholder={setPlTerm} opsArr={termArr} />
        {/* <SelectInput placeholder={plSession} setPlaceholder={setPlSession} opsArr={sessionArr} /> */}
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
        <div className="acad-tab_body">
          <div className="acad-tab_head">
            <p>Holiday</p>
            <p>Date</p>
          </div>
          <div className="acad-tab_children">
            <div className="acad-each_tab">
              <p>Resumption Date</p>
              <p>{acadData?.resumptionDate}</p>
            </div>
            <div className="acad-each_tab">
              <p>Mid-Term Dates</p>
              <p>{acadData?.midTermStartDate + " to " + acadData?.midTermEndDate}</p>
            </div>
            <div className="acad-each_tab">
              <p>Vacation Date</p>
              <p>{acadData?.vacationDate}</p>
            </div>
          </div>
        </div>
        {/* <Table columns={columns}  data={acadData} /> */}
      </div>
        
    </div>
  )
}

export default AcadCal