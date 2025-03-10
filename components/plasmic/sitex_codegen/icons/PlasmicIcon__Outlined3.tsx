// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Outlined3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Outlined3Icon(props: Outlined3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.067 3.4L12.6 1.933 8 6.6 3.4 1.933 1.933 3.4 6.6 8l-4.667 4.6L3.4 14.067 8 9.4l4.6 4.667 1.467-1.467L9.4 8l4.667-4.6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Outlined3Icon;
/* prettier-ignore-end */
