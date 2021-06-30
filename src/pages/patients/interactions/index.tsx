import { PatientInteractionsList, PatientInteractionsModal } from 'containers'
import { useUi } from 'hooks'

const PatientInteractions = () => {
  const {
    uiState: {
      dialog: { open },
    },
  } = useUi()
  return (
    <>
      <PatientInteractionsList />
      {open && <PatientInteractionsModal />}
    </>
  )
}

export default PatientInteractions
