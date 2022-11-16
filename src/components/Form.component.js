const Form = () => {

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        alert("sucess")
    }

    return (
        <div className="one-card margin-bottom">

            <form onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input className="input-in-card" type="email" name="email" />

                <input className="button-color" type="submit" name="submit" />
            </form>
        </div>
    );
}

export default Form