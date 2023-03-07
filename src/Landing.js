import React from "react";
import img from "./biz.svg";
import img2 from "./biz2.svg";
import img3 from "./biz3.svg";

export const Landing = () => {
	return (
		<>
			{/* <img
						src="https://gratisography.com/wp-content/uploads/2023/01/gratisography-frog-racer-free-stock-photo-800x525.jpg"
						alt=""
						height="100%"
						width="100%"
					/> */}

			<div
				style={{
					maxWidth: "100%",
					height: "100vh",
					background:
						"linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)) , url(https://gratisography.com/wp-content/uploads/2023/01/gratisography-frog-racer-free-stock-photo-800x525.jpg)",
					margin: "auto",
					marginTop: "70px",
					backgroundImage:
						"url(https://media.istockphoto.com/id/1184334685/photo/always-brainstorming.jpg?s=612x612&w=0&k=20&c=D8Gde-M3TkbrOuLWj4F8VPmHLgMDULT_VlQ3tsnuVn4=)",
					backgroundSize: "100% 100%",
					backgroundColor: "#20293A",
					backgroundBlendMode: "multiply",
					zIndex: "-2",
				}}
			>
				<div
					style={{
						maxWidth: "60%",
						margin: "auto",
						height: "100vh",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "row",
						color: "white",
					}}
				>
					<p>
						<h1 style={{ fontSize: "32px" }}>
							<b>All in one Event- Management Tool</b>
						</h1>
						<br></br>
						<h2>
							Unify all your event management responsibilities in one place and
							better understand the revenue and profitability of your events.
						</h2>
					</p>
					<div style={{ display: "flex" }}>
						<img
							src={img}
							alt=""
							height="100%"
							width="30%"
							style={{ marginLeft: "50px" }}
						></img>
						<img src={img2} alt="" height="100%" width="30%"></img>
						<img
							src={img3}
							alt=""
							height="100%"
							width="30%"
							style={{ marginTop: "70px" }}
						></img>
					</div>
				</div>
			</div>
		</>
	);
};
