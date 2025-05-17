import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { theme } from '../shared/styles/theme';
import FilterButton from '../shared/components/filter-button/FilterButton';
import Card from '../shared/components/Card';
import getHealingPlace from '../shared/apis/getHealingPlace';
import ImgTopBanner1 from '../shared/assets/ImgTopBanner1';
import { useNavigate } from 'react-router-dom';

const filterOptions = ['전체', '과수원', '밭작물', '식물·꽃', '축산'];

const Home = () => {
  const navigate = useNavigate();
  const [places, setPlaces] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('전체');

  const handleCardClick = (placeId) => {
    navigate(`/detail/${placeId}`);
  };

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const result = await getHealingPlace();
        console.log('API 결과:', result);
        setPlaces(result);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchPlaces();
  }, []);

  const filteredPlaces =
    selectedFilter === '전체' ? places : places.filter((place) => place.name.includes(selectedFilter));

  return (
    <Wrapper>
      <ImgTopBanner1 />
      <Lower>
        <Text>추천 농장 알바</Text>
        <ButtonContainer>
          {filterOptions.map((option) => (
            <FilterButton
              key={option}
              label={option}
              selected={selectedFilter === option}
              onClick={() => setSelectedFilter(option)}
            />
          ))}
        </ButtonContainer>
        <CardContainer>
          {filteredPlaces && filteredPlaces.length > 0 ? (
            filteredPlaces.map((place) => <Card onClick={handleCardClick} key={place.placeId} {...place} />)
          ) : (
            <p></p>
          )}
        </CardContainer>
      </Lower>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  padding-bottom: 2.8rem;
`;

const Lower = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 3.3rem 1.6rem 0 1.6rem;
`;
const Text = styled.p`
  ${theme.font.pre_subtitle_semi_16}
  color: ${theme.colors.black};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  overflow-x: auto;
  padding-bottom: 0.4rem;
  white-space: nowrap;

  // 스크롤바 감추기 (선택사항)
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
