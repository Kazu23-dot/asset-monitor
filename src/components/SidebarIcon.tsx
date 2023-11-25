import React, { FC } from "react";
import Icon from "../routes/images/icon.png";

export const SidebarIcon: FC = () => {
  return (
    <div className="SidebarIcon">
      <img src={Icon} />
      <p>programming@gmail.com</p>
    </div>
  );
};

// export default SidebarIcon;
