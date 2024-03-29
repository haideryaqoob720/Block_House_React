import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

// Images
import topHeaderNightIcon from "../../Images/liquidity/topHeaderNightIcon.png";
import topHeaderNotificationsIcon from "../../Images/liquidity/topHeaderNotificationsIcon.png";
import topHeaderEthereumIcon from "../../Images/liquidity/topHeaderEthereumIcon.png";
import topHeaderWalletIcon from "../../Images/liquidity/topHeaderWalletIcon.png";
import topHeaderWalletDropdown from "../../Images/liquidity/topHeaderWalletDropdown.png";
import blockHouseLogo from "../../Images/liquidity/blockHouseLogo.png";
import sideBarNavHomeIcon from "../../Images/liquidity/sideBarNavHomeIcon.png";
import sideBarDealsIcon from "../../Images/liquidity/sideBarDealsIcon.png";
import auctionIcon from "../../Images/liquidity/sideBarActionIcon.png";
import structureIcon from "../../Images/liquidity/sideBarStructureIcon.png";
import sideBarProductsIcon from "../../Images/liquidity/sideBarProductsIcon.png";
// import sideBarLPIcon from "../../Images/liquidity/sideBarLPIcon.png";
import sideBarLPIconNotActive from "../../Images/liquidity/sideBarLPIconNotActive.png";
// import sideBarHomeIconActive from "../../Images/liquidity/sideBarHomeIconActive.png";
// import sideBarStructureIconActive from "../../Images/liquidity/sideBarStructureIconActive.png";
// import sideBarDealsIconActive from "../../Images/liquidity/sideBarDealsIconActive.png";
// import activeAuctionIcon from "../../Images/liquidity/activeAuctionIcon.png";

