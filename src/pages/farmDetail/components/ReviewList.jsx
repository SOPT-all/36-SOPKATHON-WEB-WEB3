import styled from '@emotion/styled';

const ReviewList = ({ reviewList }) => {
  return (
    <ReviewListParent>
      {reviewList?.map((review, index) => (
        <ReviewListWrapper key={index}>
          <ProfileImg src={review.profileImageUrl} alt="리뷰" />
          <TextWrapper>
            <NameDateWrapper>
              <Name>{review.author}</Name>
              <Date>{review.date}</Date>
            </NameDateWrapper>
            <ContentsWrapper>{review.content}</ContentsWrapper>
          </TextWrapper>
        </ReviewListWrapper>
      ))}
    </ReviewListParent>
  );
};

const ReviewListParent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  gap: 1.5rem;
`;

const ReviewListWrapper = styled.div`
  width: auto;
  min-height: 7.5rem;
  background-color: white;
  display: flex;
  gap: 1.5rem;
  margin: 0px 16px;
`;

const ProfileImg = styled.img`
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.gray300};
  border-radius: 999rem;
`;

const TextWrapper = styled.div``;

const NameDateWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Name = styled.p`
  ${({ theme }) => theme.font.pre_body_semi_14};
  color: ${({ theme }) => theme.colors.gray800};
`;

const Date = styled.p`
  ${({ theme }) => theme.font.pre_body_semi_12};
  color: ${({ theme }) => theme.colors.gray500};
`;

const ContentsWrapper = styled.div`
  max-width: 33rem;
  ${({ theme }) => theme.font.pre_body_reg_14}
  color: ${({ theme }) => theme.colors.gray800};
  overflow-wrap: break-word;
`;

export default ReviewList;
