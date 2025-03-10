// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhHeadphonesFillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhHeadphonesFillIcon(props: PhHeadphonesFillIconProps) {
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
          "M21.75 12v5.25a2.25 2.25 0 01-2.25 2.25H18a2.25 2.25 0 01-2.25-2.25V13.5A2.25 2.25 0 0118 11.25h2.217a8.223 8.223 0 00-8.156-7.5H12a8.25 8.25 0 00-8.216 7.5H6a2.25 2.25 0 012.25 2.25v3.75A2.25 2.25 0 016 19.5H4.5a2.25 2.25 0 01-2.25-2.25V12a9.76 9.76 0 0116.677-6.876A9.694 9.694 0 0121.75 12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhHeadphonesFillIcon;
/* prettier-ignore-end */
