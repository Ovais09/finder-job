

function jobpost() {
    return (
        <form>
            <div>
                <label htmlFor='joburl'>URL of Job Position</label>
                <br />
                <input type='text' id='joburl' />

                <h2>Create your own Job posting!</h2>
                <label htmlFor='job'>Job Title</label>
                <br />
                <input type='text' id='job' />
                <br />
                <label htmlFor='company'>Company Name</label>
                <br />
                <input type='text' id='company' />
                <br />
                <label htmlFor='location'>Location</label>
                <br />
                <input type='text' id='location' />
                <br />
                <label htmlFor='description'>Description</label>
                <br />
                <textarea id='description' />
                <br />
                <label htmlFor='requirements'>Requirements</label>
                <br />
                <textarea id='requirements' />
                <br />
                <label htmlFor='salary'>Salary</label>
                <br />
                <input type='text' id='salary' />
                <br />
                <label htmlFor='contact'>Contact</label>
                <br />
                <input type='text' id='contact' />
                <br />
                <label htmlFor='email'>Email</label>
                <br />
                <input type='text' id='email' />
                <br />
                <label htmlFor='phone'>Phone</label>
                <br />
                <input type='text' id='phone' />
                <br />
                <label htmlFor='website'>Website</label>
                <br />
                <input type='text' id='website' />
                <br />
            </div>
        </form>
    )
}

export default jobpost