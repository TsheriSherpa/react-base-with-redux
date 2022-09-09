import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { FaCog, FaUserTie, FaColumns, FaThList } from "react-icons/fa";
import {
	Menu,
	MenuItem,
	ProSidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SubMenu
} from "react-pro-sidebar";

import styled from "styled-components";
import "react-pro-sidebar/dist/css/styles.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { logout } from "/src/redux/reducers/userReducer";
import { authService } from "/src/services/auth-service";
import { Link } from "react-router-dom";

const Menuitem = styled(MenuItem)`
	:hover {
		background-color: dimgrey;
		padding: 2px;
		border-radius: 10px;
		}
	`;

const Sidebar = () => {
	const dispatch = useDispatch(); 
	const navigate = useNavigate();
	const [collapsed, setCollapsed] = useState(false);
	const styles = {
		sideBarHeight: {
			height: "145vh"
		},
		menuIcon: {
			float: "right",
			margin: "10px",
			marginTop: "0px"
		},
		headerItems: {
			display: "flex",
			marginTop: "10px",
			justifyContent: "flex-end"
		},
		brandName: {
			marginRight: "80px"
		}
	};

	const onClickMenuIcon = () => {
		setCollapsed(!collapsed);
		var x = document.getElementById("headerBrandItem");
		var y = document.getElementById("sidebarHeader");
		if (!collapsed) {
			x.style.display = "none";
			y.style.justifyContent = "center";
		} else {
			y.style.justifyContent = "flex-end";
			setTimeout(() => x.style.display = "block", 300);
		}
	};

	const handleBrandClick = () => {
		navigate("/");
	}

	const handleBrandHover = (e) => {
		e.target.style.cursor = "pointer";
	}

	const handleLogout = () => {
		authService.logoutUser();
		dispatch(logout());
		navigate("/login");
	}
		
	return (
		<ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
			<SidebarHeader>
				<div style={styles.headerItems} id="sidebarHeader">
					<div className="headerBrandItem" id ="headerBrandItem" onMouseEnter={(e) => handleBrandHover(e)}>
						<span style={styles.brandName} onClick={handleBrandClick}>Payment Service</span>
						<FiLogOut onClick={handleLogout} />	
					</div>
					<div style={styles.menuIcon}>
						<AiOutlineMenu onClick={onClickMenuIcon}/>
					</div>
				</div>
			</SidebarHeader>

			<SidebarContent>
				<Menu iconShape="square" className="open">
					<Menuitem icon={<FaColumns />}>
					<Link to="/">Dashboard </Link>
					</Menuitem>
					<Menuitem icon={<FaUserTie />}>
						<Link to="/consumer-apps">Consumer Apps </Link>
					</Menuitem>
					<SubMenu title="Stages" icon={<FaThList />}>
						<Menuitem>Offer Letter</Menuitem>
						<MenuItem>Skill Matrix</MenuItem>
						<MenuItem>Know Your Company</MenuItem>
						<MenuItem>Joining Day Information</MenuItem>
						<MenuItem>Feedback</MenuItem>
						<MenuItem>Background Check</MenuItem>
					</SubMenu>
					<Menuitem icon={<FaCog />}>Settings</Menuitem>
				</Menu>
			</SidebarContent>

			<SidebarFooter></SidebarFooter>
		</ProSidebar>
	);
};
export default Sidebar;
