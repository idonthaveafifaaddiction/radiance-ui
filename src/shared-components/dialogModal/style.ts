import { css } from '@emotion/react';

import {
  Colors,
  MEDIA_QUERIES,
  SPACER,
  ThemeType,
  Z_SCALE,
} from '../../constants';

const overlay = (theme: ThemeType) => css`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${Z_SCALE.modal};
  background-color: ${theme.COLORS.overlay};
  transition: opacity 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &.entering,
  &.exiting,
  &.exited {
    opacity: 0;
  }

  &.entered {
    opacity: 1;
  }

  ${MEDIA_QUERIES.mdUp} {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }
`;

const paragraph = css`
  margin-bottom: ${SPACER.large};

  &:last-of-type {
    margin-bottom: ${SPACER.xlarge};
  }
`;

const modalContainer = (
  backgroundColor: Colors['background'] | Colors['white'],
) => (theme: ThemeType) => css`
  width: 100%;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-top-left-radius: ${theme.BORDER_RADIUS.large};
  border-top-right-radius: ${theme.BORDER_RADIUS.large};
  box-shadow: ${theme.BOX_SHADOWS.modal};
  background: ${backgroundColor};
  padding: ${SPACER.x4large} ${SPACER.large} ${SPACER.xlarge};
  overflow-y: auto;
  max-height: 100%;

  transition: transform 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &.entered {
    transform: translateY(0%);
  }

  &.entering,
  &.exiting,
  &.exited {
    transform: translateY(100%);
  }

  ${MEDIA_QUERIES.smUp} {
    max-height: 700px;
  }

  ${MEDIA_QUERIES.mdUp} {
    position: relative;
    width: 456px;
    border-radius: ${theme.BORDER_RADIUS.medium};
    padding: ${SPACER.x4large};

    &.entering,
    &.exiting,
    &.exited {
      transform: translateY(40%);
    }
  }
`;

const modalTitle = css`
  margin-bottom: ${SPACER.small};
`;

const crossIconContainer = (
  backgroundColor: Colors['background'] | Colors['white'],
) => (theme: ThemeType) => css`
  position: absolute;
  top: 8px;
  right: 12px;
  z-index: ${Z_SCALE.e2000};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${backgroundColor};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  pointer-events: auto;
  cursor: pointer;

  ${MEDIA_QUERIES.mdUp} {
    top: 16px;
    right: 16px;
  }
  &:focus {
    outline: none;
    box-shadow: ${theme.BOX_SHADOWS.focus};
  }
`;

export default {
  crossIconContainer,
  modalContainer,
  modalTitle,
  overlay,
  paragraph,
};