const CustomSiderBarComp = ({ item }: { item: any }) => {
  return (
    <Box
      style={{
        width: "20px",
        height: "20px",
        background: "#272B37",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "12px",
      }}
    >
      {item}
    </Box>
  );
};

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const drawerWidth: number = 290;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    background: "linear-gradient(322.59deg, #1e1e1e, #232633) !important",
    borderRight: "1px solid rgba(255, 255, 255, 0.12) !important",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton
            onClick={toggleDrawer}
            sx={{
              ...(!open && { display: "none" }),
            }}
          >
            <img
              className="siderBarLogo"
              src={blockHouseLogo}
              alt="blockHouseLogo"
              style={{ marginTop: "12px" }}
            />
            <ChevronLeftIcon sx={{ color: "white" }} />
          </IconButton>
        </Toolbar>
        <Divider />
        <List
          sx={{
            width: "88%",
            margin: "0 auto",
            marginTop: "10px",
            overflow: "hidden",
          }}
        >
          <ListItem disablePadding sx={{ color: "#FFFFFF99", height: "50px" }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#FFFFFF99", marginRight: "-20px" }}>
                <img src={sideBarNavHomeIcon} alt="altForImg" style={{ width: "25px" }} />
                {/* <img
                  src={sideBarHomeIconActive}
                  style={{
                    width: "18px",
                    height: "18px",
                    marginLeft: "3px",
                    marginTop: "4px",
                  }}
                /> */}
              </ListItemIcon>
              <ListItemText
                sx={{
                  ...(!open && { display: "none" }),
                  marginTop: "10px",
                  // color: "white",
                }}
                primary={"Home"}
              />
              <ListItemIcon
                sx={{
                  color: "#fff",
                  marginRight: "-40px",
                  fontWeight: "bold",
                  ...(!open && { display: "none" }),
                }}
              >
                {""}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ color: "#FFFFFF99", height: "50px" }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#FFFFFF99", marginRight: "-20px" }}>
                <img src={sideBarDealsIcon} alt="altForImg" style={{ width: "22px" }} />
                {/* <img
                  src={sideBarDealsIconActive}
                  style={{ width: "15px", marginLeft: "3px", marginTop: '-2px' }}
                /> */}
              </ListItemIcon>
              <ListItemText
                sx={{
                  ...(!open && { display: "none" }),
                  // color: "white",
                }}
                primary={"Deals"}
              />
              <ListItemIcon
                sx={{
                  color: "#fff",
                  marginRight: "-40px",
                  fontWeight: "bold",
                  ...(!open && { display: "none" }),
                }}
              >
                <CustomSiderBarComp item="9" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ color: "#FFFFFF99", height: "50px" }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#FFFFFF99", marginRight: "-20px" }}>
                <img src={auctionIcon} alt="altForImg" style={{ width: "25px" }} />
                {/* <img
                  src={activeAuctionIcon}
                  style={{
                    width: "18px",
                    height: "19px",
                    marginLeft: "4px",
                    marginTop: "-2px",
                  }}
                /> */}
              </ListItemIcon>
              <ListItemText
                sx={{
                  ...(!open && { display: "none" }),
                  // color: "white",
                }}
                primary={"Auctions"}
              />
              <ListItemIcon
                sx={{
                  color: "#fff",
                  marginRight: "-40px",
                  fontWeight: "bold",
                  ...(!open && { display: "none" }),
                }}
              >
                <CustomSiderBarComp
                  item={
                    <LockOutlinedIcon
                      sx={{
                        fontSize: "18px",
                        fontWeight: "normal !important",
                        color: "#95969B",
                      }}
                    />
                  }
                />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <Box
          sx={{
            "& .MuiPaper-rounded": {
              border: `1px solid rgba(255, 255, 255, 0.12)`,
              width: "90%",
              maxWidth: "90%",
              mx: "13px !important",
              p: "14px",
              borderRadius: "8px !important",
              marginTop: "-4px !important",
            },
            "& .MuiButtonBase-root": {
              padding: "0",
            },
            "& .MuiPaper-root": {
              // m: `0 20px !important`,
            },
            ...(!open && { marginLeft: "-10px" }),
          }}
        >
          <Accordion
            defaultExpanded
            sx={{
              background: "transparent",
              color: "#FFFFFF99",
              width: "90%",
              p: "0px !important",
            }}
          >
            <AccordionSummary
              sx={{ mt: 0 }}
              // className="sideBarBoxItemsItem sideBarBoxItemsItemActive"
              className="sideBarBoxItemsItem"
              expandIcon={
                <ExpandMoreOutlinedIcon
                  sx={{ color: "#FFFFFF99", ...(!open && { display: "none" }) }}
                />
              }
            >
              <ListItemButton>
                <ListItemIcon sx={{ color: "#FFFFFF99", marginRight: "-20px" }}>
                  <img src={sideBarProductsIcon} alt="altForImg" width="20px" height="20px" />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    ...(!open && { display: "none" }),
                  }}
                  primary="Products"
                />
              </ListItemButton>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 0, mt: "-1px", mb: "-7px" }}>
              {/* <ListItemButton sx={{ mb: 1 }} className="sideBarBoxItemsItem sideBarBoxItemsItemActive"> */}
              <ListItemButton sx={{ mb: 1 }} className="sideBarBoxItemsItem">
                <ListItemIcon sx={{ color: "#FFFFFF99", marginRight: "-20px" }}>
                  {/* <img src={sideBarLPIcon} width="20px" height="20px" /> */}
                  <img
                    src={sideBarLPIconNotActive} alt="sideBarLPIconNotActive"
                    width="20px"
                    height="20px"
                  />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    ...(!open && { display: "none" }),
                    // color: 'white'
                  }}
                  primary="LP"
                />
              </ListItemButton>
              <ListItemButton
                sx={{ mb: -1, mt: "-2px" }}
                className="sideBarBoxItemsItem"
                // className="sideBarBoxItemsItem sideBarBoxItemsItemActive"
              >
                <ListItemIcon sx={{ color: "#FFFFFF99", marginRight: "-20px" }}>
                  <img src={structureIcon} alt="structureIcon" width="20px" height="20px" />
                  {/* <img
                    src={sideBarStructureIconActive}
                    width="20px"
                    height="20px"
                  /> */}
                </ListItemIcon>
                <ListItemText
                  sx={{
                    ...(!open && { display: "none" }),
                    // color: 'white'
                  }}
                  primary="Structure"
                />
              </ListItemButton>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Drawer>

      {/* HEADER%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}

      <AppBar
        position="absolute"
        open={open}
        sx={{
          backgroundColor: "transparent",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          // zIndex: '999'
        }}
      >
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Container maxWidth="xl">
            <IconButton color="inherit" sx={{ float: "right", height: "72px" }}>
              <Box className="insidetopHeader">
                <Box className="siderBarNavItemRightBox">
                  <Box>
                    <img
                      src={topHeaderNightIcon}
                      alt="topHeaderNightIcon"
                      style={{ position: "relative", top: "2px" }}
                    />
                  </Box>
                </Box>
                <Box className="siderBarNavItemRightBox">
                  <Box>
                    <img
                      style={{ position: "relative", top: "1px" }}
                      src={topHeaderNotificationsIcon}
                      alt="topHeaderNightIcon"
                    />
                  </Box>
                </Box>
                <Box className="siderBarNavItemRightBox">
                  <Box style={{ position: "relative", top: "4px" }}>
                    <img src={topHeaderEthereumIcon} alt="topHeaderNightIcon" />
                  </Box>
                </Box>
                <Box className="siderBarNavItemRightBox topHeaderWalletBox">
                  <span>
                    <img
                      className="topHeaderWalletIcon"
                      src={topHeaderWalletIcon}
                      alt="topHeaderNightIcon"
                    />
                    <span>0x6e07 ... 137e</span>
                    <img
                      className="topHeaderWalletDropdown"
                      src={topHeaderWalletDropdown}
                      alt="topHeaderWalletDropdown"
                    />
                  </span>
                </Box>
              </Box>
            </IconButton>
          </Container>
          {/* <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        Dashboard
      </Typography>
      <IconButton color="inherit">
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton> */}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
