import styled from "styled-components";

export const Container = styled.div<{ desktop: boolean }>`
  display: flex;
  flex-direction: ${({ desktop }) => (desktop ? "row" : "column")};
`;

export const FullSizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;