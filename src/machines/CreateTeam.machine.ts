import { createMachine } from 'xstate'

export const CreateTeamMachine = createMachine({
  id: 'createTeamMachine',
  initial: 'setTeamName',
  context: {
    name: '',
    players: [],
  },
  states: {
    setTeamName: {
      on: {
        NEXT: 'setTeamPlayers',
      },
    },
    setTeamPlayers: {
      on: {
        BACK: 'setTeamName',
        NEXT: 'confirmTeam',
      },
    },
    confirmTeam: {
      on: {
        BACK: 'setTeamPlayers',
        CONFIRM: 'confirmed',
      },
    },
    confirmed: {},
  },
})
