import { useState } from "react";
import AutoComplete from "./AutoComplete";

export default function Payroll() {
    const [ mentorSessions, setMentorSessions ] = useState(null);
    const [ classLab, setClassLab ] = useState(null);

    const administrative = 1;
    const total = Number(mentorSessions) + Number(classLab) + Number(administrative);

    return (
      <div>
          <AutoComplete 
              options={[4,5]} 
              label={'Mentor Sessions'} 
              selected={mentorSessions} 
              setSelected={setMentorSessions}
          />
          <AutoComplete 
              options={[0,1,2]} 
              label={'Class/ Lab'} 
              selected={classLab} 
              setSelected={setClassLab}
          />
          <AutoComplete 
              label={'Administrative'} 
              selected={administrative} 
              setSelected={()=>null}
              readOnly
          />
          <AutoComplete 
              label={'Weekly Total'} 
              selected={total} 
              setSelected={()=>null}
              readOnly
          />
      </div>
    )
}
