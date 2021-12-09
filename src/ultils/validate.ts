export function passwordStrength(pw: string): number {
    return (
      (/.{8,}/.test(pw) ? 1 : 0) /* at least 8 characters */ *
      ((/[a-z]/.test(pw) ? 1 : 0) /* a lower letter */ +
        (/[A-Z]/.test(pw) ? 1 : 0) /* a upper letter */ +
        (/\d/.test(pw) ? 1 : 0) /* a digit */ +
        (/[^A-Za-z0-9]/.test(pw) ? 1 : 0)) /* a special character */
    );
  }