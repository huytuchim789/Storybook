import React, { CSSProperties, ReactNode } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
export declare type PanelMode =
  | 'time'
  | 'date'
  | 'week'
  | 'month'
  | 'quarter'
  | 'year'
  | 'decade';

export interface DatepickerProps {
  onChange: () => void;
  placeholder?: string | undefined | [string, string];
  defaultValue?: any;
  disabled?: boolean | undefined;
  maxDate?: string | Date;
  minDate?: string | Date;
  /**
   * Whether to show clear button
   */
  allowClear?: boolean;
  // validate?: boolean;
  /**
   * If get focus when component mounted
   */
  autoFocus?: boolean;
  /**Whether has border style*/
  bordered?: boolean;
  /**The picker className*/
  className?: string;
  /**Custom rendering function for date cells*/
  dateRender?: (currentDate: typeof moment, today: typeof moment) => ReactNode;
  /**Specify the date that cannot be selected*/
  disabledDate?: (date: any) => boolean;
  /**To customize the className of the popup calendar*/
  dropdownClassName?: string;
  /**To set the container of the floating layer, while the default is to create a div element in body*/
  getPopupContainer?: (node: HTMLElement) => HTMLElement;
  /**
   * Show time
   */
  showTime?: boolean;
  /**Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices)*/
  inputReadOnly?: boolean;
  /**Localization configuration*/
  locale?: any;
  /**The picker panel mode */
  mode?: 'time' | 'date' | 'month' | 'year' | 'decade';
  rangeMode: [
    'time' | 'date' | 'month' | 'year' | 'decade',
    'time' | 'date' | 'month' | 'year' | 'decade'
  ];
  /**The custom next icon*/
  nextIcon?: ReactNode;
  /**The open state of picker*/
  open?: boolean;
  /**Customize panel render*/
  panelRender?: (panelNode: any) => ReactNode;
  /**Set picker type*/
  picker?: 'date' | 'week' | 'month' | 'year' | 'quarter';
  /**To customize the style of the popup calendar*/
  popupStyle?: CSSProperties;
  /**The custom prev icon*/
  prevIcon?: ReactNode;
  /**To determine the size of the input box, the height of large and small, are 40px and 24px respectively, while default size is 32px*/
  size?: 'large' | 'middle' | 'small';
  /**The custom suffix icon*/
  suffixIcon?: ReactNode;
  /**The custom super next icon*/
  superNextIcon?: ReactNode;
  /**The custom super prev icon*/
  superPrevIcon?: ReactNode;
  /**Callback function, can be executed whether the popup calendar is popped up or closed*/
  onOpenChange?: (open: boolean) => void;
  /**Callback when picker panel mode is changed*/
  onPanelChange?: (value: PanelMode, mode: any) => void;
  /**
   * Date Format
   * 'YYYY/MM/DD'
   * 'MM/DD'
   * 'YYYY/MM'
   * 'YYYY-MM-DD HH:mm:ss'
   */
  dateFormat?: string;
  /**
   * Whether RangeDatePicker or not
   */
  isRange?: boolean;
}
const { RangePicker } = DatePicker;
export const Datepicker: React.FC<DatepickerProps> = ({
  allowClear,
  onChange,
  autoFocus = false,
  bordered = true,
  className,
  minDate,
  maxDate,
  // validate = false,
  defaultValue,
  dateRender,
  disabled = false,
  disabledDate,
  dropdownClassName,
  getPopupContainer,
  inputReadOnly,
  locale,
  mode,
  nextIcon,
  open,
  panelRender,
  picker,
  placeholder,
  popupStyle,
  prevIcon,
  size = 'middle',
  suffixIcon,
  superNextIcon,
  superPrevIcon,
  onOpenChange,
  onPanelChange,
  dateFormat,
  showTime,
  isRange,
  rangeMode,
}: DatepickerProps) => {
  if (!isRange)
    return (
      <DatePicker
        allowClear={allowClear}
        showTime={showTime}
        onChange={onChange}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        autoFocus={autoFocus}
        bordered={bordered}
        className={className}
        // dateRender={dateRender}
        disabledDate={disabledDate}
        dropdownClassName={dropdownClassName}
        getPopupContainer={getPopupContainer}
        inputReadOnly={inputReadOnly}
        locale={locale}
        mode={mode}
        nextIcon={nextIcon}
        open={open}
        panelRender={panelRender}
        picker={picker}
        popupStyle={popupStyle}
        prevIcon={prevIcon}
        size={size}
        suffixIcon={suffixIcon}
        superNextIcon={superNextIcon}
        superPrevIcon={superPrevIcon}
        onOpenChange={onOpenChange ? onOpenChange : undefined}
        // onPanelChange={onPanelChange ? onPanelChange : undefined}
        format={dateFormat}
      />
    );
  else {
    return (
      <RangePicker
        allowClear={allowClear}
        showTime={showTime}
        onChange={onChange}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        autoFocus={autoFocus}
        bordered={bordered}
        className={className}
        // dateRender={dateRender}
        disabledDate={disabledDate}
        dropdownClassName={dropdownClassName}
        getPopupContainer={getPopupContainer}
        inputReadOnly={inputReadOnly}
        locale={locale}
        mode={rangeMode}
        nextIcon={nextIcon}
        open={open}
        panelRender={panelRender}
        picker={picker}
        popupStyle={popupStyle}
        prevIcon={prevIcon}
        size={size}
        suffixIcon={suffixIcon}
        superNextIcon={superNextIcon}
        superPrevIcon={superPrevIcon}
        onOpenChange={onOpenChange ? onOpenChange : undefined}
        // onPanelChange={onPanelChange ? onPanelChange : undefined}
        format={dateFormat}
      />
    );
  }
};
