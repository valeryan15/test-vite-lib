import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  IconAlertAccess,
  IconAlertBan,
  IconAlertInfo,
  IconAlertTriangle,
  IconClose,
} from '../Icons';
export const dataTestIdElement = (elementName: string, _dataTestId?: string) =>
  _dataTestId ? `${_dataTestId}-${elementName}` : undefined;

export enum AlertVariant {
  Danger = 'danger',
  Success = 'success',
  Warning = 'warning',
  Info = 'info',
}

export type AlertProps = {
  className?: string;
  variant?: AlertVariant;
  withBackground?: boolean;
  title: string | ReactNode;
  text?: string | ReactNode;
  handleClose?: () => void;
  isOpen: boolean;
  'data-testid'?: string;
  withoutIcon?: boolean;
};

const IconsByType = {
  danger: IconAlertBan,
  success: IconAlertAccess,
  warning: IconAlertTriangle,
  info: IconAlertInfo,
};

const Alert = ({
  className,
  title,
  text,
  variant = AlertVariant.Info,
  withBackground = false,
  handleClose,
  isOpen = false,
  withoutIcon = false,
  'data-testid': dataTestId,
  ...props
}: AlertProps) => {
  if (!isOpen) return null;
  const classes = {
    danger: 'uikit-alert-danger',
    success: 'uikit-alert-success',
    warning: 'uikit-alert-warning',
    info: 'uikit-alert-info',
  };
  const selectedClass = classes[variant] || classes.info;
  const Icon = IconsByType[variant];

  return (
    <div
      className={classNames(
        'uikit-alert',
        selectedClass,
        withBackground && 'uikit-alert-background',
        className,
      )}
      {...props}
    >
      {!withoutIcon && (
        <div className={'uikit-alert-icon'}>
          {Icon && <Icon width={20} height={20} />}
        </div>
      )}
      <h6
        className={'uikit-alert-h6'}
        data-testid={dataTestIdElement('title', dataTestId)}
      >
        {title}
      </h6>
      {text ? (
        <div
          className={'uikit-alert-text'}
          data-testid={dataTestIdElement('text', dataTestId)}
        >
          {text}
        </div>
      ) : null}
      {handleClose && (
        <button
          className={'uikit-alert-button'}
          type="button"
          onClick={handleClose}
          data-testid={dataTestIdElement('button-close', dataTestId)}
        >
          <IconClose width={16} height={16} />
        </button>
      )}
    </div>
  );
};

Alert.displayName = 'Alert';
Alert.propTypes = {
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  variant: PropTypes.oneOf([
    AlertVariant.Danger,
    AlertVariant.Success,
    AlertVariant.Warning,
    AlertVariant.Info,
  ]),
  withBackground: PropTypes.bool,
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
  withIcon: PropTypes.bool,
};

export default Alert;
