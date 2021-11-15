import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { isloggedInVar } from "./apollo";
import GlobalFonts from "./fonts/fonts";
export default function First() {
	return (
		<Page>
			<Container1>
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
				<Login onClick={() => isloggedInVar(true)}>로그인</Login>
			</Container1>
			<Container2>
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
				<Question>?</Question>
			</Container2>
			<Container3>
				<Yellowbox style={{ height: "448px" }}>
					😫
					<Money>💸</Money>
					<Titlebox2>
						<h2>복잡한 세금에 지쳤다면,</h2>
						<h2>누구 세금을 시작하세요!</h2>
					</Titlebox2>
					<Paragraph2>
						<p>종합소득세, 부가가치세, 원천세, 4대보험이 아직도 헷갈린다.</p>
						<p>세금 신고 날짜를 놓쳐 세금 폭탄을 맞은 적이 있다.</p>
						<p>세금 납부에 필요한 증빙 자료들을 어떻게 준비할지 모르겠다.</p>
						<p>절세를 위한 비용처리 방법을 모르겠다.</p>
					</Paragraph2>
				</Yellowbox>
			</Container3>
			<Container3>
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
						<h3>세무사에게 맡기던 복식부기장부,</h3>
						<h3>누구나 침대에 누워 5분만에 작성하는</h3>
						<h3 style={{ color: "white" }}>복식부기 간편 작성 서비스</h3>
					</Titlebox3>
					<Phonebox></Phonebox>
				</Bluebox>
				<Skybox>
					<Titlebox3>
						<h3>복식부기장부가 처음이시더라도</h3>
						<h3>걱정하지 마세요</h3>
						<h3 style={{ color: "#2A1D89" }}>비용 처리 가능 내역 안내</h3>
					</Titlebox3>
				</Skybox>
				<Skybox>
					<Titlebox3>
						<h3>복잡한 증빙자료 관리를</h3>
						<h3>한번에 끝내세요</h3>
						<h3 style={{ color: "#2A1D89" }}>엑셀 변환과 서류 저장 서비스</h3>
					</Titlebox3>
				</Skybox>
			</Container3>
			<Container3>
				<Titlebox2>
					<h2>세금 폭탄은 피하고</h2>
					<h2>세제혜택만 챙기세요</h2>
				</Titlebox2>
				<Paragraph2>
					<p>알림을 통해 가산세 폭탄을 막는 세금관리 서비스와</p>
					<p>개인 맞춤형 세제혜택 알림</p>
				</Paragraph2>
				<Skybox>
					<Titlebox3>
						<h3>지급명세서, 원천세, 보험료 등</h3>
						<h3 style={{ color: "#2A1D89" }}>매월 세금 납부 알림</h3>
					</Titlebox3>
				</Skybox>
				<Skybox>
					<Titlebox3>
						<h3>연간 세무일정에 맞춰 관리하도록 </h3>
						<h3 style={{ color: "#2A1D89" }}>연 2회 부가세 납부 알림</h3>
					</Titlebox3>
				</Skybox>
				<Skybox>
					<Titlebox3>
						<h3>국가에서 지원하는</h3>
						<h3>세제혜택을 놓치지 않도록</h3>
						<h3 style={{ color: "#2A1D89" }}>지원사업과 국가 지원비 알림</h3>
					</Titlebox3>
				</Skybox>
			</Container3>
			<Container3>
				<Yellowbox></Yellowbox>
				<Yellowbox></Yellowbox>
				<Yellowbox></Yellowbox>
			</Container3>
		</Page>
	);
}

const Page = styled.div`
	font-family: "NotoSans";
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Container1 = styled.div`
	background: #f1f5ff;
	height: 488px;
	width: 100%;
	top: 136px;
`;

const Titlebox1 = styled.div`
	font-size: 34px;
	margin-top: 24px;
	margin-bottom: 24px;
	color: #2a1d89;
	font-weight: bold;
	line-height: 43px;
`;

const Bed = styled.div`
	font-size: 64px;
`;

const Paragraph1 = styled.div`
	font-size: 12px;
	color: #2a1d89;
	line-height: 17.38px;
	margin-top: 8px;
	margin-bottom: 32px;
`;

const Titlebox2 = styled.div`
	font-size: 30px;
	margin-top: 24px;
	margin-bottom: 24px;
	color: #2a1d89;
	font-weight: bold;
	line-height: 43px;
`;

const Paragraph2 = styled.div`
	font-size: 12px;
	font-weight: bold;
	line-height: 17.38px;
	margin-top: 8px;
	margin-bottom: 32px;
`;

const Container2 = styled.div`
	background: #ffffff;
	height: 256px;
	width: 100%;
	left: 0px;
	top: 568px;
`;

const Join = styled.div`
	height: 32px;
	width: 200px;
	border-radius: 10px;
	border: 2px solid #2a1d89;
	background: #2a1d89;
	text-align: center;
	font-size: 14px;
	color: #ffffff;
	padding-top: 16px;
`;
const Login = styled.div`
	height: 32px;
	width: 200px;
	border-radius: 10px;
	border: 2px solid #2a1d89;
	background: #f1f5ff;
	text-align: center;
	font-size: 14px;
	color: #2a1d89;
	padding-top: 16px;
	margin-top: 16px;
`;

const Question = styled.div`
	height: 20px;
	width: 20px;
	border-radius: 50%;
	margin-bottom: 24px;
	margin-left: 
	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
		0px 8px 10px rgba(0, 0, 0, 0.25);
	text-align: center;
	font-size: 14px;
	color: #2a1d89;
`;

const Container3 = styled.div`
	width: 100%;
`;

const Yellowbox = styled.div`
	background: #fffbf2;
	height: 1136px;
	width: 100%;
	top: 80px;
	font-size: 50px;
`;

const Money = styled.div`
	display: inline;
	font-size: 30px;
`;

const Bluebox = styled.div`
	background: #2a1d89;
	height: 488px;
	width: 80%;
	border-radius: 10px;
	font-size: 20px;
`;
const Phonebox = styled.div`
	background: #ffffff;
	height: 336px;
	width: 60%;
`;

const Skybox = styled.div`
	background: #f1f5ff;
	height: 344px;
	width: 344px;
	border-radius: 10px;
	font-size: 20px;
	margin-top: 24px;
`;

const Titlebox3 = styled.div`
	font-size: 20px;
	color: #2a1d89b2;
	margin-top: 24px;
	margin-bottom: 24px;
	font-weight: bold;
	line-height: 29px;
`;
