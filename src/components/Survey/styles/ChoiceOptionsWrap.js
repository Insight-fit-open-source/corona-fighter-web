import styled from 'styled-components';
import sizes from 'src/app/theme/sizes';

const grids = {
  restaurant: '1fr 1fr 1fr',
  personality: '1fr 1fr 1fr',
  look: '1fr 1fr',
  content: '1fr',
};

export default styled.div`
  display: grid;
  grid-template-columns: ${({ step }) => grids[step] || 'auto'};
  grid-gap: ${sizes.space(1)};
  width: 80%;
  min-height: 65%;
`;
