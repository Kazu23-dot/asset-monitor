import React from "react";
import { slide as Menu } from "react-burger-menu";
import { SidebarData } from "./SidebarData";
import { SidebarIcon } from "./SidebarIcon";

export const SidebarMenu = (props: any) => {
  return (
    <Menu {...props}>
      <div className="Sidebar">
        <SidebarIcon />
        <ul className="SidebarList">
          {SidebarData.map((value, key) => {
            return (
              <li
                key={key}
                id={window.location.pathname == value.link ? "active" : ""}
                className="row"
                onClick={() => {
                  window.location.pathname = value.link;
                }}
              >
                <div id="icon">{value.icon}</div>
                <div id="title">{value.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </Menu>
  );
};

export default SidebarMenu;
