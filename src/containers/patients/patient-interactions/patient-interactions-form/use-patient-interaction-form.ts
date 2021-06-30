import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useError, useService, useToast, useUi } from 'hooks'
import { Api } from 'utils'

export const usePatientInteractionForm = () => {
  const { usePost } = useService()
  const {
    toggleDialog,
    uiState: {
      dialog: { data },
    },
  } = useUi()
  const { onError } = useError()
  const { success } = useToast()

  const { control, handleSubmit } = useForm({
    defaultValues:
      data && data.isEditing
        ? {
            interaction_type: data.interaction_type,
            interaction_datetime: data.interaction_datetime,
            contact_admin: data.contact_admin,
            contact_details: data.contact_details,
          }
        : {},
  })

  const { mutate: save, isLoading: saveLoading } = usePost({
    url: Api.interactions,
    onError,
    onSuccess: () => {
      success('You successfully added an interaction.')
      toggleDialog({
        open: false,
        type: null,
      })
    },
  })

  const { mutate: edit, isLoading: editLoading } = usePost({
    url: data ? `${Api.interactions}/${data.patient_id}/` : '',
    onError,
    onSuccess: () => {
      success('You successfully edited an interaction.')
      toggleDialog({
        open: false,
        type: null,
      })
    },
  })

  return {
    control,
    handleSubmit,
    isLoading: useMemo(
      () => saveLoading || editLoading,
      [saveLoading, editLoading]
    ),
    onSubmit: useCallback(
      () =>
        handleSubmit((payload) =>
          data.isEditing ? edit({ payload }) : save({ payload })
        ),
      [data]
    ),
  }
}
