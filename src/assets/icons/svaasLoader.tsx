// @ts-nocheck
import { primaryColor, primaryRed, primarySBI } from "@app/styles";
import React from "react";
import styled from "styled-components";
import { useLocation as location } from "@app/utils";
import { getTenant } from "@app/utils";
import svaasloader0 from "@app/assets/icons/svaas-loader/svaasloader0.svg";
import svaasloader1 from "@app/assets/icons/svaas-loader/svaasloader1.svg";
import svaasloader2 from "@app/assets/icons/svaas-loader/svaasloader2.svg";
import svaasloader3 from "@app/assets/icons/svaas-loader/svaasloader3.svg";

type Props = {
  size?: string;
  position?: string;
  Svassreq?: boolean;
};

export default function SvaasLoader({ position, Svassreq }: Props) {
  const Loader = styled.div`
    width: 70px;
    height: 70px;
    background-position: center;
    background-repeat: no-repeat;
    pointer-events: none;
    background-size: 110px;
    background-image: url(${svaasloader0});
    animation: fill 2s linear infinite;
    @keyframes fill {
      0% {
        background-image: url(${svaasloader0});
      }
      25% {
        background-image: url(${svaasloader1});
      }
      50% {
        background-image: url(${svaasloader2});
      }
      75% {
        background-image: url(${svaasloader3});
      }
    }
  `;
  const LoaderOuter = styled.div`
    position: ${position ? position : "absolute"};
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    color: #494e9d;
    font-weight: 600;
    flex-direction: column;
    align-items: center;
    pointer-events: none;
    justify-content: center;
  `;
  return (
    <LoaderOuter>
      <Loader />
      {Svassreq ? "svass" : ""}
      {/* Svass */}
    </LoaderOuter>
  );
}
