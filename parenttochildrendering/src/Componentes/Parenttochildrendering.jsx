

const Parenttochildrendering = () => {
    return (
        <>
            <div>
                <PlayButton />
                <UploadButton />
                <RestartButton />
            </div>
        </>
    )
}
export default Parenttochildrendering

function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

function PlayButton({ }) {
    //   function handlePlayClick() {
    //     alert(`Playing`);
    //   }

    //   return (
    //     <Button onClick={handlePlayClick}>
    //       Play 
    //     </Button>
    //   );

    return (
        <Button onClick={() => alert('Plaing!')}>
            Play
        </Button>
    );

}

function UploadButton() {
    return (
        <Button onClick={() => alert('Uploading!')}>
            Upload
        </Button>
    );
}

function RestartButton() {
    return (
        <Button onClick={() => alert('Restarting!')}>
            Restart
        </Button>
    );
}



