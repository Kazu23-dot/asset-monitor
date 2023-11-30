import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import AssessmentIcon from "@material-ui/icons/Assessment";
import PaidIcon from "@mui/icons-material/Paid";
import BackupIcon from "@material-ui/icons/Backup";
import SettingsIcon from "@material-ui/icons/Settings";

const homeUrl = process.env.PUBLIC_URL;

export const SidebarData = [
  {
    title: "ホーム",
    icon: <HomeIcon />,
    link: homeUrl + "/",
  },
  {
    title: "アナリティクス",
    icon: <AssessmentIcon />,
    link: homeUrl + "/Analysis",
  },
  {
    title: "家計簿",
    icon: <PaidIcon />,
    link: homeUrl + "/HouseholdBudget",
  },
  {
    title: "アップロード",
    icon: <BackupIcon />,
    link: homeUrl + "/Upload",
  },
  {
    title: "設定",
    icon: <SettingsIcon />,
    link: homeUrl + "/Setting",
  },
];
