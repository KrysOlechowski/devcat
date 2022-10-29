import styled from "styled-components";

export const HomePage = () => {
  return (
    <Container>
      <>
        <h1>home Page</h1>
        <h2>home</h2>
      </>
    </Container>
  );
};

const Container = styled.div`
  color: ${({ theme }) => theme.colors.secondaryColor};
  color: ${({ theme }) => theme.colors.tertiaryColor};
`;
