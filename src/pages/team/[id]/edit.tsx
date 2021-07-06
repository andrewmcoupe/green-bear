import React from 'react'
import { GetServerSideProps, NextComponentType, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useMachine } from '@xstate/react'
import { FormikErrors, useFormik } from 'formik'
import { PartialNextContext, withUrqlClient, WithUrqlProps } from 'next-urql'
import { useCreatePlayerMutation } from '../../../graphql/mutations/CreatePlayer.generated'

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      teamId: context.query.id,
    },
  }
}

const EditTeamPage: React.FC<{ teamId: string }> = (props) => {
  const router = useRouter()

  const [_, createPlayer] = useCreatePlayerMutation()

  const createPlayerForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
    },
    validate: (values) => {
      const errors: FormikErrors<typeof values> = {}
      if (!values.name) {
        errors.name = 'Name must be provided'
      }
      if (!values.email) {
        errors.email = 'Email must be provided'
      }

      return errors
    },
    onSubmit: async (values) => {
      const result = await createPlayer({
        teamId: props.teamId,
        name: values.name,
        email: values.name,
        phoneNumber: values.phoneNumber,
      })

      alert(`${result.data?.createPlayer?.name} created!`)

      router.push(`/team/${props.teamId}`)
    },
  })

  return (
    <div>
      <h1>Add a player</h1>
      <form onSubmit={createPlayerForm.handleSubmit} className="flex flex-col space-y-4">
        <label htmlFor="">Player name</label>
        <input name="name" type="text" onChange={createPlayerForm.handleChange} value={createPlayerForm.values.name} />
        {createPlayerForm.errors.name && <p className="text-red-500">{createPlayerForm.errors.name}</p>}

        <label htmlFor="">Player email</label>
        <input
          name="email"
          type="text"
          onChange={createPlayerForm.handleChange}
          value={createPlayerForm.values.email}
        />
        {createPlayerForm.errors.email && <p className="text-red-500">{createPlayerForm.errors.email}</p>}
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default EditTeamPage
