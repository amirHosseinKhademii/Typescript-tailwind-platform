import { memo } from 'react'
import { Button } from 'components'
import { useUi } from 'hooks/use-ui'

export const PatientinteractionListToolbar = memo(() => {
  const { toggleDialog } = useUi()

  return (
    <Button
      className="peer bg-primary p-2 text-white text-sm my-2"
      onClick={(e) => {
        e.stopPropagation()
        toggleDialog({
          open: true,
          type: 'patient-interactions-form',
        })
      }}
    >
      Create
    </Button>
  )
})
