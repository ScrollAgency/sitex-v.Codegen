// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse187IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse187Icon(props: Ellipse187IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"6.37"} cy={"6.37"} r={"6.37"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Ellipse187Icon;
/* prettier-ignore-end */
