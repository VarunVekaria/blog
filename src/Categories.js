import {
	Button,
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	Typography,
} from "@mui/material";
import React from "react";

export const Categories = () => {
	return (
		<>
			<h1 style={{ fontSize: "32px", padding: "65px 0 0 65px" }}>
				<b>Categories</b>
			</h1>
			<div style={{ fontSize: "32px", padding: "30px 0 30px 65px" }}>
				<Button
					variant="outlined"
					sx={{ height: "60px", width: "120px", margin: "0 30px 10px" }}
				>
					Mental Health
				</Button>
				<Button
					variant="outlined"
					sx={{ height: "60px", width: "120px", margin: "0 30px 10px" }}
				>
					Love
				</Button>
				<Button
					variant="outlined"
					sx={{ height: "60px", width: "120px", margin: "0 30px 10px" }}
				>
					Self-Care
				</Button>
				<Button
					variant="outlined"
					sx={{ height: "60px", width: "120px", margin: "0 30px 10px" }}
				>
					Harmony
				</Button>
				<Button
					variant="outlined"
					sx={{ height: "60px", width: "120px", margin: "0 30px 10px" }}
				>
					LifeStyle
				</Button>
				<Button
					variant="outlined"
					sx={{ height: "60px", width: "120px", margin: "0 30px 10px" }}
				>
					Peace
				</Button>
			</div>
			<div style={{ backgroundColor: "#ECF2FF" }}>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						maxWidth: "80%",
						flexBasis: "33.33%",
						justifyContent: "center",
						margin: "auto",
					}}
				>
					<Card sx={{ maxWidth: 300, marginTop: "20px" }}>
						<CardHeader
							sx={{
								color: "#20293A",
								fontWeight: "100",
								fontFamily: "Poppins",
								fontSize: "3px",
								paddingTop: "20px",
							}}
							title="Plant Based Reusable "
							subheader="Easy to clean, hassle free"
						/>
						<CardMedia
							component="img"
							height="194"
							image="https://static.wixstatic.com/media/ead566_be12cf35ae454264874d19841803bf17~mv2.jpg/v1/fill/w_383,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_be12cf35ae454264874d19841803bf17~mv2.jpg"
							alt="Paella dish"
						/>
						<CardContent>
							<Typography variant="body2" sx={{ color: "#2c645b" }}>
								This impressive paella is a perfect party dish and a fun meal to
								cook together with your guests.
							</Typography>
						</CardContent>
					</Card>
					<Card sx={{ maxWidth: 300, margin: "20px" }}>
						<CardHeader
							sx={{
								color: "#20293A",
								fontWeight: "100",
								fontFamily: "Poppins",
								fontSize: "3px",
								paddingTop: "20px",
							}}
							title="Sustainability Starter Kit"
							subheader="all you need to start the revolution"
						/>
						<CardMedia
							component="img"
							height="194"
							image="https://static.wixstatic.com/media/ead566_a12b3feb70ae46139eee97c99f6ecebf~mv2.jpg/v1/fill/w_1225,h_689,al_c,q_85,usm_0.66_1.00_0.01/ead566_a12b3feb70ae46139eee97c99f6ecebf~mv2.webp"
							alt="Paella dish"
						/>
						<CardContent>
							<Typography variant="body2" sx={{ color: "#2c645b" }}>
								This impressive paella is a perfect party dish and a fun meal to
								cook together with your guests.
							</Typography>
						</CardContent>
					</Card>
					<Card sx={{ maxWidth: 300, margin: "20px" }}>
						<CardHeader
							sx={{
								color: "#20293A",
								fontWeight: "100",
								fontFamily: "Poppins",
								fontSize: "3px",
								paddingTop: "20px",
							}}
							title="Re-usable Bamboo Straws"
							subheader="Earthly Organic Bamboo Straws"
						/>
						<CardMedia
							component="img"
							height="194"
							image="https://static.wixstatic.com/media/ead566_be12cf35ae454264874d19841803bf17~mv2.jpg/v1/fill/w_383,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_be12cf35ae454264874d19841803bf17~mv2.jpg"
							alt="Paella dish"
						/>
						<CardContent>
							<Typography variant="body2" sx={{ color: "#2c645b" }}>
								This impressive paella is a perfect party dish and a fun meal to
								cook together with your guests.
							</Typography>
						</CardContent>
					</Card>
					<Card sx={{ maxWidth: 300, margin: "20px" }}>
						<CardHeader
							sx={{
								color: "#20293A",
								fontWeight: "100",
								fontFamily: "Poppins",
								fontSize: "3px",
								paddingTop: "20px",
							}}
							title="Natural Bamboo Loofah"
							subheader="eco-friendly exfoliating body scrubber"
						/>
						<CardMedia
							component="img"
							height="194"
							image="https://static.wixstatic.com/media/ead566_f6bd1296bdc747c0b1ecd468719a05e4~mv2.jpg/v1/fill/w_1225,h_689,al_c,q_85,usm_0.66_1.00_0.01/ead566_f6bd1296bdc747c0b1ecd468719a05e4~mv2.webp"
							alt="Paella dish"
						/>
						<CardContent>
							<Typography variant="body2" sx={{ color: "#2c645b" }}>
								This impressive paella is a perfect party dish and a fun meal to
								cook together with your guests.
							</Typography>
						</CardContent>
					</Card>
					<Card sx={{ maxWidth: 300, margin: "20px" }}>
						<CardHeader
							sx={{
								color: "#20293A",
								fontWeight: "100",
								fontFamily: "Poppins",
								fontSize: "3px",
								paddingTop: "20px",
							}}
							title="Bamboo ToothBrush"
							subheader="charcoal infused bristles"
						/>
						<CardMedia
							component="img"
							height="194"
							image="https://static.wixstatic.com/media/ead566_15c1739b1d054071b975f1fdee7a8759~mv2.jpg/v1/fill/w_383,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_15c1739b1d054071b975f1fdee7a8759~mv2.jpg"
							alt="Paella dish"
						/>
						<CardContent>
							<Typography variant="body2" sx={{ color: "#2c645b" }}>
								This impressive paella is a perfect party dish and a fun meal to
								cook together with your guests.
							</Typography>
						</CardContent>
					</Card>
					<Card sx={{ maxWidth: 300, margin: "20px" }}>
						<CardHeader
							sx={{
								color: "#20293A",
								fontWeight: "100",
								fontFamily: "Poppins",
								fontSize: "3px",
								paddingTop: "20px",
							}}
							title="Plant Based Reusable Containers"
							subheader="Easy to clean, hassle free"
						/>
						<CardMedia
							component="img"
							height="194"
							image="https://static.wixstatic.com/media/ead566_accfe36a331741fb81daacaa4d00c94d~mv2.jpg/v1/fill/w_383,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_accfe36a331741fb81daacaa4d00c94d~mv2.jpg"
							alt="Paella dish"
						/>
						<CardContent>
							<Typography variant="body2" sx={{ color: "#2c645b" }}>
								This impressive paella is a perfect party dish and a fun meal to
								cook together with your guests.
							</Typography>
						</CardContent>
					</Card>
				</div>
			</div>
		</>
	);
};
