import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";

export default function BottomNavbar() {
  const navigate = useNavigate();

  return (
    <Box className="fixed bottom-0 left-0 right-0">
      <BottomNavigation showLabels>
        <BottomNavigationAction
          onClick={() => {
            navigate("/");
          }}
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          onClick={() => {
            navigate("/Calendar");
          }}
          label="Calendar"
          icon={<CalendarMonthIcon />}
        />
        <BottomNavigationAction
          onClick={() => {
            navigate("/Settings");
          }}
          label="Settings"
          icon={<SettingsIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
