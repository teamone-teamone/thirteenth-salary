import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiMenu } from "react-icons/fi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { HiQuestionMarkCircle } from "react-icons/hi";
import {
	MdOutlineNavigateNext,
	MdHome,
	MdOutlineAttachMoney,
	MdFolderOpen,
	MdSettings,
} from "react-icons/md";
import { isloggedInVar } from "./apollo";

export default function Home() {
	const [check, setCheck] = useState(true);

	return (
		<Root>
			<Page>
				<HomeBanner>
					<HeaderTitle>누구나 세금</HeaderTitle>
					<MenuTab></MenuTab>
				</HomeBanner>
				<CircularBackground>
					<TextBox>
						<WelcomeText>
							<Bold>멋쟁이 사자처럼</Bold>님, 반갑습니다.
						</WelcomeText>
						<WelcomeText>🔔 가장 가까운 세금 관리 일정</WelcomeText>
						<DdayText>D-3 원천세 납부</DdayText>
					</TextBox>
					<CheckBox>
						<CheckBoxInside>
							<GrayText>장부 작성</GrayText>
							<CompleteText>완료</CompleteText>
						</CheckBoxInside>
						<CheckBoxInside>
							<GrayText>지급명세서 제출</GrayText>
							<IncompleteText>미완료</IncompleteText>
						</CheckBoxInside>
						<CheckBoxInside>
							<GrayText>지급명세서 제출</GrayText>
							<CompleteText>완료</CompleteText>
						</CheckBoxInside>
						<CheckBoxInside>
							<GrayText>보험료 납부</GrayText>
							<CompleteText>완료</CompleteText>
						</CheckBoxInside>
					</CheckBox>
				</CircularBackground>
				<WhiteBackground>
					<WhiteBox>
						<ThreeDotMenu></ThreeDotMenu>
						<WhiteBoxContainer>
							<Emoji24>🖋</Emoji24>
							<WhiteBoxTitle>복식부기장부</WhiteBoxTitle>
							<SmallBoxContainer>
								<SmallBlueBox>오늘치 입력</SmallBlueBox>
								<SmallWhiteBox>작성 내역 확인</SmallWhiteBox>
								<SmallWhiteBox>작성법 안내</SmallWhiteBox>
							</SmallBoxContainer>
						</WhiteBoxContainer>
					</WhiteBox>
					<WhiteBox>
						<ThreeDotMenu></ThreeDotMenu>
						<WhiteBoxContainer>
							<Emoji24>📄</Emoji24>
							<WhiteBoxTitle>재무상태표</WhiteBoxTitle>
							<SmallBoxContainer>
								<SmallWhiteBox>확인하기</SmallWhiteBox>
								<SmallWhiteBox>안내</SmallWhiteBox>
							</SmallBoxContainer>
						</WhiteBoxContainer>
					</WhiteBox>
					<WhiteBox>
						<ThreeDotMenu></ThreeDotMenu>
						<WhiteBoxContainer>
							<Emoji24>💸</Emoji24>
							<WhiteBoxTitle>현금흐름표</WhiteBoxTitle>
							<SmallBoxContainer>
								<SmallWhiteBox>확인하기</SmallWhiteBox>
								<SmallWhiteBox>안내</SmallWhiteBox>
							</SmallBoxContainer>
						</WhiteBoxContainer>
					</WhiteBox>
					<SkyBoxContainer>
						<SkyBox>
							<IconContainer>
								<Emoji18>📍</Emoji18>
								<NavigateNext></NavigateNext>
							</IconContainer>
							<SkyBoxTextContainer>
								<SkyBoxText>맞춤 세금 혜택 받기</SkyBoxText>
							</SkyBoxTextContainer>
						</SkyBox>
						<SkyBox>
							<IconContainer>
								<Emoji18>💰</Emoji18>
								<NavigateNext></NavigateNext>
							</IconContainer>
							<SkyBoxTextContainer>
								<SkyBoxText>홈택스 바로가기</SkyBoxText>
							</SkyBoxTextContainer>
						</SkyBox>
					</SkyBoxContainer>
				</WhiteBackground>
				<FooterContainer>
					<PersonalHomeFooter>
						<MoneyBtn></MoneyBtn>
						<FolderBtn></FolderBtn>
						<HomeBtnContainer>
							<HomeBtn></HomeBtn>
						</HomeBtnContainer>
						<SettingBtn></SettingBtn>
						<QuestionBtn></QuestionBtn>
					</PersonalHomeFooter>
				</FooterContainer>
			</Page>
		</Root>
	);
}

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
	width: 600px;
	@media screen and (max-width: 600px) {
		width: 100%;
	}
`;

const HomeBanner = styled.header`
	height: 80px;
	background: #2a1d89;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const HeaderTitle = styled.h3`
	font-family: "GongGothicBold";
	font-size: 14px;
	font-weight: bold;
	line-height: 14px;
	color: #ffffff;
	margin-top: 16px;
	margin-right: 96px;
