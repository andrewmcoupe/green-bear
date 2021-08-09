import React from 'react'
import { useMachine } from '@xstate/react'
import { useRouter } from 'next/router'
import { FormikErrors, useFormik } from 'formik'
import { withUrqlClient } from 'next-urql'
import { useCreateTeamMutation } from '../../graphql/mutations/CreateTeam.generated'

// create team and submit with name only
// further updates eg adding players are updates from an update team form

const CreateTeamPage = () => {
  const [_, createTeam] = useCreateTeamMutation()
  const router = useRouter()

  const createTeamForm = useFormik({
    initialValues: {
      name: '',
    },
    validate: (values) => {
      const errors: FormikErrors<typeof values> = {}

      if (!values.name) {
        errors.name = 'Required'
      }

      return errors
    },
    onSubmit: async (values) => {
      const createTeamResult = await createTeam({ name: values.name })

      alert(`${createTeamResult.data?.createTeam?.name} successfully created`)

      router.push(`/team/${createTeamResult.data?.createTeam?.id}/edit`)
    },
  })

  return (
    <div>
      <form onSubmit={createTeamForm.handleSubmit} className="flex flex-col space-y-4">
        <label htmlFor="">Team name</label>
        <input name="name" type="text" onChange={createTeamForm.handleChange} value={createTeamForm.values.name} />
        {createTeamForm.errors.name && <p className="text-red-500">{createTeamForm.errors.name}</p>}
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default withUrqlClient(() => ({
  url: 'http://localhost:3000/api/graphql',
}))(CreateTeamPage)
