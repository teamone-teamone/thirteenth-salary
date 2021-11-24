import React from 'react';
import BlueButton from "../Component/Button/BlueButton";
import JobButton from "../Component/Button/JobButton";
import BeforeLayout from "../Component/BeforeLayout/BeforeLayout";
import Logo from "../Component/Logo";
import styled, { css } from 'styled-components';
import { FcDam, FcCurrencyExchange, FcLandscape, FcPlus, FcFactory, FcDepartment, FcLibrary, FcSupport, FcFilmReel, FcDocument,FcBiomass, FcCrystalOscillator, FcGlobe, FcShop, FcGraduationCap,FcHome, FcInTransit, FcMultipleDevices } from "react-icons/fc";
import { FaShower } from 'react-icons/fa';

const Root = styled.div` 
    background: #ffffff;
    font-family: "NotoSans";
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `

const Page = styled.div`
    background: #ffffff;
    width: 300px;
    @media screen(max-width:300px) {
        width: 100%;
    }
`

const Box = styled.div`
            width: 100%;
            display: inline-block;
            text-align:center;

`

const Title = styled.h1`
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 5px;
    color: black;
    padding-top: 25px;
    display: inline-block;
    `


const Select = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    color: #091430;
    padding-top: 0px;
`
const PageNum = styled.div` 
    font-size: 13px;
    line-height: 17px;
    display: inline-block;
    padding-left: 3%;

`

const EachBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-basis:0;
    align-content: space-around;
    justify-content: center;
    padding: 2%;
`

const FlexBox = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: center; 
`

const JobText = styled.div` 
    display: flex;
    flex-direction: column;
    font-weight:bold;
    justify-content: flex-end;
    text-align: center;
    font-size: 11px;

`
const JobIcon = styled.div` 
    display: inline-block;
    font-size: 20px;
    color: black;
    text-align: center;
    padding-bottom: 5%;