`;

const MenuTab = styled(FiMenu)`
	font-size: 24px;
	color: #ffffff;
	margin-top: 16px;
	margin-left: 96px;
`;

const CircularBackground = styled.div`
	background: #2a1d89;
	height: 280px;
	border-radius: 0px 0px 360px 178px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const TextBox = styled.div`
	width: 309px;
	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: left;
`;

const WelcomeText = styled.h3`
	font-size: 14px;
	line-height: 20px;
	color: #ffffff;
	margin-top: 32px;
`;

const Bold = styled.mark`
	background: none;
	font-weight: bold;
	color: #ffffff;
`;

const DdayText = styled.h1`
	font-size: 30px;
	font-weight: bold;
	line-height: 43.44px;
	color: #ffffff;
`;

const CheckBox = styled.div`
	background: #ffffff;
	height: 64px;
	box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.14),
		0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	margin-top: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CheckBoxInside = styled.div`
	background: #ffffff;
	width: 80px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const GrayText = styled.h3`
	font-size: 10px;
	line-height: 14px;
	color: #666666;
`;

const CompleteText = styled.h3`
	font-size: 14px;
	line-height: 20px;
	font-weight: bold;
	color: #666666;
`;

const IncompleteText = styled.h3`
	font-size: 14px;
	line-height: 20px;
	font-weight: bold;
	color: #2a1d89;
`;

const WhiteBackground = styled.div`
	background: #ffffff;
	height: 480px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const WhiteBox = styled.div`
	background: #ffffff;
	height: 128px;
	box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.14),
		0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	margin-bottom: 16px;
	display: flex;
	flex-direction: column;
`;

const ThreeDotMenu = styled(BiDotsVerticalRounded)`
	font-size: 14px;
	color: #666666;
	margin-top: 15px;
	margin-left: 312px;
`;

const WhiteBoxContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 24px;
`;

const Emoji24 = styled.h1`
	font-size: 24px;
	line-height: 25px;
`;

const WhiteBoxTitle = styled.h1`
	color: #2a1d89;
	font-weight: bold;
	font-size: 20px;
	line-height: 29px;
`;

const SmallBoxContainer = styled.div`
	background: #ffffff;
	width: 309px;
	height: 40px;
	display: flex;
`;

const SmallWhiteBox = styled.div`
	background: #ffffff;
	width: 67px;
	height: 20px;
	border: 0.5px solid #666666;
	border-radius: 4px;
	font-size: 10px;
	line-height: 14px;
	color: #666666;
	margin-top: 8px;
	margin-right: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SmallBlueBox = styled.div`
	background: #2a1d89;
	width: 67px;
	height: 20px;
	border: 0.5px solid #666666;
	border-radius: 4px;
	font-size: 10px;
	line-height: 14px;
	color: #ffffff;
	margin-top: 8px;
	margin-right: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SkyBoxContainer = styled.div`
	height: 100px;
	margin-top: 24px;
	display: inline-flex;
	flex-wrap: wrap;
	gap: 20px;
`;

const SkyBox = styled.div`
	background: #f1f5ff;
	width: 150px;
	height: 64px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
`;

const IconContainer = styled.div`
	height: 32px;
	display: inline-flex;
	flex-wrap: wrap;
	gap: 88px;
`;

const NavigateNext = styled(MdOutlineNavigateNext)`
	font-size: 14px;
	color: #666666;
	margin-top: 14px;
`;

const Emoji18 = styled.h2`
	font-size: 18px;
	line-height: 18px;
	margin-top: 10px;
	margin-left: 20px;
`;

const SkyBoxTextContainer = styled.div`
	display: flex;
`;

const SkyBoxText = styled.h2`
	font-weight: bold;
	font-size: 14px;
	line-height: 20px;
	margin-left: 24px;
	color: #2a1d89;
`;

const FooterContainer = styled.div`
	margin-top: 24px;
	height: 88px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const PersonalHomeFooter = styled.footer`
	height: 88px;
	display: flex;
`;

const HomeBtnContainer = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 20px;
	background: #2a1d89;
	margin-left: 24px;
	margin-right: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const HomeBtn = styled(MdHome)`
	font-size: 24px;
	color: #ffffff;
`;

const MoneyBtn = styled(MdOutlineAttachMoney)`
	font-size: 24px;
	color: #2a1d89;
	padding: 23px;
`;

const FolderBtn = styled(MdFolderOpen)`
	font-size: 24px;
	color: #2a1d89;
	padding: 23px;
`;

const SettingBtn = styled(MdSettings)`
	font-size: 24px;
	color: #2a1d89;
	padding: 23px;
`;

const QuestionBtn = styled(HiQuestionMarkCircle)`
	font-size: 24px;
	color: #2a1d89;
	padding: 23px;
`;
