import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import DetailBody from '../components/DetailBody';
import DetailButton from '../components/DetailButton';
import DetailContent from '../components/DetailContent';
import LaborPrize from '../components/LaborPrize';
import DetailReview from '../components/DetailReview';
import ReviewList from '../components/ReviewList';
import apiClient from '../../../shared/apis/apiClient';
import { useParams } from 'react-router-dom';

const FarmDetail = () => {
  const [data, setData] = useState(null);
  const { placeId } = useParams();

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await apiClient.get(`/api/v1/places/${placeId}`);
        setData(response.data.data);
      } catch (error) {
        return error;
      }
    };
    fetchDetail();
  }, [placeId]);

  if(!data) return( <LoadingWrapper><LoadingText>Loading...</LoadingText></LoadingWrapper>);

  return (
    <FarmDetailContainer>
      <BlankComponent src={data.photoUrl} alt="농장사진" />
      <DetailBody data={data} />
      <DetailButton />
      <DividerWrapper>
        <Divider />
      </DividerWrapper>
      <DetailContent description={data.description} />
      <LaborPrize price={data.price} />
      <DividerWrapper>
        <Divider />
      </DividerWrapper>
      <DetailReview />
      <ReviewList reviewList={data.reviewList} />
    </FarmDetailContainer>
  );
};

export default FarmDetail;

const FarmDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const BlankComponent = styled.img`
  width: 100%;
  height: 174px;
  background-color: #d9d9d9;
`;

const DividerWrapper = styled.div`
  margin: 0 16px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e7ea;
  margin: 29px 0;
  padding: 0 16px;
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingText = styled.p`
  ${({theme})=>theme.font.pre_title_semi_20}
`;