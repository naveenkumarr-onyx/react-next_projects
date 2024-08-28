import React, { useContext } from "react";
import { AuthContext } from "./Context";

const Profile = () => {
  const { users, loading, logOut }: any = useContext(AuthContext);

  return (
    <div className="w-full max-w-sm mx-auto rounded-lg shadow-sm">
      <div className="px-6 py-5">
        {loading ? (
          <p>Loading....</p>
        ) : (
          <>
            {users ? (
              <>
                <div className="flex justify-end gap-3">
                  <p className=" bg-blue-300  text-white w-[30px] rounded-xl flex justify-center items-center">
                    {users.displayName.charAt(0)}
                  </p>
                  <button onClick={logOut}>Logout</button>
                </div>
                <div>
                  <p>Welcome Back! {users.displayName}</p>
                </div>
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
