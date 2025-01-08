import { useState } from "react";
import { Popover } from "react-tiny-popover";
import { getInitials } from "../../utils/helper";
import { MdLogout } from "react-icons/md";

const ProfileInfo = ({ userInfo, onLogout }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <Popover
        isOpen={isPopoverOpen}
        positions={["bottom"]}
        padding={4}
        content={() => (
          <div className="flex flex-col justify-center px-3 py-4 border bg-white rounded shadow-lg mr-2">
            <p className="text-md font-semibold">{userInfo.fullName}</p>
            <button
              className="flex items-center gap-1 mt-2 text-sm text-white bg-red-400 hover:bg-red-500 rounded p-2 font-medium "
              onClick={onLogout}
            >
              <MdLogout /> Logout
            </button>
          </div>
        )}
        onClickOutside={() => setIsPopoverOpen(false)}
      >
        <div
          onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          className="w-12 h-12 flex items-center justify-center cursor-pointer rounded-full text-slate-950 font-medium bg-slate-100"
        >
          {getInitials(userInfo?.fullName)}
        </div>
      </Popover>
    </div>
  );
};

export default ProfileInfo;
