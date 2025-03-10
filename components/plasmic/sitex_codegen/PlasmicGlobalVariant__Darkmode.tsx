// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type DarkmodeValue = "light" | "dark";
export const DarkmodeContext = React.createContext<DarkmodeValue | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export function useDarkmode() {
  return React.useContext(DarkmodeContext);
}

export default DarkmodeContext;
/* prettier-ignore-end */
