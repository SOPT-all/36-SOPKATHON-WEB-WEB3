import styled from '@emotion/styled';

const ReviewList = () => {
  return (
    <ReviewListParent>
      {Array.from({ length: 5 }).map((_, idx) => (
        <ReviewListWrapper key={idx}>
          <ProfileWrapper />
          <TextWrapper>
            <NameDateWrapper>
              <Name>seoulworker1</Name>
              <Date>2025.05.10</Date>
            </NameDateWrapper>
            <ContentsWrapper>자연 속에서 좋은 경험이었어요. 사장님도 친절하셔서 또 오고 싶어요!</ContentsWrapper>
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
  gap: 4px;
`;

const ReviewListWrapper = styled.div`
  width: 100%;
  height: 7.5rem;
  background-color: white;
  display: flex;
  gap: 1.5rem;
  margin: 0px 16px;
`;

const ProfileWrapper = styled.div`
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
  max-width: 27rem;
  ${({ theme }) => theme.font.pre_body_reg_14}
  color: ${({ theme }) => theme.colors.gray800};
  overflow-wrap: break-word;
`;

export default ReviewList;
