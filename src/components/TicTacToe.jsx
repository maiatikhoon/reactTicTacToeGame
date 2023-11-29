import React, { useEffect, useState } from 'react'
import Board from './Board'  
import GameState from './GameSate';
import GameOver from './GameOver';
import Reset from './Reset';


const PLAYER_X ="X"; 
const PLAYER_O ="O";  

const winningCombinations = [ 

    // Rows
     {combo: [0,1,2] , strikeClass: "strike-row-1"}, 
     {combo: [3,4,5] , strikeClass: "strike-row-2"}, 
     {combo: [6,7,8] , strikeClass: "strike-row-3"},  

     // Columns
     {combo: [0,3,6], strikeClass:"strike-column-1"},
     {combo: [1,4,7], strikeClass:"strike-column-2"},
     {combo: [2,5,8], strikeClass:"strike-column-3"},

     // Diagonal 
     {combo: [0,4,8], strikeClass: "strike-diagonal-1"}, 
     {combo: [2,4,6], strikeClass: "strike-diagonal-2"},  

];
 

const checkWinner=(tile, setStrikeClass, setGameState)=> {
        
    for(let {combo , strikeClass} of winningCombinations) { 

        const tileValue1 = tile[combo[0]] ; 
        const tileValue2 = tile[combo[1]] ; 
        const tileValue3 = tile[combo[2]] ; 

        if(tileValue1!==null && tileValue1===tileValue2 && tileValue1===tileValue3) { 

            setStrikeClass(strikeClass); 

            if(tileValue1 ===PLAYER_X) {
                setGameState(GameState.playerXWins) ; 
            } 
            else {
                setGameState(GameState.playerOWins) ;
            }

            return ;
        }
           
    }  

    // in case of draw 
    // every method return true of false value 
    const areAllTilesFilledIn = tile.every( (tile)=> tile!=null) ; 

    if(areAllTilesFilledIn) { 
        setGameState(GameState.draw) ; 
    }


}

function TicTacToe() { 

    const [tile , setTile] = useState(Array(9).fill(null)) ;  
    const [playerTurn , setPlayerTurn ] = useState(PLAYER_X) ;   
    const [strikeClass , setStrikeClass ] = useState(null) ;  
    const [gameState, setGameState ] = useState(GameState.inProgress) ; 



    useEffect( ()=> { 

        checkWinner(tile, setStrikeClass , setGameState) ;    

    }, [tile]); 


    const handleReset =()=> { 
          
        setTile(Array(9).fill(null)) ; 
        setPlayerTurn(PLAYER_X);
        setStrikeClass(null) ; 
        setGameState(GameState.inProgress) ; 
    }

    const handleSubmit =(index)=> { 
        //  console.log(index) ;  

        if(gameState!==GameState.inProgress) {
              return ; 
        }

        if(tile[index]!==null){
             return;
        }
       

        const newTile = [...tile] ; 
        newTile[index] = playerTurn;  
        setTile(newTile) ; 
        
        if(playerTurn==="X") {
            setPlayerTurn(PLAYER_O) ;
        }else {
            setPlayerTurn(PLAYER_X) ;
        }

    } 

  return (  
    <div>
        <h1> Tic Tac Toe </h1> 
        <Board
         tile ={tile}
         onTileSubmit={handleSubmit} 
         playerTurn={playerTurn}  
         strikeClass={strikeClass} 

        /> 

         <GameOver gameState={gameState}/> 
         <Reset onReset={handleReset} gameState={gameState}/>
    </div>
  )
}

export default TicTacToe
