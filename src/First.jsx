import React, { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { MdCheckBox, MdCheck } from "react-icons/md";
import { AiFillPlusSquare, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function First() {
  const [check, setCheck] = useState(true);
  const [close, setClose] = useState(true);

  return (
    <Root>
      <Page>
        <BannerTop></BannerTop>
        {close ? (
          <Banner>
            <Moneybag>π°</Moneybag>
            <BannerText>μ§κΈ βλκ΅¬λ μΈκΈβμ κ°μνλ©΄ νλ¬ λ¬΄λ£!</BannerText>
            <BannerClose onClick={() => setClose(false)}></BannerClose>
          </Banner>
        ) : (
          <HeaderJoin>
            <HeaderTitle>λκ΅¬λ μΈκΈ</HeaderTitle>
            <Link to="/signup">
              <HeaderJoinBtn>νμκ°μ</HeaderJoinBtn>
            </Link>
          </HeaderJoin>
        )}
        <ContainerSky>
          <Titlebox1>
            <h1>λκ΅¬λ λμμ</h1>
            <Bed>π</Bed>
            <h1>μΈκΈ κ΄λ¦¬</h1>
          </Titlebox1>
          <Paragraph1>
            <p>μΈκΈκ΄λ¦¬μ λμ§νΈ μ νμ ν΅ν</p>
            <p>μΈλ¬΄ μ¦λΉμλ£μ κ°νΈνμ μ μΈμ κ²½ν.</p>
            <p>μ¬μ₯λμ΄ μ¬μμ μ§μ€ν  μ μλλ‘ λκ΅¬λ μΈκΈμ΄ ν¨κ»ν©λλ€.</p>
          </Paragraph1>
          <Link to="/signup">
            <Join>νμκ°μ</Join>
          </Link>
          <Link to="/login">
            <Login>λ‘κ·ΈμΈ</Login>
          </Link>
        </ContainerSky>
        <ContainerWhite>
          <Letters>
            <TitleBlue>
              <h2>μ¬μ₯λμ</h2>
              <h2>μ¬μνκΈ°λ</h2>
              <h2>λ°μλκΉ</h2>
            </TitleBlue>
            <Paragraph2>
              <p>μΈλ¬΄μ¬ μμ΄ νΌμ λλ΄λ μΈκΈκ΄λ¦¬</p>
              <p>μΈλ¬΄μ¬ λΉμ©μ μλΌκ³  λ§μΆ€ μ μΈ ννκΉμ§!</p>
              <p>μ νλ², Nμ‘λ¬, νλ¦¬λμμκ²λ</p>
              <p>μ΅μ νλ μΈκΈκ΄λ¦¬ μλΉμ€λ₯Ό λ§λλ³΄μΈμ</p>
            </Paragraph2>
          </Letters>
          <Phone src="img/phone.png" />
        </ContainerWhite>
        <Yellowbox1>
          <EmojiBox>
            <Frown>π«</Frown>
            <Flyingmoney>πΈ</Flyingmoney>
          </EmojiBox>
          <LettersLeft>
            <TitleBlue>
              <Ch2>λ³΅μ‘ν μΈκΈμ μ§μ³€λ€λ©΄,</Ch2>
              <Ch2>
                <Mark>λκ΅¬λ μΈκΈ</Mark>μ μμνμΈμ!
              </Ch2>
            </TitleBlue>
            <Paragraph2>
              <p>μ’ν©μλμΈ, λΆκ°κ°μΉμΈ, μμ²μΈ, 4λλ³΄νμ΄ μμ§λ ν·κ°λ¦°λ€.</p>
              <p>μΈκΈ μ κ³  λ μ§λ₯Ό λμ³ μΈκΈ ν­νμ λ§μ μ μ΄ μλ€.</p>
              <p>μΈκΈ λ©λΆμ νμν μ¦λΉ μλ£λ€μ μ΄λ»κ² μ€λΉν μ§ λͺ¨λ₯΄κ² λ€.</p>
              <p>μ μΈλ₯Ό μν λΉμ©μ²λ¦¬ λ°©λ²μ λͺ¨λ₯΄κ² λ€.</p>
            </Paragraph2>
          </LettersLeft>
        </Yellowbox1>
        <ContainerColumnCenter>
          <LettersLeft>
            <TitleBlue>
              <h2>λμμ λλ΄λ</h2>
              <h2>λ³΅μλΆκΈ°μ₯λΆ</h2>
            </TitleBlue>
            <Paragraph2>
              <p>
                μ’ν©μλμΈλ₯Ό 20% μ μΈν  μ μλ λ³΅μλΆκΈ°μ₯λΆ μμ±μ μμμΌλ‘
              </p>
              <p>μΈκΈ λ©λΆμΌκ³Ό μΈμ νν λ±μ μλ €λλ¦½λλ€.</p>
            </Paragraph2>
          </LettersLeft>
          <BlueBox>
            <Titlebox3>
              <OpaqueText>μΈλ¬΄μ¬μκ² λ§‘κΈ°λ λ³΅μλΆκΈ°μ₯λΆ,</OpaqueText>
              <OpaqueText>λκ΅¬λ μΉ¨λμ λμ 5λΆλ§μ μμ±νλ</OpaqueText>
              <h3>λ³΅μλΆκΈ° κ°νΈ μμ± μλΉμ€</h3>
            </Titlebox3>
            <Phonebox>
              <Customimg src="img/1.png"></Customimg>
            </Phonebox>
          </BlueBox>
          <Skybox>
            <Titlebox4>
              <OpaqueText>λ³΅μλΆκΈ°μ₯λΆκ° μ²μμ΄μλλΌλ</OpaqueText>
              <OpaqueText>κ±±μ νμ§ λ§μΈμ</OpaqueText>
              <h3>λΉμ© μ²λ¦¬ κ°λ₯ λ΄μ­ μλ΄</h3>
            </Titlebox4>
            <Rightimg src="img/2.png"></Rightimg>
          </Skybox>
          <Skybox>
            <Titlebox4>
              <OpaqueText>λ³΅μ‘ν μ¦λΉμλ£ κ΄λ¦¬λ₯Ό</OpaqueText>
              <OpaqueText>νλ²μ λλ΄μΈμ</OpaqueText>
              <h3>μμ λ³νκ³Ό μλ₯ μ μ₯ μλΉμ€</h3>
            </Titlebox4>
            <Rightimg src="img/3.png"></Rightimg>
          </Skybox>
        </ContainerColumnCenter>
        <ContainerColumnCenter>
          <LettersLeft>
            <TitleBlue>
              <h2>μΈκΈ ν­νμ νΌνκ³ </h2>
              <h2>μΈμ ννλ§ μ±κΈ°μΈμ</h2>
            </TitleBlue>
            <Paragraph2>
              <p>μλ¦Όμ ν΅ν΄ κ°μ°μΈ ν­νμ λ§λ μΈκΈκ΄λ¦¬ μλΉμ€μ</p>
              <p>κ°μΈ λ§μΆ€ν μΈμ νν μλ¦Ό</p>
            </Paragraph2>
          </LettersLeft>
          <Skybox>
            <Titlebox4>
              <OpaqueText>μ§κΈλͺμΈμ, μμ²μΈ, λ³΄νλ£ λ±</OpaqueText>
              <h3>λ§€μ μΈκΈ λ©λΆ μλ¦Ό</h3>
            </Titlebox4>

            <Rightimg src="img/4.png"></Rightimg>
          </Skybox>
          <Skybox>
            <Titlebox4>
              <OpaqueText>μ°κ° μΈλ¬΄μΌμ μ λ§μΆ° κ΄λ¦¬νλλ‘ </OpaqueText>
              <h3>μ° 2ν λΆκ°μΈ λ©λΆ μλ¦Ό</h3>
            </Titlebox4>

            <Rightimg src="img/5.png"></Rightimg>
          </Skybox>
          <Skybox>
            <Titlebox4>
              <OpaqueText>κ΅­κ°μμ μ§μνλ</OpaqueText>
              <OpaqueText>μΈμ ννμ λμΉμ§ μλλ‘</OpaqueText>
              <h3>μ§μμ¬μκ³Ό κ΅­κ° μ§μλΉ μλ¦Ό</h3>
            </Titlebox4>

            <Rightimg src="img/6.png"></Rightimg>
          </Skybox>
        </ContainerColumnCenter>
        <Yellowbox2>
          <LettersLeft>
            <TitleBlue>κ°κ²© μ μ±</TitleBlue>
            <Paragraph2>
              νμ¬ κ·λͺ¨μ μ¬μ© λͺ©μ μ λ§μΆ° μμ λ‘­κ² κ°κ²© νλμ μ ννμΈμ.
            </Paragraph2>
          </LettersLeft>
          <Whitebox>
            {check ? (
              <BlueCheckbox onClick={() => setCheck(false)}></BlueCheckbox>
            ) : (
              <GrayPlusbox onClick={() => setCheck(true)}></GrayPlusbox>
            )}
            <ContainerColumnCenter>
              <Styledemoji>π</Styledemoji>
              <Titlebox5>μ¬μΈμ μΈκΈκ΄λ¦¬</Titlebox5>
              <Graytext>λ³΅μλΆκΈ° κ°νΈ μμ± μλΉμ€</Graytext>
              <Pricetext1>
                <MarkMoney>10,000</MarkMoney>
                <Pricetext2>μ</Pricetext2>
              </Pricetext1>
            </ContainerColumnCenter>
            <Border></Border>
            <ContainerRow>
              {check ? <BlueCheck></BlueCheck> : <GrayPlus></GrayPlus>}
              <Graytext>λ³΅μλΆκΈ° κ°νΈ μμ± μλΉμ€</Graytext>
            </ContainerRow>
            <ContainerRow>
              {check ? <BlueCheck></BlueCheck> : <GrayPlus></GrayPlus>}
              <Graytext>μ μΆ μλ₯ λ³νμ ν΅ν μ¦λΉ μλ₯ κ΄λ¦¬</Graytext>
            </ContainerRow>
            <ContainerRow>
              {check ? <BlueCheck></BlueCheck> : <GrayPlus></GrayPlus>}
              <Graytext>λΉμ© μ²λ¦¬ μλ΄λ‘ μ μΈ</Graytext>
            </ContainerRow>
            <ContainerRow>
              {check ? <BlueCheck></BlueCheck> : <GrayPlus></GrayPlus>}
              <Graytext>λ§€μ μ§κΈλͺμΈμ, μμ²μΈ λ©λΆ μλ¦Ό</Graytext>
            </ContainerRow>
            <ContainerRow>
              {check ? <BlueCheck></BlueCheck> : <GrayPlus></GrayPlus>}
              <Graytext>μ° 2ν λΆκ°μΈ λ©λΆ μλ¦Ό</Graytext>
            </ContainerRow>
            <ContainerRow>
              {check ? <BlueCheck></BlueCheck> : <GrayPlus></GrayPlus>}
              <Graytext>κ°λ₯ μ§μ μ¬μ λ° κ΅­κ° μ§μλΉ λ§μΆ€ μλ¦Ό</Graytext>
            </ContainerRow>
            <Border></Border>
            {check ? (
              <GrayPlusbox onClick={() => setCheck(false)}></GrayPlusbox>
            ) : (
              <BlueCheckbox onClick={() => setCheck(true)}></BlueCheckbox>
            )}
            <ContainerColumnCenter>
              <Styledemoji>π₯</Styledemoji>
              <Titlebox6>μ νλ² λ§μΆ€ μΈκΈκ΄λ¦¬</Titlebox6>
              <Graytext>ν΄μΈ μΈκΈ λ§μΆ€</Graytext>
              <Pricetext1>
                <MarkMoney>12,000</MarkMoney>
                <Pricetext2>μ</Pricetext2>
              </Pricetext1>
            </ContainerColumnCenter>
            <Border></Border>
            <ContainerRow>
              {check ? <GrayPlus></GrayPlus> : <BlueCheck></BlueCheck>}
              <Graytext>λ³΅μλΆκΈ° κ°νΈ μμ± μλΉμ€</Graytext>
            </ContainerRow>
            <ContainerRow>
              {check ? <GrayPlus></GrayPlus> : <BlueCheck></BlueCheck>}
              <Graytext>μ μΆ μλ₯ λ³νμ ν΅ν μ¦λΉ μλ₯ κ΄λ¦¬</Graytext>
            </ContainerRow>
            <ContainerRow>
              {check ? <GrayPlus></GrayPlus> : <BlueCheck></BlueCheck>}
              <Graytext>μ νλ² λ§μΆ€ν μ μΈ λ°©λ² μλ΄</Graytext>
            </ContainerRow>
          </Whitebox>
        </Yellowbox2>
        <FooterFixed>
          <Question>?</Question>
        </FooterFixed>
        <FooterInfo>
          <Footertext>λκ΅¬λ μΈκΈ | μ¬νλ² λ¦¬ | λνμ: κΉμ°¬μ </Footertext>
          <Footertext>
            κ°μΈμ λ³΄λ³΄νΈμ±μμ: κΉμκ° | λ¬Έμ: 02-000-0000
          </Footertext>
          <Footertext>μκ°λνκ΅ λ©μμ΄ μ¬μμ²λΌ</Footertext>
        </FooterInfo>
      </Page>
    </Root>
  );
}
const Ch2 = styled.h2`
  font-size: 25px;
`;
const Root = styled.div`
  background: #ffffff;
  font-family: "NotoSans";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Customimg = styled.img`
  width: 100%;
`;

const Rightimg = styled.img`
  width: 90%;
  transform: translate(20%, 9px);
`;
const Page = styled.div`
  background: #ffffff;
  width: 600px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const BannerTop = styled.header`
  height: 24px;
`;

const Banner = styled.header`
  background: #fffbf2;
  height: 56px;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Moneybag = styled.h1`
  font-size: 24px;
  margin-right: 8px;
`;

const BannerText = styled.h1`
  font-size: 14px;
  margin-right: 42px;
`;

const BannerClose = styled(VscChromeClose)`
  cursor: pointer;
  font-size: 24px;
  color: #666666;
  background: none;
  border: none;
`;

const FooterFixed = styled.footer`
  position: fixed;
  top: 90vh;
  height: 64px;
  width: 600px;
  @media screen and (max-width: 600px) {
    width: 100vw;
  }
  display: flex;
  justify-content: right;
  align-items: right;
`;

const Question = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  border-radius: 50%;
  margin-right: 5%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 8px 10px rgba(0, 0, 0, 0.25);
  color: #2a1d89;
  text-align: center;
  font-family: NotoSans;
  font-size: 24px;
  font-weight: bold;
`;

const ContainerSky = styled.div`
  background: #f1f5ff;
  height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Titlebox1 = styled.div`
  font-family: "GongGothicBold";
  font-size: 34px;
  color: #2a1d89;
  line-height: 43px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Bed = styled.div`
  font-size: 81px;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const Paragraph1 = styled.div`
  font-size: 12px;
  color: #2a1d89;
  line-height: 17.38px;
  margin-top: 8px;
  margin-bottom: 32px;
  text-align: center;
`;

const Join = styled.button`
  cursor: pointer;
  height: 48px;
  width: 200px;
  border: 3px solid #2a1d89;
  border-radius: 10px;
  background: #2a1d89;
  text-align: center;
  font-size: 14px;
  font-weight: 900;
  color: #ffffff;
`;
const Login = styled.button`
  cursor: pointer;
  height: 48px;
  width: 200px;
  border-radius: 10px;
  border: 2px solid #2a1d89;
  background: #f1f5ff;
  text-align: center;
  font-size: 14px;
  color: #2a1d89;
  margin-top: 16px;
`;

const ContainerWhite = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const Letters = styled.div`
  height: 256px;
  width: 233px;
  display: flex;
  flex-direction: column;
`;

const LettersLeft = styled.div`
  width: 309px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;

const TitleBlue = styled.div`
  font-size: 30px;
  margin-top: 24px;
  margin-bottom: 12px;
  color: #2a1d89;
  font-weight: bold;
  line-height: 43px;
`;

const Paragraph2 = styled.div`
  font-size: 12px;
  line-height: 24px;
  margin-bottom: 16px;
`;

const Phone = styled.img`
  width: 183px;
  height: 229px;
  margin-top: 64px;
`;

const HeaderJoin = styled.header`
  top: 0px;
  position: fixed;
  width: 600px;
  @media screen and (max-width: 600px) {
    width: 100vw;
  }
  background: #ffffff;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderTitle = styled.h3`
  font-family: "GongGothicBold";
  font-size: 14px;
  font-weight: bold;
  line-height: 14px;
  color: #2a1d89;
  margin: 24px 72px 20px 0px;
`;

const HeaderJoinBtn = styled.button`
  cursor: pointer;
  height: 32px;
  width: 91px;
  font-size: 12px;
  font-weight: bold;
  line-height: 14px;
  background: #2a1d89;
  border: 3px solid #2a1d89;
  border-radius: 10px;
  color: #ffffff;
  margin: 24px 0px 20px 72px;
  text-align: center;
`;

const ContainerColumnCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Yellowbox1 = styled.div`
  background: #fffbf2;
  height: 448px;
  font-size: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmojiBox = styled.div`
  width: 300px;
  height: 112px;
  display: flex;
`;

const Frown = styled.div`
  font-size: 50px;
  margin-top: 56px;
`;
const Flyingmoney = styled.div`
  font-size: 30px;
  margin-top: 56px;
`;

const Mark = styled.mark`
  color: #2a1d89;
  background: linear-gradient(to top, #f1f5ff 50%, transparent 50%);
`;

const BlueBox = styled.div`
  background: #2a1d89;
  height: 488px;
  // width: 344px;

  padding: 0px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

const Titlebox3 = styled.div`
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
  line-height: 29px;
  margin-top: 32px;
`;

const OpaqueText = styled.h3`
  opacity: 0.7;
`;

const Phonebox = styled.div`
  background: #ffffff;
  height: 336px;
  width: 202px;
  margin-top: 40px;
`;

const Skybox = styled.div`
  padding: 0px 20px;
  background: #f1f5ff;
  padding-bottom: 30px;
  width: 85%;
  border-radius: 10px;
  font-size: 20px;
  margin-bottom: 24px;
  overflow: hidden;
`;

const Titlebox4 = styled.div`
  font-size: 20px;
  color: #2a1d89;
  margin: 15px 5px;
  font-weight: bold;
  line-height: 29px;
`;

const Yellowbox2 = styled.div`
  background: #fffbf2;
  height: 1136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Whitebox = styled.div`
  background: #ffffff;
  height: 978px;
  //   width: 344px;
  padding-top: 8px;
`;

const BlueCheckbox = styled(MdCheckBox)`
  font-size: 32px;
  color: #2a1d89;
  margin-top: 24px;
  margin-left: 26px;
`;

const GrayPlusbox = styled(AiFillPlusSquare)`
  font-size: 32px;
  color: #666666;
  margin-left: 26px;
  margin-top: 24px;
`;

const Styledemoji = styled.div`
  font-size: 32px;
`;

const Titlebox5 = styled.div`
  font-size: 20px;
  color: #2a1d89;
  margin-top: 16px;
  margin-bottom: 8px;
  font-weight: bold;
  line-height: 29px;
`;

const Titlebox6 = styled.div`
  font-size: 20px;
  color: #666666;
  margin-top: 16px;
  margin-bottom: 8px;
  font-weight: bold;
  line-height: 29px;
`;

const Graytext = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #666666;
`;

const Pricetext1 = styled.h3`
  font-size: 35px;
  font-weight: 400;
  line-height: 42px;
  margin-top: 44px;
  color: #091430;
`;

const Pricetext2 = styled.mark`
  font-size: 14px;
  line-height: 20px;
  margin-top: 59px;
  color: #091430;
  background: none;
`;

const MarkMoney = styled.mark`
  font-family: "BarlowCondensed";
  color: #091430;
  background: linear-gradient(to top, #f1f5ff 50%, transparent 50%);
`;

const Border = styled.div`
  border: 1px solid rgba(102, 102, 102, 0.7);
  margin-top: 34px;
  margin-bottom: 24px;
`;

const BlueCheck = styled(MdCheck)`
  font-size: 24px;
  color: #2a1d89;
  margin-right: 16px;
  margin-left: 40px;
`;

const GrayPlus = styled(AiOutlinePlus)`
  font-size: 24px;
  color: #666666;
  margin-right: 16px;
  margin-left: 40px;
`;

const ContainerRow = styled.div`
  display: flex;
  margin-top: 8px;
`;

const FooterInfo = styled.footer`
  width: 600px;
  @media screen and (max-width: 600px) {
    width: 100vw;
  }
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footertext = styled.div`
  font-size: 10px;
  line-height: 20px;
  color: #666666;
`;
