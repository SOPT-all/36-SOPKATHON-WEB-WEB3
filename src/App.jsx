import styled from "@emotion/styled"

function App() {
  return (
    <button>hi</button>
  )
}

const Wrapper = styled.div`
  background-color: ${(({theme})=>theme.colors.gray300)};
`;

export default App
