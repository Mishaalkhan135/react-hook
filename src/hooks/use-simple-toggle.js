import React, { useState } from "react";

const ToggleHook = (active = false) => {
	const [isActive, setIsActive] = useState(active);
	console.log({ active });
	return [isActive, setIsActive];
};

export default ToggleHook;
