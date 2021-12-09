import React, { CSSProperties, FunctionComponent, ReactNode } from 'react'
import { DatePicker, DatePickerProps } from 'antd'
interface DatepickerProps {
  onChange: any
  placeholder?: string
  defaultValue?: string
  disable?: string
  maxDate?: string | Date
  minDate?: string | Date
  validate?: string
  autoFocus?: Boolean
  bordered?: Boolean
  className?: string
  dateRender?: any
  disabledDate?: any
  dropdownClassName?: string
  getPopupContainer?: any
  inputReadOnly?: Boolean
  locale?: Object
  mode?: 'time' | 'date' | 'month' | 'year' | 'decade'
  nextIcon?: ReactNode
  open?: Boolean
  panelRender?: any
  picker?: 'date' | 'week' | 'month' | 'year' | 'quarter'
  popupStyle?: CSSProperties
  prevIcon?: ReactNode
  size?: 'large' | 'middle' | 'small'
  suffixIcon?: ReactNode
  superNextIcon?: ReactNode
  superPrevicon?: ReactNode
  onOpenChange?: any
  onPanelChange?: any
}
const Datepicker: FunctionComponent<DatePickerProps> = ({}) => {
  return <DatePicker></DatePicker>
}
DatePicker.defaultProps = {}
export default Datepicker
