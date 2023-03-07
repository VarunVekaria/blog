import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
export const NewsLetter = () => {
	return (
		<div>
			<div style={{ textAlign: "center" }}>
				<InstagramIcon sx={{ height: "50px", width: "50px", margin: "2%" }} />
				<TwitterIcon sx={{ height: "50px", width: "50px", margin: "2%" }} />
				<WhatsAppIcon sx={{ height: "50px", width: "50px", margin: "2%" }} />
			</div>
			<Typography sx={{ textAlign: "center", fontSize: "2em", margin: "20px" }}>
				<b>Join 5,00,000+ Subscribers</b>
			</Typography>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignContent: "center",
					maxWidth: "80%",
					margin: "auto",
				}}
			>
				<TextField id="filled-basic" label="Enter your name" variant="filled" />
				<Button
					variant="contained"
					sx={{ backgroundColor: "#20293A", marginLeft: "20px" }}
				>
					Subscribe
				</Button>
			</div>
            <Typography sx={{ textAlign: "center", fontSize: "1em", margin: "20px" }}>
				<b>Be a part of our ever-growing community.</b><i> <span style ={{color:"#2563EB"}}>Connect with us on Twitter</span></i>
			</Typography>
		</div>
	);
};
