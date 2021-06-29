import { memo } from 'react'
import { Table, Tooltip, Button } from 'components'
import { ICPlus } from 'icons'
import { useUi } from 'hooks'

export const PatientInteractionsList = memo(() => {
  const { toggleDialog } = useUi()

  return (
    <div className="w-full flex flex-col items-end">
      <Tooltip content="Create">
        <Button
          icon
          className="peer"
          onClick={(e) => {
            e.stopPropagation()
            toggleDialog({
              open: true,
              type: 'patient-interactions-form',
            })
          }}
        >
          <ICPlus className="w-10 h-10 mt-4 text-secondary" />
        </Button>
      </Tooltip>
      <Table
        className="w-full my-4"
        columns={[
          { head: 'Interaction type', key: 'type', width: 'w-1/4' },
          { head: 'Interaction date', key: 'date', width: 'w-1/4' },
          { head: 'Contact admin', key: 'admin', width: 'w-1/4' },
          { head: 'Contact details', key: 'details', width: 'w-1/4' },
        ]}
        data={[
          {
            type: 'Test type',
            date: '2020-04-06 16:30',
            admin: 'Sunny',
            details: 'Test details',
          },
          {
            type: 'Test type',
            date: '2020-04-06 16:30',
            admin: 'Sunny',
            details: 'Test details',
          },
          {
            type: 'Test type',
            date: '2020-04-06 16:30',
            admin: 'Sunny',
            details: 'Test details',
          },
          {
            type: 'Test type',
            date: '2020-04-06 16:30',
            admin: 'Sunny',
            details: 'Test details',
          },
          {
            type: 'Test type',
            date: '2020-04-06 16:30',
            admin: 'Sunny',
            details: 'Test details',
          },
        ]}
        total={5}
      />
    </div>
  )
})
