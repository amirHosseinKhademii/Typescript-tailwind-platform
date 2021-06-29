import { memo } from 'react'
import { useForm } from 'react-hook-form'
import {
  Form,
  Input,
  Button,
  Select,
  SelectOption,
  DatePicker,
  TextArea,
} from 'components'

export const PatientInteractionsForm = memo(() => {
  const { control, handleSubmit } = useForm()
  return (
    <Form>
      <Select
        control={control}
        name="interaction_type"
        label="Interaction Type"
        className="mt-4"
      >
        <SelectOption value="Email">Email</SelectOption>
        <SelectOption value="Phone call">Phone call</SelectOption>
        <SelectOption value="In person">In person</SelectOption>
      </Select>
      <DatePicker
        control={control}
        name="interaction_datetime"
        label="Interaction datetime"
        className="my-4"
        defaultValue={new Date().toISOString().slice(0, 10)}
      />
      <Input
        control={control}
        name="contact_admin"
        label="Contact admin"
        className="mt-10"
      />
      <TextArea
        control={control}
        name="contact_detail"
        label="Contact detail"
        className="my-4"
      />
      <Button
        type="submit"
        className=" mx-auto w-1/2 h-12 my-10 ml-auto bg-pink-700 text-white"
        //loading={loading}
      >
        Save Interaction
      </Button>
    </Form>
  )
})
