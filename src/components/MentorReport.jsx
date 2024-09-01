import { useState } from 'react';
import AdditionalConcerns from './AdditionalConcerns';
import SessionAssessment from './SessionAssessment';
import SessionNotes from './SessionNotes';
import InterventionRequested from './InterventionRequested';
import { useMenteeData } from '../hooks/useMenteeData';
import AutoComplete from './AutoComplete';

export default function MentorReport() {
  const { data: menteeOptions } = useMenteeData();

  const [ selectedMentee, setSelectedMentee ] = useState(null);

    return (
      <>
      { menteeOptions && 
        <>
          <AutoComplete
            options={menteeOptions}
            label='Select Mentee'
            selected={selectedMentee}
            setSelected={setSelectedMentee}
            optionLabel='name'
          />
          { selectedMentee && (
            <>
              <SessionAssessment />
              <SessionNotes/>
              <AdditionalConcerns />
              <InterventionRequested />
            </>
          )}
        </>
      }
      </>
    )
}