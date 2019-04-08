import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import styled from '@emotion/styled';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import FieldReadme from 'docs/field.md';
import { Typography, Field } from 'src/shared-components';

import InputWithValidation from './inputExample';

const MainContainer = styled.div`
  text-align: left;
`;

const FormContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 350px;
`;

const stories = storiesOf('Forms', module);
stories.addDecorator(withKnobs);

const errorOptions = {
  'No errors': {},
  'One error': { e1: 'Error message number 1' },
  'Two errors': { e1: 'Error message number 1', e2: 'Error message number 2' },
};

stories.add(
  'Field',
  withDocs(FieldReadme, () => (
    <MainContainer>
      <Typography.Heading>Examples:</Typography.Heading>
      <FormContainer>
        <InputWithValidation />
      </FormContainer>

      <FormContainer>
        <Field
          label="Textarea - no hint - no validation"
          labelFor="textarea-id"
        >
          <Field.Textarea id="textarea-id" />
        </Field>
      </FormContainer>

      <FormContainer>
        <Field.Input placeholder="You can use Field.Input directly" />
      </FormContainer>

      <FormContainer>
        <Field label="Input - disabled">
          <Field.Input disabled />
        </Field>
      </FormContainer>

      <Typography.Heading>With Knobs:</Typography.Heading>
      <FormContainer>
        <Field
          labelFor="input-id"
          label={text('label', 'Input Label')}
          hintMessage={text('hintMessage', 'Hint Message')}
          errors={select('errors', errorOptions, {})}
        >
          <Field.Input id="input-id" />
        </Field>
      </FormContainer>
    </MainContainer>
  ))
);
