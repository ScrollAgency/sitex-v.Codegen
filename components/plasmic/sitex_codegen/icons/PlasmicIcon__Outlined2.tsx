// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Outlined2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Outlined2Icon(props: Outlined2IconProps) {
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
        d={"M12 5.333v2.534l-4 3.066-4-3.066V5.333L8 8.4l4-3.067z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Outlined2Icon;
/* prettier-ignore-end */
