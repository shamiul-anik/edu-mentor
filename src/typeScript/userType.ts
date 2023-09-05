export interface User {
    _id: string;
    name: string;
    email: string;
    tuitionPreference: string;
    photoURL: string;
    class: string;
    location: {
      latitude: number;
      longitude: number;
    };
  }
  