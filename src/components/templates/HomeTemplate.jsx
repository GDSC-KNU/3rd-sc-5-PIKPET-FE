import Header from "@components/organisms/Header";
import Footer from "@components/organisms/Footer";
import NavBar from "@components/organisms/NavBar";
import styled from "styled-components";

import ButtonCTA from "../atoms/ButtonCTA";
import ButtonTag from "../atoms/ButtonTag";
import CTAContainer from "../molecules/CTAContainer";

const HomeTemplate = () => {
  return (
    <ResponsiveLayout>
      <Header type="Default" />
      {/* <ButtonCTA type="SecondaryDisabled" title="입력하기" /> */}
      {/* <ButtonTag type="Default" title="#포메라니안"></ButtonTag> */}
      <CTAContainer type="2ButtonUneven" title1="입력하기" title2="신청하기" />
      <ContentLayout>
        <Footer />
        <NavBar />
      </ContentLayout>
    </ResponsiveLayout>
  );
};

const ResponsiveLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  @media (min-width: 768px) {
    width: 360px;

    // 중앙 정렬
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export default HomeTemplate;