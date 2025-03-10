// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse185IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse185Icon(props: Ellipse185IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 9"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"4.221"}
        cy={"4.221"}
        r={"4.221"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Ellipse185Icon;
/* prettier-ignore-end */
