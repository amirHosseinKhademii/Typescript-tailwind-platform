import { PatientList, PatientModal } from 'containers'
import { useUi } from 'hooks'

const Patients = () => {
  const {
    uiState: {
      dialog: { open },
    },
  } = useUi()
  return (
    <>
      <PatientList />
      {open && <PatientModal />}
    </>
  )
}

export default Patients
