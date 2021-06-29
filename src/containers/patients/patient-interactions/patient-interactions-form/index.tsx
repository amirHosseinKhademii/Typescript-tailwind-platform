import { memo } from 'react'

import {
  Form,
  Input,
  Button,
  Select,
  SelectOption,
  DatePicker,
  TextArea,
} from 'components'

import { usePatientInteractionForm } from './use-patient-interaction-form'

export const PatientInteractionsForm = memo(() => {
  const { control, onSubmit, isLoading } = usePatientInteractionForm()

  return (
    <Form onSubmit={onSubmit}>
      <Select
        control={control}
        name="interaction_type"
        label="Interaction Type"
        className="mt-4"
      >
        <SelectOption value="email">Email</SelectOption>
        <SelectOption value="phone_call">Phone call</SelectOption>
        <SelectOption value="in_person">In person</SelectOption>
      </Select>
      <DatePicker
        control={control}
        name="interaction_datetime"
        label="Interaction datetime"
        className="my-4"
        //defaultValue={new Date().toISOString().slice(0, 10)}
        defaultValue="2021-06-29T18:02:12.944Z"
      />
      <Input
        control={control}
        name="contact_admin"
        label="Contact admin"
        className="mt-10"
      />
      <TextArea
        control={control}
        name="contact_details"
        label="Contact details"
        className="my-4"
      />
      <Button
        type="submit"
        className=" mx-auto w-1/2 h-12 my-10 ml-auto bg-pink-700 text-white"
        loading={isLoading}
      >
        Save Interaction
      </Button>
    </Form>
  )
})
