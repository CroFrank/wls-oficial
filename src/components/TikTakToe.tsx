import { useState, useEffect } from "react"
import { facts } from "src/data/reusable"
import { motion } from "motion/react"

type Player = "X" | "O"
type Cell = Player | null
type Board = Cell[]
type Winner = Player | "draw" | null

const initialBoard: Board = Array(9).fill(null)

const lines: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

export default function TicTacToe() {
  const [board, setBoard] = useState<Board>(initialBoard)
  const [isPlayerTurn, setIsPlayerTurn] = useState<boolean>(true)
  const [gameCount, setGameCount] = useState<number>(0)
  const [gameOver, setGameOver] = useState<boolean>(false)
  const [winner, setWinner] = useState<Winner>(null)

  function getRandomItem<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
  }

  const checkWinner = (b: Board): Winner => {
    for (let [a, b1, c] of lines) {
      if (b[a] && b[a] === b[b1] && b[a] === b[c]) return b[a]
    }
    if (b.every((cell) => cell !== null)) return "draw"
    return null
  }

  const minimax = (
    newBoard: Board,
    isMaximizing: boolean
  ): { index: number; score: number } => {
    const result = checkWinner(newBoard)
    if (result === "O") return { score: 1, index: -1 }
    if (result === "X") return { score: -1, index: -1 }
    if (result === "draw") return { score: 0, index: -1 }

    const scores: { index: number; score: number }[] = []

    newBoard.forEach((cell, i) => {
      if (cell === null) {
        const newB = [...newBoard]
        newB[i] = isMaximizing ? "O" : "X"
        const result = minimax(newB, !isMaximizing)
        scores.push({ index: i, score: result.score })
      }
    })

    return isMaximizing
      ? scores.reduce((a, b) => (a.score > b.score ? a : b))
      : scores.reduce((a, b) => (a.score < b.score ? a : b))
  }

  const aiMove = () => {
    const move = minimax(board, true)
    if (move && move.index !== undefined) {
      const newBoard = [...board]
      newBoard[move.index] = "O"
      setBoard(newBoard)
      setIsPlayerTurn(true)
    }
  }

  const handleClick = (i: number) => {
    if (!isPlayerTurn || board[i] || gameOver) return
    const newBoard = [...board]
    newBoard[i] = "X"
    setBoard(newBoard)
    setIsPlayerTurn(false)
  }

  useEffect(() => {
    const result = checkWinner(board)
    if (result) {
      setGameOver(true)
      setWinner(result)
    } else if (!isPlayerTurn) {
      setTimeout(() => aiMove(), 500)
    }
  }, [board, isPlayerTurn])

  const resetGame = () => {
    const nextGame = gameCount + 1
    setGameCount(nextGame)
    setBoard(initialBoard)
    setGameOver(false)
    setWinner(null)
    const aiStarts = nextGame % 2 === 1
    setIsPlayerTurn(!aiStarts)
    if (aiStarts) {
      setTimeout(() => aiMove(), 500)
    }
  }

  const renderCell = (i: number) => {
    const symbol = board[i]

    return (
      <button
        key={i}
        className="w-20 h-20 border text-3xl font-bold flex items-center justify-center"
        onClick={() => handleClick(i)}
      >
        {symbol === "X" ? (
          <motion.div
            key={`X-${i}-${gameCount}`}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            X
          </motion.div>
        ) : (
          symbol
        )}
      </button>
    )
  }

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <div className="text-center">
        <h2 className="text-xl font-semibold">
          Vi ste: X - Protivnik (AI) je: O
        </h2>
        <p className="text-md mt-1">
          {gameOver
            ? winner === "draw"
              ? "Neriješeno!"
              : winner === "X"
              ? "Bravo! Pobijedili ste!"
              : "AI je pobijedio 😈"
            : isPlayerTurn
            ? "Vi ste na redu..."
            : "AI razmišlja..."}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-1">
        {board.map((_, i) => renderCell(i))}
      </div>

      {gameOver && (
        <div className="mt-4 text-center space-y-2">
          <p className="font-medium">Zanimljivost:</p>
          <p className="italic">{getRandomItem(facts)}</p>
          <button
            className="mt-2 px-4 py-2 bg-amber-400 text-black rounded-xl shadow hover:bg-amber-300"
            onClick={resetGame}
          >
            Igraj ponovno
          </button>
        </div>
      )}
      <p className="text-center mt-10">
        Ako se stranica uspori zbog previše animacije jednostavno je osvježite:
      </p>
      <button
        className="border border-white text-white bg-transparent hover:bg-white/10 px-4 py-2 rounded-lg transition"
        onClick={() => window.location.reload()}
      >
        Osvježi
      </button>
    </div>
  )
}
