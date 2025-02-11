function Button({buttonText, disabledButton}) {
    return (
        <button onClick={() => {
            console.log(buttonText);
        }} disabled={disabledButton}>{buttonText}</button>
    );
}

export default Button