import React from 'react'
import ReactFlow, { Background, BackgroundVariant, removeElements } from 'react-flow-renderer'
import { Player } from '../../graphql/schema-types.generated'

const buildElementsFromPlayers = (players: Player[]) => {
  return players.map((player) => ({
    id: player.id as string,
    type: 'output', // output node
    data: { label: player.name },
    position: { x: 250, y: 250 },
  }))
}

const Formation: React.FC<{ players: Player[] }> = (props) => (
  <div style={{ height: 300 }}>
    <ReactFlow elements={buildElementsFromPlayers(props.players)} snapToGrid={true}>
      <Background variant={BackgroundVariant.Lines} gap={20} size={2} className="bg-green-600" />
    </ReactFlow>
  </div>
)

export default Formation
