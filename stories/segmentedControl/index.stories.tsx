import React from 'react';
import styled from '@emotion/styled';
import { SegmentedControl } from 'src/shared-components';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
import type { Meta } from '@storybook/react';
import { SegmentItemType } from 'src/shared-components/segmentedControl/types';

const SegmentedControlContainer = styled.div<{ width?: string }>`
  width: ${({ width = '500px' }) => width};
`;

/* eslint-disable no-console */
export const TwoItems = () => {
  const twoItems = [
    { id: 1, text: 'Option 1' },
    { id: 2, text: 'Option 2' },
  ];

  const onClick = (segment: SegmentItemType) => {
    console.log(segment);
  };

  return (
    <SegmentedControlContainer width="300px">
      <SegmentedControl onClick={onClick} segmentItems={twoItems} />
    </SegmentedControlContainer>
  );
};

export const ThreeItems = () => {
  const threeItems = [
    { id: 1, text: 'Option 1' },
    { id: 2, text: 'Option 2' },
    { id: 3, text: 'Option 3' },
  ];

  const onClick = (segment: SegmentItemType) => {
    console.log(segment);
  };

  return (
    <SegmentedControlContainer>
      <SegmentedControl onClick={onClick} segmentItems={threeItems} />
    </SegmentedControlContainer>
  );
};
/* eslint-enable no-console */

export default {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { SegmentedControl } from 'radiance-ui';"}
          />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
} as Meta;