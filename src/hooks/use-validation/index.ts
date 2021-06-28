import { useCallback } from "react";
import {
  laterValidation,
  maxValidation,
  requiredValidation,
  minValidation,
  precentValidation,
} from "./utils";

export const useValidation = (props: IUseValidation) => {
  const { required, min, max, later, validation, precent } = props;

  return {
    validate: useCallback(
      (value) => {
        let error;
        if (required) {
          const requiredError = requiredValidation(value, required);
          error = requiredError ? requiredError : error;
        }
        if (max) {
          const maxError = maxValidation(value, max);
          error = maxError ? maxError : error;
        }
        if (min) {
          const minError = minValidation(value, min);
          error = minError ? minError : error;
        }
        if (later) {
          const laterError = laterValidation(value, later);
          error = laterError ? laterError : error;
        }
        if (precent) {
          const precentError = precentValidation(value);
          error = precentError ? precentError : error;
        }
        if (validation) {
          const validationError = validation(value);
          error = validationError ? validationError : error;
        }
        return error;
      },
      [required, min, max, later, validation, precent]
    ) as any,
  };
};
