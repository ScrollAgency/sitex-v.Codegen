// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse189IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse189Icon(props: Ellipse189IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#vVPaBdVp-RS5a)"}>
        <circle
          cx={"6.221"}
          cy={"6.221"}
          r={"4.15"}
          stroke={"currentColor"}
          strokeWidth={".142"}
        ></circle>
      </g>

      <defs>
        <filter
          id={"vVPaBdVp-RS5a"}
          x={".582"}
          y={".582"}
          width={"11.278"}
          height={"11.278"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feGaussianBlur
            stdDeviation={".709"}
            result={"effect1_foregroundBlur_450_54058"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse189Icon;
/* prettier-ignore-end */
