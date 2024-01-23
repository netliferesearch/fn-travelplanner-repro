import React, { createContext, /* useEffect, useRef, */ useState } from 'react';
import PropTypes from 'prop-types';

import { config } from './../../config';

const { defaultMyPlan } = config;

// * 'myPlan' is the context that will "hold" all the itinerary data necessary to post it to Sanity Studio.
// However, it's important to point out that the data need to be converted to references when the time
// to post it to Sanity comes!

const PlannerContext = createContext({
  createOrSaveItinerary: false,
  directions: {},
  directionsGeoJson: {},
  myPlan: defaultMyPlan,
  myPlanIsCollaborative: false,
  myPlanLastSaveOrLoad: {},
  myPlanSuccessfullyCreated: false,
  plannerShowGetStarted: true,
  // 'plannerSaveStatus' is set with click event handlers triggered by the user
  plannerSaveStatus: 'saved', // 'unsaved' | 'saved' | 'saving' | 'error'
  // 'plannerSaveStatusSuccess' changes automatically under 2 conditions:
  // 1. It "times out" after the message has been shown for 'x' seconds.
  //    'x' equals 'plannerStatusTimeout', which is set at global config level.
  //    (That's taken care of by the 'useEffect' further down this file)
  // 2. The user has done further changes.
  //    (Yet to be written 'useEffect')
  plannerSaveStatusSuccess: false,
});

const PlannerProvider = ({ children }) => {
  const [createOrSaveItinerary, setCreateOrSaveItinerary] = useState(false);
  const [directions, setDirections] = useState({});
  const [directionsGeoJson, setDirectionsGeoJson] = useState({});
  const [myPlan, setMyPlan] = useState(defaultMyPlan);
  const [myPlanIsCollaborative, setMyPlanIsCollaborative] = useState(false);
  const [myPlanLastSaveOrLoad, setMyPlanLastSaveOrLoad] = useState({});
  const [myPlanSuccessfullyCreated, setMyPlanSuccessfullyCreated] = useState(false);
  const [plannerSaveStatus, setPlannerSaveStatus] = useState('unsaved');
  const [plannerSaveStatusSuccess, setPlannerSaveStatusSuccess] = useState(false);
  const [plannerShowGetStarted, setPlannerShowGetStarted] = useState(true);

  return (
    <PlannerContext.Provider
      value={{
        createOrSaveItinerary,
        setCreateOrSaveItinerary,
        directions,
        setDirections,
        directionsGeoJson,
        setDirectionsGeoJson,
        myPlan,
        setMyPlan,
        myPlanIsCollaborative,
        setMyPlanIsCollaborative,
        myPlanLastSaveOrLoad,
        setMyPlanLastSaveOrLoad,
        myPlanSuccessfullyCreated,
        setMyPlanSuccessfullyCreated,
        plannerSaveStatus,
        setPlannerSaveStatus,
        plannerSaveStatusSuccess,
        setPlannerSaveStatusSuccess,
        plannerShowGetStarted,
        setPlannerShowGetStarted,
      }}
    >
      {children}
    </PlannerContext.Provider>
  );
};

PlannerProvider.propTypes = {
  children: PropTypes.node,
};

export { PlannerContext, PlannerProvider };
