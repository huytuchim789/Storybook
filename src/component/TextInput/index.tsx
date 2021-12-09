import { Input } from "antd";
import cx from 'classnames';
import { ErrorMessage, Field, FieldInputProps, FormikProps } from "formik";
import { ReactNode, } from "react";
import {SearchOutlined} from '@ant-design/icons';
import { levelPassword, MAX_LENGTH_TEXTAREA_INPUT, MAX_LENGTH_TEXT_INPUT, REGEX_EMAIL, REGEX_PASSWORD, TextInputSize, TextInputType, TYPE_TEXT_INPUT } from "../../common/constant";
import { passwordStrength } from "../../ultils/validate";

const { Search, Password, TextArea } = Input;

type ComponentTextInputProps = {
    typeInput: string;
    maxLength?: number;
    minLength?: number;
    field: FieldInputProps<any>;
    form: FormikProps<any>;
    onChange?: any;
    onBlur?: any;
    props: any;
}

const componentTextInput = ({ field, form, maxLength, minLength, ...props }: ComponentTextInputProps) => {
    const { onChange, onBlur, typeInput } = props;
    const { setFieldValue, handleBlur }: any = form;
    const { name }: any = field;

    const handleChange = (e: any) => {
      const { value } = e.target;
      if (!onChange) {
        setFieldValue(name, value);
      } else {
        onChange(e);
      }
    };
  
    const handleBlurInput = (e: any) => {
      const { value } = e.target;
      if (!onBlur) {
        handleBlur(e);
        typeInput === 'email' ? setFieldValue(name, e.target.value.replace(/ /g, '')) : setFieldValue(name, value.trim());
      } else {
        onBlur(e);
      }
    };
  
    return (
      <Input
        type="text"
        {...field}
        {...props}
        maxLength={maxLength || MAX_LENGTH_TEXT_INPUT}
        minLength={minLength}
        onChange={handleChange}
        onBlur={handleBlurInput}
      />
    );
  };

type ComponentSearchInputProps = {
  field: FieldInputProps<any>;
  form: FormikProps<any>;
  prefix?: ReactNode;
  maxLength?: number;
  minLength?: number;
  props: any;
}

const componentSearchInput = ({ field, form, maxLength, minLength, prefix, ...props }: ComponentSearchInputProps) => {
  const { onChange, onBlur }: any = props;
  const { setFieldValue, handleBlur }: any = form;
  const { name }: any = field;

  const handleChange = (e: any) => {
    const { value } = e.target;
    if (!onChange) {
      setFieldValue(name, value);
    } else {
      onChange(e);
    }
  };

  const handleBlurInput = (e: any) => {
    const { value } = e.target;
    if (!onBlur) {
      handleBlur(e);
      setFieldValue(name, value.trim());
    } else {
      onBlur(e);
    }
  };

  return (
    <Input
      {...field}
      {...props}
      maxLength={maxLength || MAX_LENGTH_TEXT_INPUT}
      minLength={minLength}
      prefix={prefix || <SearchOutlined/>}
      onChange={handleChange}
      onBlur={handleBlurInput}
    />
  );
};

// const componentSearchInput = ({ field, form, prefix, ...props }: ComponentSearchInputProps) => {
//   return <Search prefix={prefix || <SearchOutlined/>} enterButton={''} {...field} {...props} />;
// }

type ComponentPasswordInputProps = {
  field: FieldInputProps<any>;
  props: any;
  showLevelPassword?: boolean;
  label?: any;
  labelClassName?: string;
  required?: boolean;
  form: FormikProps<any>;
}

const componentPasswordInput = ({ field, showLevelPassword, label, labelClassName, form, ...props }: ComponentPasswordInputProps) => {
  const fieldVal = field.value;
  const addClassLevel =
    passwordStrength(fieldVal) < 2
      ? 'cd-input__label--low'
      : passwordStrength(fieldVal) < 3
      ? 'cd-input__label--medium'
      : passwordStrength(fieldVal) < 5
      ? 'cd-input__label--high'
      : '';

  return (
    <>
      {label && showLevelPassword && (
        <div className={cx('cd-text-input__label', labelClassName)}>
          {!!fieldVal && !!showLevelPassword && (
            <div className="cd-input__label--level">
              {levelPassword.map((item) => (
                <span
                  className={`cd-input__label--level-item ${item.level <= passwordStrength(fieldVal) && addClassLevel}`}
                  key={item.level}
                />
              ))}
              <span className={`cd-input__label--level-title ${addClassLevel}`}>
                {levelPassword.filter((item) => item.level === passwordStrength(fieldVal))[0]?.text}
              </span>
            </div>
          )}
        </div>
      )}
      <Password
        {...field}
        {...props}
      />
    </>
  );
};

