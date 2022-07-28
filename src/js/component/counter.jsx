import React from "react";
// import { FaStopwatch} from "react-icons/fa";

import "./../../styles/counter.css";

const Counter = (prop) => {

	return (
		<div className="container-counter">
            <div className="position">{prop.counterWithChanges[0]}</div>
            <div className="position">{prop.counterWithChanges[1]}</div>
            <div className="position">{prop.counterWithChanges[2]}</div>
            <div className="position">{prop.counterWithChanges[3]}</div>
            <div className="position">{prop.counterWithChanges[4]}</div>
            <div className="position">{prop.counterWithChanges[5]}</div>
        </div>
	);
};

export default Counter;