import styled from '@emotion/styled';
import React from 'react';
import IconCalendar from '../../../shared/assets/IconCalender';
import IconClock from '../../../shared/assets/IconClock2';
import IconSubway from '../../../shared/assets/IconSubway';

const DetailBody = ({ data }) => {
  return (
    <DetailBodyWrapper>
      <Title>{data.name}</Title>
      <Location>{data.address}</Location>
      <TimeContainer>
        <TimeWrapper>
          <StyledTimeBox>
            <StyledIconCalendar />
            <StyledTime>모집 일자: {data.recruitDate}</StyledTime>
          </StyledTimeBox>
          <StyledTimeBox>
            <StyledIconClock />
            <StyledTime>{data.startedAt} - {data.endAt}</StyledTime>
          </StyledTimeBox>
          <StyledTimeBox>
            <StyledIconSubway />
            <StyledTime>예상 이동 시간: {data.duration}분</StyledTime>
          </StyledTimeBox>
        </TimeWrapper>

        <StyledRoot>경로 보기</StyledRoot>
      </TimeContainer>
    </DetailBodyWrapper>
  );
};

export default DetailBody;

const DetailBodyWrapper = styled.div`
  width: full;
  display: flex;
  flex-direction: column;
  margin: 24px 16px;
  justify-content: flex-start;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 130%;
  margin-bottom: 4px;
`;

const Location = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
  color: #9ca2ae;
`;

const TimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const TimeWrapper = styled.div`
  margin-top: 19px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledTimeBox = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledIconCalendar = styled(IconCalendar)`
  width: 18px;
  height: 18px;
`;

const StyledIconClock = styled(IconClock)`
  width: 18px;
  height: 18px;
`;

const StyledIconSubway = styled(IconSubway)`
  width: 18px;
  height: 18px;
`;

const StyledTime = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 140%;
  color: #4b5563;
`;

const StyledRoot = styled.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 140%;
  text-decoration: underline;
  color: #4b5563;
`;
