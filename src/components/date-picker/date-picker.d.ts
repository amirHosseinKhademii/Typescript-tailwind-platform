interface IDatePicker {
  className?: string;
  label?: string;
  register?: any;
  value?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "date";
  error?: string;
  name?: string;
  id?: string;
  later?: boolean | undefined;
  required?: boolean | undefined;
  max?: string | number | undefined;
  min?: string | number | undefined;
  precent?: boolean;
  size?: "small" | "default" | "large";
  disabled?: boolean;
  onClick?: any;
  withError?: boolean;
  icon?: any;
  interactive?: boolean;
  open?: boolean;
  toggle?: any;
  validate?: any;
  validation?: any;
  onChange?: any;
  setValue?: any;
}
