
export class UserLogin {
    'UID': string;
    'phone' : string;
    'lastLogin' : number;
    'userType' : string;
    'password' : string;
    'photoUrl' : string
}

export class UserDetails {
    'UID' : string;
    'fullname' : string;
    'preferredLanguage' : string;
    'location' : string;
    'age' : number;
    'gender' : string;
    'pin' : string;
    'branch' : string
}

export class UserEventHistory {
    'history' : []
}

export class UserPhone {
    'phone' : string;
    'UID' : string;
}
