export const REGEX_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const REGEX_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!-/:-@[-`{-~])[A-Za-z\d!-/:-@[-`{-~]{8,}$/;

export const MAX_LENGTH_TEXT_INPUT = 256;
export const MAX_LENGTH_TEXTAREA_INPUT = 2000;

export const TYPE_TEXT_INPUT = {
    TEXT: "text",
    EMAIL: "email",
    PASSWORD: "password",
    TEXTAREA: "textarea",
    SEARCH: "search",
};

export enum TextInputType {
    "text",
    "email",
    "password",
    "textarea",
    "search"
}

export enum TextInputSize {
    "large",
    "middle",
    "small",
}

export const levelPassword = [
    { level: 0, text: 'low' },
    { level: 1, text: 'low' },
    { level: 2, text: 'medium' },
    { level: 3, text: 'high' },
    { level: 4, text: 'high' },
  ];
