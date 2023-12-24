import styled from "styled-components";
type Props = {
  status?: Boolean;
};
export const Container = styled.div`
  height: 100%;
  overflow: hidden;
`;
export const DContent = styled.div`
  padding: 15px;
  max-width: 60%;
  margin: 0 auto;
  text-align: center;
  line-height: 24px;
`;
export const PageContainer = styled.div`
  height: 100%;
`;
export const PageContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;
export const TenantList = styled.div`
  text-align: center;
  margin-top: 50vh;
  color: red;
`;

export const FlexedContainer = styled.div`
  flex: 1;
  overflow: hidden;
  .memberSelect {
    padding-bottom: 30px;
  }
`;

export const PageContentWrapper = styled.div`
  height: calc(100vh - 200px);
  overflow: auto;
  &.FromMyAddress {
    height: calc(100vh - 100px);
  }
  &.consultation-questionare {
    height: calc(100vh - 145px);
  }
  &.height {
    height: 100%;
  }
`;
export const HCHeader = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;
export const HCHeaderRow = styled.div`
  display: flex;
  height: 25px;
  padding: 0 17px;
  gap: 6px;
  align-items: center;
  cursor: pointer;
  svg {
    width: 12px;
    height: 12px;
    path {
      stroke: #494e9d;
    }
  }
`;

export const HCHeaderLeft = styled.div`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: #5a5a5a;
  display: flex;
  align-items: center;
`;
export const AccountName = styled.div`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: #494e9d;
  padding-left: 6px;
`;

export const HCHeaderRight = styled.div`
  svg {
    position: relative;
    top: 1px;
  }
`;
