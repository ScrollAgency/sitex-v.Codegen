// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MapPinIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MapPinIcon(props: MapPinIconProps) {
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
          "M12 1.5a8.26 8.26 0 00-8.25 8.25c0 7.06 7.5 12.39 7.82 12.614a.75.75 0 00.86 0c.32-.223 7.82-5.555 7.82-12.614A8.26 8.26 0 0012 1.5zm0 5.25a3 3 0 110 6 3 3 0 010-6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MapPinIcon;
/* prettier-ignore-end */
