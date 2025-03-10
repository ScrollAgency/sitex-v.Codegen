// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhChartDonutFillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhChartDonutFillIcon(props: PhChartDonutFillIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.25 15.182v6.126a.374.374 0 01-.418.375 9.776 9.776 0 01-7.875-6.047.375.375 0 01.252-.501l5.915-1.588a.375.375 0 01.408.155c.358.519.869.912 1.461 1.126a.374.374 0 01.257.354zm.756-12.932a.75.75 0 00-.756.75v5.25a.745.745 0 00.738.75 3 3 0 011.018 5.827.374.374 0 00-.256.355v6.126a.376.376 0 00.417.375A9.75 9.75 0 0012.006 2.25zm-3 9.515a3 3 0 01.389-1.258V10.5a.75.75 0 00-.284-1.031L4.58 6.849a.75.75 0 00-1.025.276 9.761 9.761 0 00-1.211 6.251.375.375 0 00.469.312l5.926-1.594a.369.369 0 00.27-.33h-.003z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhChartDonutFillIcon;
/* prettier-ignore-end */
