import { Button, Tooltip } from 'components'
import { useUi } from 'hooks'
import { ICDelete, ICEdit, ICEyeFill, ICInteractions } from 'icons'

export const PatientListActions = ({ item }) => {
  const { toggleDialog } = useUi()

  return (
    <div className="hidden w-full  items-center justify-end  group-hover:flex ">
      <Tooltip content="Interactions">
        <Button
          className="peer"
          icon
          onClick={(e) => {
            e.stopPropagation()
            toggleDialog({
              open: true,
              type: 'patient-interactions',
              data: item,
            })
          }}
        >
          <ICInteractions className="text-green-300 w-5 h-5 mr-4 " />
        </Button>
      </Tooltip>
      <Tooltip content="Assets">
        <Button
          icon
          className="peer"
          onClick={(e) => {
            e.stopPropagation()
            toggleDialog({
              open: true,
              type: 'patient-assets',
              data: item,
            })
          }}
        >
          <ICEyeFill className="text-blue-300 w-5 h-5 mr-4 " />
        </Button>
      </Tooltip>
      <Tooltip content="Edit">
        <Button
          icon
          className="peer"
          onClick={(e) => {
            e.stopPropagation()
            toggleDialog({ open: true, type: 'patient-edit', data: item })
          }}
        >
          <ICEdit className="text-gray-500 w-5 h-5 mr-4 " />
        </Button>
      </Tooltip>
      <Tooltip content="Delete">
        <Button
          icon
          className="peer"
          onClick={(e) => {
            e.stopPropagation()
            toggleDialog({ open: true, type: 'patient-delete', data: item })
          }}
        >
          <ICDelete className="text-red-500 w-5 h-5  " />
        </Button>
      </Tooltip>
    </div>
  )
}
