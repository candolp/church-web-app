import React,{ useState,createContext } from "react";

export const AuthContext = createContext({
});

export const AuthProvider = (props: any)=> {
    const [userData, setUserData] = useState({
        userLogin: {
            uid: '',
            phone: '',
            lastLogin: '',
            userType: '',
            password: '',
            photoURL: ''
        },
        userDeDetails: {},
        globalConstants: {
            userTypes: {
                accDefault: 'DEFAULT',
                branchPastor: 'BRANCH_PASTOR',
                headPastor: 'HEAD_PASTOR'
            },
            defaultUser: 'DEFAULT',
            defaultPassword: 'DEFAULT',
            defaultChurch: "local-church"
        },
        systemLanguages: [{name:'Twi', key:0},{name:'English', key: 1},{name: 'Ga', key:2},{name: 'Ewe', key:3},{name: 'French', key:4}],
        familyRoles: [{name:'Father', value: 1},{name: 'Mother', value: 2},
            {name: 'Child', value: 3}, {name: 'Grandma', value: 4}, {name: 'Grandpa', value: 5},{name: 'Grandchild', value: 6}, {name: 'Brother', value: 7},
            {name: 'Sister', value: 8}]


    });


    return (

        <AuthContext.Provider value={[userData, setUserData]}>
            {props.children}
        </AuthContext.Provider>
    );
};
