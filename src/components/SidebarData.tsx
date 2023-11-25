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
    link: "/",
  },
  {
    title: "アナリティクス",
    icon: <AssessmentIcon />,
    link: "/analitics",
  },
  {
    title: "家計簿",
    icon: <PaidIcon />,
    link: "/household-budget",
  },
  {
    title: "アップロード",
    icon: <BackupIcon />,
    link: "/upload",
  },
  {
    title: "設定",
    icon: <SettingsIcon />,
    link: "/rocket",
  },
];
