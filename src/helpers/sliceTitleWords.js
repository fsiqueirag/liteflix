export  const sliceTitleWords = (title) => {

    const slicedTitle = title.split(' ');
    
    const titleLength = title.length >= 30 ? 'big-title' : (title.length >= 20 ? 'medium-title' : 'small-title');

    return slicedTitle.map((word, i) => {

        return (
            <h1
            className={`home__movie-title ${titleLength}`}

            >
                <span
                    key={i}
                    style={{
                        animation: `fade${i % 2 === 0 ? 'down' : 'up'} 600ms ${1000 + (i + (i * 150))}ms ease backwards`,
                    }}
                >
                    {word}
                </span>
            </h1>
        )
    });
}