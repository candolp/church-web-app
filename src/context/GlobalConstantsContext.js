import React, {createContext, useState} from "react";


export const GlobalConstantsContext = createContext(null);

export const GlobalConstantsContextProvider = (props) => {
    const applicationConstants  = useState([{
      userTypes : {
          accDefault : 'DEFAULT',
          branchPastor : 'BRANCH_PASTOR',
          headPastor : 'HEAD_PASTOR'
      },
        defaultUser: 'DEFAULT',
        defaultPassword :'DEFAULT',
        defaultChurch : "local-church"
    }]);
return(
<GlobalConstantsContext.Provider value={[applicationConstants]}>
    {props.children}
</GlobalConstantsContext.Provider>
);
};
