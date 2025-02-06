export interface ServerUserData {
  // Define fields here based on your data structure
  email: string;
  _id: string;
  firstName?: string;
  lastName?: string;
  userType?: string;
  // other fields as necessary
}

export interface UserData {
  // Define the user data structure for registration
  email: string;
  password: string;
  name?: string;
}

export interface LoginResponse {
  status: number;
  data: {
    email: string;
    accessToken: string;
    _id: string;
    isAdmin: boolean;
    // Other properties if applicable
  };
}
