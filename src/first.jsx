import React, { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { MdCheckBox, MdCheck } from "react-icons/md";
import { AiFillPlusSquare, AiOutlinePlus } from "react-icons/ai";
import styled, { createGlobalStyle } from "styled-components";
import { isloggedInVar } from "./apollo";
import GlobalFonts from "./fonts/fonts";
import phoneIcon from "./images/phone.png";

export default function First() {
	const [check, setCheck] = useState(true);
	const [close, setClose] = useState(true);

	return (
		<Root>
			<Page>
				<Banner>
					<Moneybag>💰</Moneybag>
					<BannerText>지금 ‘누구나 세금’에 가입하면 한달 무료!</BannerText>
					<BannerClose onClick={() => setClose(false)}></BannerClose>
					{close ? <Banner></Banner> : null}
				</Banner>
				<ContainerSky>
					<Titlebox1>
						<h1>누구나 누워서</h1>
						<Bed>🛌</Bed>
						<h1>세금 관리</h1>
					</Titlebox1>
					<Paragraph1>
						<p>세금관리의 디지털 전환을 통한</p>
						<p>세무 증빙자료의 간편화와 절세의 경험.</p>
						<p>사장님이 사업에 집중할 수 있도록 누구나 세금이 함께합니다.</p>
					</Paragraph1>
					<Join>회원가입</Join>
					<Login>로그인</Login>
				</ContainerSky>
				<ContainerWhite>
					<Letters>
						<Titlebox2>
							<h2>사장님은</h2>
							<h2>사업하기도</h2>
							<h2>바쁘니까</h2>
						</Titlebox2>
						<Paragraph2>
							<p>세무사 없이 혼자 끝내는 세금관리</p>
							<p>세무사 비용을 아끼고 맞춤 절세 혜택까지!</p>
							<p>유튜버, N잡러, 프리랜서에게도</p>
							<p>최적화된 세금관리 서비스를 만나보세요</p>
						</Paragraph2>
					</Letters>
					<Phone src={phoneIcon} />
				</ContainerWhite>
				<HeaderJoin>
					<Headertitle>누구나 세금</Headertitle>
					<HeaderJoinBtn>회원가입</HeaderJoinBtn>
				</HeaderJoin>
				<Yellowbox1>
					<Emojibox>
						<Frown>😫</Frown>
						<Flyingmoney>💸</Flyingmoney>
					</Emojibox>
					<Titlebox2>
						<h2>복잡한 세금에 지쳤다면,</h2>
						<h2>
							<Mark>누구나 세금</Mark>을 시작하세요!
						</h2>
					</Titlebox2>
					<Paragraph2>
						<p>종합소득세, 부가가치세, 원천세, 4대보험이 아직도 헷갈린다.</p>
						<p>세금 신고 날짜를 놓쳐 세금 폭탄을 맞은 적이 있다.</p>
						<p>세금 납부에 필요한 증빙 자료들을 어떻게 준비할지 모르겠다.</p>
						<p>절세를 위한 비용처리 방법을 모르겠다.</p>
					</Paragraph2>
				</Yellowbox1>
				<ContainerColumnCenter>
					<Titlebox2>
						<h2>누워서 끝내는</h2>
						<h2>복식부기장부</h2>
					</Titlebox2>
					<Paragraph2>
						<p>종합소득세를 20% 절세할 수 있는 복식부기장부 작성을 시작으로</p>
						<p>세금 납부일과 세제혜택 등을 알려드립니다.</p>
					</Paragraph2>
					<Bluebox>
						<Titlebox3>
							<Opaquetext>세무사에게 맡기던 복식부기장부,</Opaquetext>
							<Opaquetext>누구나 침대에 누워 5분만에 작성하는</Opaquetext>
							<h3>복식부기 간편 작성 서비스</h3>
						</Titlebox3>
						<Phonebox></Phonebox>
					</Bluebox>
					<Skybox>
						<Titlebox4>
							<Opaquetext>복식부기장부가 처음이시더라도</Opaquetext>
							<Opaquetext>걱정하지 마세요</Opaquetext>
							<h3>비용 처리 가능 내역 안내</h3>
						</Titlebox4>
					</Skybox>
					<Skybox>
						<Titlebox4>
							<Opaquetext>복잡한 증빙자료 관리를</Opaquetext>
							<Opaquetext>한번에 끝내세요</Opaquetext>
							<h3>엑셀 변환과 서류 저장 서비스</h3>
						</Titlebox4>
					</Skybox>
				</ContainerColumnCenter>
				<ContainerColumnCenter>
					<Titlebox2>
						<h2>세금 폭탄은 피하고</h2>
						<h2>세제혜택만 챙기세요</h2>
					</Titlebox2>
					<Paragraph2>
						<p>알림을 통해 가산세 폭탄을 막는 세금관리 서비스와</p>
						<p>개인 맞춤형 세제혜택 알림</p>
					</Paragraph2>
					<Skybox>
						<Titlebox4>
							<Opaquetext>지급명세서, 원천세, 보험료 등</Opaquetext>
							<h3>매월 세금 납부 알림</h3>
						</Titlebox4>
					</Skybox>
					<Skybox>
						<Titlebox4>
							<Opaquetext>연간 세무일정에 맞춰 관리하도록 </Opaquetext>
							<h3>연 2회 부가세 납부 알림</h3>
						</Titlebox4>
					</Skybox>
					<Skybox>
						<Titlebox4>
							<Opaquetext>국가에서 지원하는</Opaquetext>
							<Opaquetext>세제혜택을 놓치지 않도록</Opaquetext>
							<h3>지원사업과 국가 지원비 알림</h3>
						</Titlebox4>
					</Skybox>
				</ContainerColumnCenter>
				<Yellowbox2>
					<Titlebox2>가격 정책</Titlebox2>
					<Paragraph2>
						회사 규모와 사용 목적에 맞춰 자유롭게 가격 플랜을 선택하세요.
					</Paragraph2>
					<Whitebox>
						{check ? (
							<BlueCheckbox onClick={() => setCheck(false)}></BlueCheckbox>
						) : (
							<GrayPlusbox onClick={() => setCheck(true)}></GrayPlusbox>
						)}
						<ContainerColumnCenter>
							<Styledemoji>📑</Styledemoji>
							<Titlebox5>올인원 세금관리</Titlebox5>
							<Graytext>복식부기 간편 작성 서비스</Graytext>
							<Pricetext1>
								<Mark>10,000</Mark>
								<Pricetext2>원</Pricetext2>
							</Pricetext1>
						</ContainerColumnCenter>
						<Border></Border>
						<ContainerRow>
							{check ? <BlueCheck></BlueCheck> : <GrayPlus></GrayPlus>}
							<Graytext>복식부기 간편 작성 서비스</Graytext>
						</ContainerRow>
						<ContainerRow>
							{check ? <BlueCheck></BlueCheck> : <GrayPlus></GrayPlus>}
							<Graytext>제출 서류 변환을 통한 증빙 서류 관리</Graytext>
						</ContainerRow>
						<ContainerRow>
							{check ? <BlueCheck></BlueCheck> : <GrayPlus></GrayPlus>}
							<Graytext>비용 처리 안내로 절세</Graytext>
						</ContainerRow>
						<ContainerRow>
							{check ? <BlueCheck></BlueCheck> : <GrayPlus></GrayPlus>}
							<Graytext>매월 지급명세서, 원천세 납부 알림</Graytext>
						</ContainerRow>
						<ContainerRow>
							{check ? <BlueCheck></BlueCheck> : <GrayPlus></GrayPlus>}
							<Graytext>연 2회 부가세 납부 알림</Graytext>
						</ContainerRow>
						<ContainerRow>
							{check ? <BlueCheck></BlueCheck> : <GrayPlus></GrayPlus>}
							<Graytext>가능 지원 사업 및 국가 지원비 맞춤 알림</Graytext>
						</ContainerRow>
						<Border></Border>
						{check ? (
							<GrayPlusbox onClick={() => setCheck(false)}></GrayPlusbox>
						) : (
							<BlueCheckbox onClick={() => setCheck(true)}></BlueCheckbox>
						)}
						<ContainerColumnCenter>
							<Styledemoji>🎥</Styledemoji>
							<Titlebox6>유튜버 맞춤 세금관리</Titlebox6>
							<Graytext>해외 세금 맞춤</Graytext>
							<Pricetext1>
								<Mark>12,000</Mark>
								<Pricetext2>원</Pricetext2>
							</Pricetext1>
						</ContainerColumnCenter>
						<Border></Border>
						<ContainerRow>
							{check ? <GrayPlus></GrayPlus> : <BlueCheck></BlueCheck>}
							<Graytext>복식부기 간편 작성 서비스</Graytext>
						</ContainerRow>
						<ContainerRow>
							{check ? <GrayPlus></GrayPlus> : <BlueCheck></BlueCheck>}
							<Graytext>제출 서류 변환을 통한 증빙 서류 관리</Graytext>
						</ContainerRow>
						<ContainerRow>
							{check ? <GrayPlus></GrayPlus> : <BlueCheck></BlueCheck>}
							<Graytext>유튜버 맞춤형 절세 방법 안내</Graytext>
						</ContainerRow>
					</Whitebox>
				</Yellowbox2>
				<FooterFixed>
					<Question>?</Question>
				</FooterFixed>
				<FooterInfo>
					<Footertext>누구나 세금 | 심플베리 | 대표자: 김찬수 </Footertext>
					<Footertext>
						개인정보보호책임자: 김서강 | 문의: 02-000-0000
					</Footertext>
					<Footertext>서강대학교 멋쟁이 사자처럼</Footertext>
				</FooterInfo>
			</Page>
		</Root>
	);
}

const Banner = styled.header`
	background: #fffbf2;
	height: 56px;
	font-weight: bold;
	font-size: 14px;
	line-height: 20px;
	text-align: center;
	margin-top: 24px;
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
	font-size: 24px;
	color: #666666;
	background: none;
	border: none;
`;

const FooterFixed = styled.footer`
	position: fixed;
	top: 90vh;
	width: 600px;
	height: 64px;
	display: flex;
	justify-content: right;
	align-items: right;
`;

const Question = styled.button`
	height: 40px;
	width: 40px;
	margin-right: 32px;
	border: none;
	border-radius: 50%;
	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
		0px 8px 10px rgba(0, 0, 0, 0.25);
	color: #2a1d89;
	text-align: center;
	font-family: NotoSans;
	font-size: 24px;
	font-weight: bold;
`;

const Root = styled.div`
	background: #ffffff;
	font-family: "NotoSans";
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	}
`;

const Page = styled.div`
	background: #ffffff;
	flex-direction: column;
	width: 600px;
	@media screen(max-width: 600px) {
		width: 100%;
	}
`;

const ContainerSky = styled.div`
	background: #f1f5ff;
	height: 488px;
	top: 136px;
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
	height: 328px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const Letters = styled.div`
	height: 256px;
	width: 233px;
	display: flex;
	flex-direction: column;
`;

const Titlebox2 = styled.div`
	width: 351px;
	font-size: 30px;
	margin-top: 24px;
	margin-bottom: 12px;
	color: #2a1d89;
	font-weight: bold;
	line-height: 43px;
`;

const Paragraph2 = styled.div`
	width: 344px;
	font-size: 12px;
	font-weight: bold;
	line-height: 24px;
	margin-bottom: 16px;
`;

const Phone = styled.img`
	width: 183px;
	height: 229px;
	margin-top: 64px;
`;

const HeaderJoin = styled.header`
	background: #ffffff;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Headertitle = styled.div`
	font-family: "GongGothicBold";
	font-size: 14px;
	font-weight: bold;
	line-height: 14px;
	color: #2a1d89;
	margin: 40px 182px 16px 35px;
`;

const HeaderJoinBtn = styled.button`
	height: 32px;
	width: 91px;
	font-size: 12px;
	font-weight: bold;
	line-height: 14px;
	background: #2a1d89;
	border: 3px solid #2a1d89;
	border-radius: 10px;
	color: #ffffff;
	margin-top: 24px;
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

const Emojibox = styled.div`
	height: 112px;
	display: flex;
	margin-right: 256px;
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

const Bluebox = styled.div`
	background: #2a1d89;
	height: 488px;
	width: 344px;
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

const Opaquetext = styled.h3`
	opacity: 0.7;
`;

const Phonebox = styled.div`
	background: #ffffff;
	height: 336px;
	width: 202px;
	margin-top: 40px;
`;

const Skybox = styled.div`
	background: #f1f5ff;
	height: 344px;
	width: 344px;
	border-radius: 10px;
	font-size: 20px;
	margin-bottom: 24px;
`;

const Titlebox4 = styled.div`
	font-size: 20px;
	color: #2a1d89;
	margin: 24px 0px 8px 20px;
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
	width: 344px;
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
