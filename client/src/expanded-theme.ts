import { Palette, PaletteColor } from "@mui/material";

declare module "@mui/material/styles/createPalette" {
	interface PaletteColor {
		[key: number]: string;
	}

	interface Palette {
		tertiary: PaletteColor;
	}
}
