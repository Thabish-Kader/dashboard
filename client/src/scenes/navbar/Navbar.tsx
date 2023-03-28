import { useState } from "react";
import { Link } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";

type Props = {};

const Navbar = (props: Props) => {
	const { palette } = useTheme();
	const [seleted, setSeleted] = useState("dashboard");
	return (
		<FlexBetween
			mb="0.25rem"
			p="0.5rem 0rem"
			color={palette.grey[300]}
			display="flex"
			justifyContent="space-between"
			alignItems="center"
		>
			{/* LEFT SIDE */}
			<FlexBetween gap="0.75rem">
				<PixIcon sx={{ fontSize: "28px" }} />
				<Typography variant="h4" fontSize="16px">
					Finanseer
				</Typography>
			</FlexBetween>

			{/* RIGHT SIDE */}
			<FlexBetween gap="2rem">
				<Box sx={{ "&:hover": { color: palette.primary[100] } }}>
					<Link
						to="/"
						onClick={() => setSeleted("dashboard")}
						style={{
							color:
								seleted === "dashboard"
									? "inherit"
									: palette.grey[700],
							textDecoration: "inherit",
						}}
					>
						dashboard
					</Link>
				</Box>
				<Box sx={{ "&:hover": { color: palette.primary[100] } }}>
					<Link
						to="/predicitons"
						onClick={() => setSeleted("predictions")}
						style={{
							color:
								seleted === "predictions"
									? "inherit"
									: palette.grey[700],
							textDecoration: "inherit",
						}}
					>
						predictions
					</Link>
				</Box>
			</FlexBetween>
		</FlexBetween>
	);
};

export default Navbar;
