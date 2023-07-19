const phonePattern = /^\+[0-9]{2}\((\d+)\)-\d{3}-\d{2}\d{2}/;

const emailPattern =
  /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;

export const useRequired = (val: string): true | 'Required!' =>
  !!val || 'Required!';
export const useMinLength = (val: string, minLength: number) =>
  val.length >= minLength || `Please use min ${minLength} character`;
export const useValidPhoneNumber = (
  val: string
): true | 'Invalid phone number' =>
  phonePattern.test(val) || 'Invalid phone number';
export const useValidEmail = (val: string): true | 'Invalid email' =>
  emailPattern.test(val) || 'Invalid email';
