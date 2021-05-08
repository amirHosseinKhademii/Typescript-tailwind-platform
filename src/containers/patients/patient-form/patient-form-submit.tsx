import { Button } from "components/button";

export const PatientFormSubmit = () => {
  return (
    <Button
      type="submit"
      className=" w-1/2 md:w-1/6 h-12 my-10 ml-auto bg-danger text-white"
    >
      Save Patient
    </Button>
  );
};
