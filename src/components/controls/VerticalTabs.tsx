import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

//export default function VerticalTabs() {
export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        backgroudColor: "#666666",
        display: "flex",
        height: "100%",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="VerticalTabs"
        sx={{
          borderRight: 1,
          borderColor: "darkgray",
          backgroundColor: "aliceblue",
        }}
      >
        <Tab label="日本高配当_銘柄別-分析" {...a11yProps(0)} />
        <Tab label="日本高配当_セクター別-分析" {...a11yProps(1)} />
        <Tab label="Item3" {...a11yProps(2)} />
        <Tab label="Item4" {...a11yProps(3)} />
        <Tab label="Item5" {...a11yProps(4)} />
        <Tab label="Item6" {...a11yProps(5)} />
        <Tab label="Item7" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}></TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
      <TabPanel value={value} index={3}></TabPanel>
      <TabPanel value={value} index={4}></TabPanel>
      <TabPanel value={value} index={5}></TabPanel>
      <TabPanel value={value} index={6}></TabPanel>
    </Box>
  );
}

////export default function VerticalTabs() {
//    export default function VerticalTabs() {
//        const [value, setValue] = React.useState(0);
//
//        const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//          setValue(newValue);
//        };
//
//        return (
//          <Box
//            sx={{
//              flexGrow: 1,
//              bgcolor: "background.paper",
//              backgroudColor: "#666666",
//              display: "flex",
//              height: "80%",
//              weight: "100%",
//            }}
//          >
//            <Tabs
//              orientation="vertical"
//              variant="scrollable"
//              value={value}
//              onChange={handleChange}
//              aria-label="Vertical tabs example"
//              sx={{ borderRight: 1, borderColor: "divider" }}
//            >
//              <Tab label="日本高配当_銘柄別-分析" {...a11yProps(0)} />
//              <Tab label="日本高配当_セクター別-分析" {...a11yProps(1)} />
//              <Tab label="Item Three" {...a11yProps(2)} />
//              <Tab label="Item Four" {...a11yProps(3)} />
//              <Tab label="Item Five" {...a11yProps(4)} />
//              <Tab label="Item Six" {...a11yProps(5)} />
//              <Tab label="Item Seven" {...a11yProps(6)} />
//            </Tabs>
//            <TabPanel value={value} index={0}>
//              Item One
//            </TabPanel>
//            <TabPanel value={value} index={1}>
//              Item Two
//            </TabPanel>
//            <TabPanel value={value} index={2}>
//              Item Three
//            </TabPanel>
//            <TabPanel value={value} index={3}>
//              Item Four
//            </TabPanel>
//            <TabPanel value={value} index={4}>
//              Item Five
//            </TabPanel>
//            <TabPanel value={value} index={5}>
//              Item Six
//            </TabPanel>
//            <TabPanel value={value} index={6}>
//              Item Seven
//            </TabPanel>
//          </Box>
//        );
//      }
