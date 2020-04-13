import React from 'react';

const TutorsContext = React.createContext({
  folders: [],
  notes: [],
  handleCount: () => {},
})

export default TutorsContext;