import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { useGetTeamQuery } from '../../../graphql/queries/GetTeam.generated'
import { useDeletePlayerMutation } from '../../../graphql/mutations/DeletePlayer.generated'

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      teamId: context.query.id,
    },
  }
}

const TeamPage: NextPage<{ teamId: string }> = ({ teamId }) => {
  const [result] = useGetTeamQuery({
    variables: {
      id: teamId ?? '',
    },
    pause: !teamId, // don't run if there is no teamId
  })

  const [_, deletePlayer] = useDeletePlayerMutation()

  const onDeletePlayer = async (playerId: string) => {
    const confirmed = window.confirm('Are you sure you want to delete this player?')

    if (confirmed) {
      const result = await deletePlayer({ id: playerId })
    }
  }

  const router = useRouter()

  const players = result?.data?.getTeam?.players

  return (
    <div className="space-y-8">
      <h1 className="text-3xl">{result?.data?.getTeam?.name}</h1>
      <div className="p-4 bg-red-50">
        <h2 className="text-2xl">Players</h2>
        <ul>
          {players?.map((player) => (
            <li key={player?.id}>
              <span>{player?.name}</span>
              <button onClick={() => onDeletePlayer(player?.id!)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Link href={`/team/${result?.data?.getTeam?.id}/edit`} passHref={true}>
          <span className="p-2 text-white bg-gray-500 cursor-pointer">Edit team</span>
        </Link>
      </div>
    </div>
  )
}

export default TeamPage
