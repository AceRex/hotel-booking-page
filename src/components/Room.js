import React from "react";
import RoomCard from "./RoomCard";
import { useSelector } from "react-redux";

const Room = () => {
	const loading = useSelector((state) => state.room.loading);
	const error = useSelector((state) => state.room.error);
	return (
		<section id="Room" className="py-24">
			<div className="text-center">
				<h2 className="h3"> Our Hotels</h2>
			</div>
			{loading && <Loader />}
			{!loading && !error && <RoomCard />}
			{error && <ErrorMessage message={error} />}
		</section>
	);
};

function Loader() {
	return <p className="uppercase text-center m-8 font-bold text-accent text-3xl"> Loading.....</p>;
}
function ErrorMessage({ message }) {
	return (
		<p className="uppercase text-center m-8 font-bold text-red-500 text-3xl">
			<span>⛔</span> {message}
		</p>
	);
}

export default Room;