type ComponentTextAreaInputProps = {
  field: FieldInputProps<any>;
  form: FormikProps<any>;
  maxLength?: number;
  props: any;
}

export const componentTextAreaInput = ({ maxLength, field, form, ...props }: ComponentTextAreaInputProps) => {
  const maxLengthTextarea = maxLength || MAX_LENGTH_TEXTAREA_INPUT;
  const { onChange, onBlur } = props as any;
  const { setFieldValue, handleBlur, values }: any = form;
  const { name }: any = field;
  const handleChange = (e: any) => {
    const { value } = e.target;
    if (!onChange) {
      setFieldValue(name, value);
    } else {
      onChange(e);
    }
  };

  const handleBlurTextArea = (e: any) => {
    const { value } = e.target;
    if (!onBlur) {
      handleBlur(e);
      setFieldValue(name, value.trim(value));
    } else {
      onBlur(e);
    }
  };

  return (
    <div className="cd-text-area">
      <TextArea
        rows={5}
        maxLength={maxLengthTextarea}
        {...field}
        {...props}
        onChange={handleChange}
        onBlur={handleBlurTextArea}
        value={values[name]}
      />
    </div>
  );
};

export type TextInputProps = {
    component?: any;
    placeholder?: string;   
    defaultValue?: string;
    allowClear?: boolean;
    disabled?: boolean;
    bordered?: boolean;    // Whether has border style
    maxLength?: any;
    minLength?: any;
    label?: string;
    name: string;
    containerClassName?: string;
    labelClassName?: string;
    errorClassName?: string;
    labelTootip?: any;
    value?: any;
    required?: boolean;
    id?: any;
    size?: keyof typeof TextInputSize;
    typeInput?: keyof typeof TextInputType;
    onPressEnter?: any;
    prefix?: ReactNode;
    suffix?: ReactNode;
    addonAfter?: ReactNode;
    addonBefore?: ReactNode;
    onChange?: any;
    onBlur?: any;
    loading?: boolean;
    enterButton?: (boolean | ReactNode);
    onSearch?: any;
    iconRender?: (visible: boolean) => ReactNode;
    visibilityToggle?:any;
    showLevelPassword?: boolean;
    autoSize?: any;
    showCount?: boolean;
    onResize?: any;
    rows?: number;
}

const TextInput = ({
    component,
    showLevelPassword,
    typeInput,
    placeholder,
    disabled, 
    maxLength, 
    onChange, 
    onBlur, 
    value, 
    containerClassName,
    label,
    name,
    required,
    labelClassName,
    labelTootip,
    errorClassName,
     ...props
}: TextInputProps) => {

    let componentOption: any = component || componentTextInput;

    switch (typeInput) {
        case TYPE_TEXT_INPUT.TEXT:
            componentOption = componentTextInput;
            break;
        case TYPE_TEXT_INPUT.EMAIL:
            componentOption = componentTextInput;
            break;
        case TYPE_TEXT_INPUT.SEARCH:
            componentOption = componentSearchInput;
            break;
        case TYPE_TEXT_INPUT.PASSWORD:
            componentOption = componentPasswordInput;
            break;
        case TYPE_TEXT_INPUT.TEXTAREA:
            componentOption = componentTextAreaInput;
            break;
    }

    const validateInput = (value: any) => {
        let errorMessage;
        if (required && !value) {
          errorMessage = `${name} is required`;
          return errorMessage;
        }
        if (typeInput === TYPE_TEXT_INPUT.EMAIL && !REGEX_EMAIL.test(value) ) {
            errorMessage = 'Email is invalid';
            return errorMessage;
        }
        if (typeInput === TYPE_TEXT_INPUT.PASSWORD && !REGEX_PASSWORD.test(value) ) {
          errorMessage = 'Password must contain at least 8 characters and includes at least an uppercase letter, a lowercase letter, a number and a special character';
          return errorMessage;
      }
        return errorMessage;
    }
    
    return ( 
        <div className={cx(containerClassName, 'cd-text-input')}>
            {label && (
                <div className={cx(labelClassName, 'cd-text-input__label')}>
                {label}&nbsp;{required ? '*' : ''} {labelTootip ?? ''}
                </div>
            )}
            <Field
                typeInput={typeInput}
                name={name}
                label={label}
                placeholder={placeholder}
                component={componentOption}
                showLevelPassword={showLevelPassword}
                validate={validateInput}
                {...props}
            />
            <ErrorMessage name={name} component="div" className={cx('cd-error-text', errorClassName)} />
        </div>
    )
}

export default TextInput;