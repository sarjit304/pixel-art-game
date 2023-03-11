import { useEffect, useState } from 'react';
import './Grid.css'

export default function Grid(props) {
    const { currentColor } = props;
    const NUMBER_OF_ROWS = 10;
    const NUMBER_OF_COLUMNS = 10;
    const DEFAULT_PIXEL_COLOR = 'lightgrey';

    const [grid, setGrid] = useState();

    useEffect(() => {
        displayGrid(NUMBER_OF_ROWS, NUMBER_OF_COLUMNS);
    }, [])

    function displayGrid(numberOfRows, numberOfColumns) {
        let grid = []
        for (let i=0; i<numberOfRows; i++) {
            let row = []
            for(let j=0; j<numberOfColumns; j++) {
                row.push(DEFAULT_PIXEL_COLOR);
            }
            grid.push(row)
        }
        setGrid(grid);
    }

    function placeholderGridArt() {
        let newGrid = [...grid];

        newGrid[2][2] = 'black';
        newGrid[2][3] = 'black';
        newGrid[3][2] = 'black';
        newGrid[3][3] = 'black';

        newGrid[2][6] = 'black';
        newGrid[2][7] = 'black';
        newGrid[3][6] = 'black';
        newGrid[3][7] = 'black';

        newGrid[5][1] = 'black';
        newGrid[6][1] = 'black';
        newGrid[6][2] = 'black';
        newGrid[7][2] = 'black';
        newGrid[7][3] = 'black';
        newGrid[7][4] = 'black';
        newGrid[7][5] = 'black';
        newGrid[7][6] = 'black';
        newGrid[7][7] = 'black';

        newGrid[8][3] = 'black';
        newGrid[8][4] = 'black';
        newGrid[8][5] = 'black';
        newGrid[8][6] = 'black';

        newGrid[7][7] = 'black';
        newGrid[7][8] = 'black';

        newGrid[6][8] = 'black';
        console.log(newGrid);
        setGrid(newGrid);
    }

    function handleClick(rowIdx, colIdx) {
        let newGrid = [...grid];
        newGrid[rowIdx][colIdx] = currentColor;
        setGrid(newGrid);
    }

    return <div className="grid-container" style={{width: (NUMBER_OF_COLUMNS*2.2)+'em'}}>
        {grid? grid.map((row, rowIdx) => {
            return <div className='grid-row' key={'row' + rowIdx}> {row.map((col, colIdx) => {
                return <div 
                            className='grid-element' 
                            key={rowIdx + ',' + colIdx} 
                            onClick={() => handleClick(rowIdx, colIdx)}
                            style={{backgroundColor: grid[rowIdx][colIdx]}}
                            >
                        </div>
            })}
            </div>
        }): null}
        <div id='current-color-div' style={{backgroundColor: currentColor}}>Current Color</div>
        <button id='reset-button' onClick={() => displayGrid(NUMBER_OF_ROWS, NUMBER_OF_COLUMNS)}>Reset Grid</button>
    </div>
}