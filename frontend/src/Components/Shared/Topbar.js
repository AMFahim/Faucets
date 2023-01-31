import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import UiModal from '../Ui/UiModal';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AvalancheLogo from "./../../Assets/image/Avalanche_Fuji.png";
import FantomLogo from './../../Assets/image/Fantom.png';
import { Link } from 'react-router-dom';


const LinkStyle = {
   textDecoration: "none",
   color: "gray",

}

const Topbar = () => {
  const [age, setAge] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "white", p: 1 }} position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: "#9B1FE9", fontWeight: "600", fontSize: "25px" }}
          >
            Faucets
          </Typography>

          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              size="small"
              inputProps={{ 'aria-label': 'Without label' }}
            >

              <MenuItem value="" className="gap-2">
                <img style={{ height: "20px" }} src="https://faucets1.netlify.app/static/media/logo.abae01ba680d97dacc23a0fb5caa4863.svg" />Arbitrum Rinkeby
              </MenuItem>
              <MenuItem value={10} className="gap-2">
                <img style={{ height: "20px" }} src={AvalancheLogo} alt='Avalanche Fuji' />Avalanche Fuji</MenuItem>
              <MenuItem value={20} className="gap-2">
                <img style={{ height: "20px" }} src='https://faucets1.netlify.app/static/media/BNB-Chain-Testnet.ddefc4ca2aabb89b7006.png' />BNB Chain Testnet
                </MenuItem>
              <MenuItem value={30} className="gap-2">
                <img style={{ height: "20px" }} src={FantomLogo}/>Ethereum Rinkeby
                </MenuItem>
              <MenuItem value={40} className="gap-2"><img style={{ height: "20px" }} src='https://faucets1.netlify.app/static/media/logo.abae01ba680d97dacc23a0fb5caa4863.svg' />Fantom Testnet</MenuItem>
            </Select>
          </FormControl>

          <Button color="secondary" variant="outlined" sx={{ border: "3px solid #9B1FE9", fontWeight: 600 }} onClick={() => setModalShow(true)}>
            <AccountBalanceWalletIcon />Connect Wallet
          </Button>

          <UiModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />

          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar src="/broken-image.jpg" />
              </IconButton>
            </Tooltip>
          </Box>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose}>
              <Link to={"/login"} style={LinkStyle}>Log In</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <Link to={"/signup"} style={LinkStyle}>Sign Up</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <Link to={"/faq"} style={LinkStyle}>FAQ</Link>
            </MenuItem>
            <Divider />
          </Menu>

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Topbar;