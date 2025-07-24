

const Parenttochildrendering = () => {
    return (
        <>
            <div className="m-2">
                <PlayButton />
                <UploadButton />
                <RestartButton />
                <LogoutButton/>
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

function PlayButton() {
 

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


function LogoutButton() {
    return (
        <Button onClick={() => alert('Restarting!')}>
            logout
        </Button>
    );
}