`

export default function Signup2() {
    return(
        <Root>
            <Page>
            <BeforeLayout>
                <div>
                    <Logo/>
                    <div>
                        <Title>회원가입</Title>
                        <PageNum>2/2</PageNum>
                    </div>
                    <Select>사장님의 사업자등록증에 적힌 업종을 선택해주세요</Select> <br/><br/>
                </div>
                
            <Box>
                <FlexBox>
                    <EachBox>
                        <JobButton>
                            <JobIcon>
                                <FcLandscape size="24"/>
                            </JobIcon>
                            <JobText>농업, 임업 및 어업</JobText>
                        </JobButton>
                    </EachBox>

                    <EachBox>
                        <JobButton>
                            <JobIcon>⛏</JobIcon>
                            <JobText>광업</JobText>
                        </JobButton>
                    </EachBox>
                    
                    <EachBox>
                        <JobButton>
                            <JobIcon><FcFactory size="24"/></JobIcon>
                            <JobText>제조업</JobText>
                        </JobButton>
                    </EachBox>
                </FlexBox>

                <FlexBox>
                    <EachBox>
                        <JobButton>
                            <JobIcon><FcCrystalOscillator size="24"/></JobIcon>
                            <JobText>전기, 가스, 증기 및<br/> 공기 조절 공급업</JobText>
                        </JobButton>
                    </EachBox>

                    <EachBox>
                        <JobButton>
                            <JobIcon><FaShower size="24" color="#2A1D89"/></JobIcon>
                            <JobText>수도, 하수 및 <br/>폐기물 처리, <br/>원료 재생업</JobText>
                        </JobButton>
                    </EachBox>

                    <EachBox>
                        <JobButton>
                            <JobIcon><FcDam size="24"/></JobIcon>
                            <JobText>건설업</JobText>
                        </JobButton>
                    </EachBox>
                </FlexBox>

                <FlexBox>
                    <EachBox>
                        <JobButton>
                            <JobIcon><FcShop size="24"/></JobIcon>
                            <JobText>도매 및 소매업</JobText>
                        </JobButton>
                    </EachBox>

                    <EachBox>
                        <JobButton>
                            <JobIcon><FcInTransit size="24"/></JobIcon>
                            <JobText>운수 및 창고업</JobText>
                        </JobButton>
                    </EachBox>

                    <EachBox>
                        <JobButton>
                            <JobIcon><FcMultipleDevices size="24"/></JobIcon>
                            <JobText>숙박 및 음식점업</JobText>
                        </JobButton>
                    </EachBox>
                </FlexBox>

                <FlexBox>
                    <EachBox>
                        <JobButton>
                            <JobIcon><FcMultipleDevices size="24"/></JobIcon>
                            <JobText>정보통신업</JobText>
                        </JobButton>
                    </EachBox>

                    <EachBox>
                        <JobButton>
                            <JobIcon><FcCurrencyExchange size="24"/></JobIcon>
                            <JobText>금융 및 보험업</JobText>
                        </JobButton>
                    </EachBox>

                    <EachBox>
                        <JobButton>
                            <JobIcon><FcDepartment size="24"/></JobIcon>
                            <JobText>부동산업</JobText>
                        </JobButton>
                    </EachBox>
                </FlexBox>

                <FlexBox>
                    <EachBox>
                        <JobButton>
                            <JobIcon><FcBiomass size="24"/></JobIcon>
                            <JobText>전문, 과학 및<br/> 기술 서비스업</JobText>
                        </JobButton>
                    </EachBox>

                    <EachBox>
                        <JobButton>
                            <JobIcon><FcDocument size="24" /></JobIcon>
                            <JobText>사업시설 관리, <br/>사업 지원 및<br/> 임대 서비스업</JobText>
                        </JobButton>
                    </EachBox>

                    <EachBox>
                        <JobButton>
                            <JobIcon><FcLibrary size="24"/></JobIcon>
                            <JobText>공공 행정, 국방 및<br/> 사회보장 행정</JobText>
                        </JobButton>
                    </EachBox>
                </FlexBox>

                <FlexBox>
                    <EachBox>
                        <JobButton>
                            <JobIcon><FcGraduationCap size="24"/></JobIcon>
                            <JobText>교육 서비스업</JobText>
                        </JobButton>
                    </EachBox>

                    <EachBox>
                        <JobButton>
                            <JobIcon><FcPlus size="24"/></JobIcon>
                            <JobText>보건업 및<br/> 사회복지 서비스업</JobText>
                        </JobButton>
                    </EachBox>

                    <EachBox>
                        <JobButton>
                            <JobIcon><FcFilmReel size="24"/></JobIcon>
                            <JobText>예술, 스포츠 및<br/> 여가관련 서비스업</JobText>
                        </JobButton>
                    </EachBox>
                </FlexBox>

                <FlexBox>
                    <EachBox>
                        <JobButton>
                            <JobIcon><FcSupport size="24"/></JobIcon>
                            <JobText>협회, 단체, 수리 및<br/> 기타 개인 서비스업</JobText>
                        </JobButton>
                    </EachBox>

                    <EachBox>
                        <JobButton>
                            <JobIcon><FcHome size="24"/></JobIcon>
                            <JobText>가구 내 고용활동 및<br/> 달리 분류되지 않은<br/> 자가 소비 생산활동</JobText>
                        </JobButton>
                    </EachBox>

                    <EachBox>
                        <JobButton>
                            <JobIcon><FcGlobe size="24"/></JobIcon>
                            <JobText>국제 및 외국기관</JobText>
                        </JobButton>
                    </EachBox>
                </FlexBox>
            </Box>

                <br/>

                <Box>          
                    <BlueButton>확인</BlueButton> <br/><br/><br/><br/><br/>
                </Box> 
            </BeforeLayout>
            </Page>
        </Root>

    ) 
}