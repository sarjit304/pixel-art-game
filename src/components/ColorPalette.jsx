import './ColorPalette.css'

function ColorPalette(props) {
    const { setCurrentColor } = props;
    const colors = ['red', 'blue', 'green', 'black', 'yellow', 'purple'];

    function changeColor(color) {
        setCurrentColor(color);
    }

    return <div id='palette-container'>
        <h1 id='color-palette-header'>Choose a color</h1>
        {colors.map(color => {
            return (
                <button 
                    onClick={() => changeColor(color)} 
                    style={{backgroundColor: color}}
                    key={color}
                >
                </button>
            )
        })}
    </div> 
}

export default ColorPalette;