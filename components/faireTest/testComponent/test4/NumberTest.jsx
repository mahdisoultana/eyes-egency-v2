import React from "react";
import styled from "styled-components";
const ElementTest = styled.p`
  transform: scale(${(p) => p.scale || 1});
  > * {
    transform: scale(${(p) => p.scale || 1});
  }
`;
function NumberTest({ lines }) {
  return (
    <ElementTest
      scale=".5"
      className="block text-white text-center text-3xl leading-relaxed"
    >
      Bien voir, à toutes distances
    </ElementTest>
  );
}

export default NumberTest;
