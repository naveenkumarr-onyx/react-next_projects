import React, { useContext } from "react";
import { AuthContext } from "./Context";

const Profile = () => {
  const { users, loading, logOut }: any = useContext(AuthContext);
  console.log(users);

  return (
    <div className="w-full max-w-sm mx-auto rounded-lg shadow-sm">
      <div className="px-6 py-5">
        {loading ? (
          <p>Loading....</p>
        ) : (
          <>
            {users ? (
              <>
                <p>Welcome, {users.email}!</p>
                <p>{users.displayName}</p>
                <button onClick={logOut}>Logout</button>
              </>
            ) : (
              <p>No More Users</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
