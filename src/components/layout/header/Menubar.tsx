import { Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

interface MenuBarProps {
  children: React.ReactNode;
}

export const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
  backgroundColor: theme.menubar.darker,
}));

export default function MenuBar(props: MenuBarProps) {
  return (
    <CustomToolbar
      sx={{
        justifyContent: "space-between",
        backgroundColor: "menubar.darker",
      }}
    >
      {props.children}
    </CustomToolbar>
  );
}
