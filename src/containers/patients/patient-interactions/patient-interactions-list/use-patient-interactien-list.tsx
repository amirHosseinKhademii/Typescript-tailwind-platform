import { useCallback, useMemo, useState } from 'react'
import { useError, useService, useUi } from 'hooks'
import { Tooltip, Button } from 'components'
import { Api } from 'utils'
import { ICEdit } from 'icons'

export const usePatientInteractionList = () => {
  const [params, setParams] = useState({ page: null, search: null })
  const { useGet } = useService()
  const { onError } = useError()
  const { toggleDialog } = useUi()

  const { data, isLoading, isFetching } = useGet({
    key: ['PATIENT_INTERACTION_LIST', params],
    url: Api.interactions,
    onFocus: false,
    keepPreviousData: true,
    onError,
  })

  const columns = useMemo(
    () => [
      {
        head: 'Interaction type',
        key: 'interaction_type',
        width: 'w-1/6',
      },
      {
        head: 'Interaction date',
        key: 'interaction_datetime',
        width: 'w-1/6',
        render: (item) => (
          <span className="text-blue-600 text-xs">
            {item.interaction_datetime}
          </span>
        ),
      },
      { head: 'Contact admin', key: 'contact_admin', width: 'w-1/6' },
      { head: 'Contact details', key: 'contact_details', width: 'w-2/3' },
      {
        head: 'Actions',
        key: 'details',
        width: 'w-[30px]',
        render: (item) => (
          <Tooltip content="Edit">
            <Button
              icon
              className="peer hidden group-hover:block"
              onClick={(e) => {
                e.stopPropagation()
                toggleDialog({
                  open: true,
                  type: 'patient-interactions-form',
                  data: { ...item, isEditing: true },
                })
              }}
            >
              <ICEdit className="text-gray-500 w-5 h-5" />
            </Button>
          </Tooltip>
        ),
      },
    ],
    []
  )

  return {
    columns,
    data: data ? data.data : { count: 0, results: [] },
    isLoading: useMemo(() => isLoading || isFetching, [isLoading, isFetching]),
    page: useMemo(() => params.page, [params.page]),
    onPaginate: useCallback(
      (index) => {
        setParams((prev) => ({ ...prev, page: index }))
      },
      [params.page]
    ),
    onSearch: useCallback(
      (event) => {
        setTimeout(() => {
          setParams((prev) => ({
            ...prev,
            page: 1,
            search: event.target.value,
          }))
        }, 500)
      },
      [params.search]
    ),
  }
}
