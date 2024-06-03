import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import AssessmentIcon from "@material-ui/icons/Assessment";
import PaidIcon from "@mui/icons-material/Paid";
import BackupIcon from "@material-ui/icons/Backup";
import SettingsIcon from "@material-ui/icons/Settings";

export const SidebarData = [
  {
    title: "ホーム",
    icon: <HomeIcon />,
    link: "/AssetMonitor/",
  },
  {
    title: "アナリティクス",
    icon: <AssessmentIcon />,
    link: "/AssetMonitor/Analysis",
  },
  {
    title: "家計簿",
    icon: <PaidIcon />,
    link: "/AssetMonitor/HouseholdBudget",
  },
  {
    title: "アップロード",
    icon: <BackupIcon />,
    link: "/AssetMonitor/Upload",
  },
  {
    title: "設定",
    icon: <SettingsIcon />,
    link: "/AssetMonitor/Setting",
  },
];
