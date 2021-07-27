import { useState } from "react";
import { Header } from "../componentes/Header";

export const HeaderContenedores = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  return (
    <Header
      anchorEl={anchorEl}
      mobileMoreAnchorEl={mobileMoreAnchorEl}
      isMenuOpen={isMenuOpen}
      isMobileMenuOpen={isMobileMenuOpen}
      handleProfileMenuOpen={handleProfileMenuOpen}
      handleMobileMenuClose={handleMobileMenuClose}
      handleMenuClose={handleMenuClose}
      handleMobileMenuOpen={handleMobileMenuOpen}
    />
  );
};
