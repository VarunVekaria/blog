import React from "react";
import { useEffect, useState } from "react";
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import db from "./firebase";
import { Video } from "./Video";
import "./HelpMe.css";

export const HelpMe = () => {
	const [reels, setReels] = useState([]);

	useEffect(() => {
		const q = query(collection(db, "blog"));
		onSnapshot(q, (snapshot) => {
			setReels(snapshot.docs.map((doc) => doc.data()));
			console.log(snapshot.docs);
		});
		// console.log(reels);
	}, []);
	return (
		<div>
			<>
				<div className="card" style={{ backgroundColor: "#2563EB" }}>
					{/* <h1>Lets build A ig reels clone</h1> */}
					<div
						style={{
							margin: "20px",
							paddingTop: "20px",
							textAlign: "center",
							color: "white",
						}}
					>
						<h1 style={{ fontSize: "4em" }}>Blogs </h1>
						<br></br>
						<p>
						Click to start playing
						<br></br>
						You can scroll to view other videos.
					</p>
					</div>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						backgroundColor: "#ECF2FF",
						height: "100vh",
					}}
				>
					
					<div className="videos" style={{ marginTop: "100px" }}>
						{reels.map(({ url }) => (
							<Video url={url} />
						))}
					</div>
				</div>
			</>
		</div>
	);
};
