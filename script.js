<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>過三關</title>
    <style>

      body {
        align-items: center;
          background-color:green;
          color:white;
          font-family: monospacef;
          font-style: oblique 40deg;
        padding: 10px;
        text-align: center;
      }

    .grid-item {
    width: 100px;
    height: 100px;
    background-color:green;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    cursor: pointer;
    color: black; 
    .grid-item {
    width: 100px;
    height: 100px;
    background-color: green;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    cursor: pointer;
}
white
.player-x {
    color: red;
}

.player-o {
    color: blue;
}
}

.player-x {
    color: black;
}

.player-o {
    color: black;
}
        body {
            background-color: black;
            color: white;
        }

        h1 {
            color: white;
            font-size: 48px;
            padding: 10px;
            text-align: center;
            background-color:green;
          border-radius: 10px; 
          
        }

        .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            width: 300px;
            margin: 0 auto;
        }

        .grid-item {
            width: 100px;
            height: 100px;
          background-color: yellow;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 48px;
            cursor: pointer;
          border-radius: 10px; 
          font-family: monospacef;
        }

        .player-x {
            color: black;
        }

        .player-o {
            color: black;
        }

        .message {
            text-align: center;
            margin-top: 20px;
        }

        footer {
            text-align: center;
            margin-top: 20px;
            background-color: red;
            padding: 10px;
          border-radius: 10px; 
        }
    </style>
</head>
<body>
    <header>
        <h1>過三關</h1>
    </header>
    <div class="grid-container">
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
    </div>
    <div class="message"></div>
    <footer>
        <b style="background-color: red;; color:white;">重設按鈕</b>
    </footer>

    <script>
        // JavaScript部分
        document.addEventListener('DOMContentLoaded', function() {
            const gridItems = document.querySelectorAll('.grid-item');
            const message = document.querySelector('.message');
            let currentPlayer = 'X';
            let gameActive = true;
            let gameState = ['', '', '', '', '', '', '', '', ''];
            const winningConditions = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];

            function handleCellClick(event) {
                const clickedCell = event.target;
                const clickedCellIndex = Array.from(gridItems).indexOf(clickedCell);

                if (gameState[clickedCellIndex] !== '' || !gameActive) {
                    return;
                }

                gameState[clickedCellIndex] = currentPlayer;
                clickedCell.textContent = currentPlayer;
                clickedCell.classList.add(`player-${currentPlayer}`);
                checkResult();
                togglePlayer();
            }

            function togglePlayer() {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }

            function checkResult() {
                let roundWon = false;
                for (let i = 0; i < winningConditions.length; i++) {
                    const condition = winningConditions[i];
                    const a = gameState[condition[0]];
                    const b = gameState[condition[1]];
                    const c = gameState[condition[2]];
                    if (a === '' || b === '' || c === '') {
                        continue;
                    }
                    if (a === b && b === c) {
                        roundWon = true;
                        break;
                    }
                }

                if (roundWon) {
                    message.textContent = `玩家 ${currentPlayer} 獲勝！`;
                    gameActive = false;
                    return;
                }

                if (!gameState.includes('')) {
                    message.textContent = '遊戲平局！';
                    gameActive = false;
                    return;
                }
            }

            function restartGame() {
                currentPlayer = 'X';
                gameActive = true;
                gameState = ['', '', '', '', '', '', '', '', ''];
                message.textContent = '';
                gridItems.forEach(item => {
                    item.textContent = '';
                    item.classList.remove('player-X', 'player-O');
                });
            }

            gridItems.forEach(item => {
                item.addEventListener('click', handleCellClick);
            });

            document.querySelector('footer').addEventListener('click', restartGame);
        });
    </script>
</body>
</html>
