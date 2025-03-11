// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlayCircleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlayCircleIcon(props: PlayCircleIconProps) {
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
          "M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm3.802 10.367l-4.875 3.375a.751.751 0 01-1.177-.617v-6.75a.75.75 0 011.177-.617l4.875 3.375a.75.75 0 010 1.234z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PlayCircleIcon;
/* prettier-ignore-end */
