import React from 'react'
import Tile from './Tile'
import Strike from './Strike'

function Board({tile, onTileSubmit, playerTurn , strikeClass}) { 
    
  return (
    <div className='board'>
       <Tile playerTurn={playerTurn} onClick={ ()=> onTileSubmit(0)} value={tile[0]} className="right-border bottom-border"/>
       <Tile playerTurn={playerTurn} onClick={ ()=> onTileSubmit(1)} value={tile[1]} className="right-border bottom-border"/>
       <Tile playerTurn={playerTurn} onClick={ ()=> onTileSubmit(2)} value={tile[2]} className="bottom-border"/>
       <Tile playerTurn={playerTurn} onClick={ ()=> onTileSubmit(3)} value={tile[3]} className="right-border bottom-border"/>
       <Tile playerTurn={playerTurn} onClick={ ()=> onTileSubmit(4)} value={tile[4]} className="right-border bottom-border"/>
       <Tile playerTurn={playerTurn} onClick={ ()=> onTileSubmit(5)} value={tile[5]} className="bottom-border"/>
       <Tile playerTurn={playerTurn} onClick={ ()=> onTileSubmit(6)} value={tile[6]} className="right-border"/>
       <Tile playerTurn={playerTurn} onClick={ ()=> onTileSubmit(7)} value={tile[7]} className="right-border"/>
       <Tile playerTurn={playerTurn} onClick={ ()=> onTileSubmit(8)} value={tile[8]} /> 

       <Strike strikeClass={strikeClass} />
    </div>
  )
}

export default Board
