import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaCog, FaUserTie, FaColumns, FaThList } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import {
	Menu,
	MenuItem,
	ProSidebar,
	SidebarHeader,
	SubMenu
} from "react-pro-sidebar";

import styled from "styled-components";
import "react-pro-sidebar/dist/css/styles.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { logout } from "/src/redux/reducers/userReducer";
import { authService } from "/src/services/auth-service";

const Menuitem = styled(MenuItem)`
	:hover {
		background-color: #ffdb58;
		padding: 5px;
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

	const handleLogout = () => {
		authService.logoutUser();
		dispatch(logout());
		navigate("/login");
	}
		
	return (
		<ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
			<SidebarHeader>
				<div style={styles.headerItems} id="sidebarHeader">
					<div className="headerBrandItem" id ="headerBrandItem">
						<span style={styles.brandName}>Payment Service</span>
						<FiLogOut onClick={handleLogout} />	
					</div>
					<div style={styles.menuIcon}>
						<AiOutlineMenu onClick={onClickMenuIcon}/>
					</div>
				</div>
			</SidebarHeader>
			<Menu iconShape="square">
				<Menuitem icon={<FaColumns />}> Dashboard</Menuitem>
				<Menuitem icon={<FaUserTie />} href="/employees">
					Employees
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
		</ProSidebar>
	);
};
export default Sidebar;
