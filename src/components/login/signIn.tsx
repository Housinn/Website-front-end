import React from 'react'

const signIn
 = () => {
  return (
    <div>
        <div>
            {/* <img src/> */}
        </div>
        <div>
            <h1>Welcome to Housinn</h1>

            <form>
                <label>Email</label>
                <input type='email' placeholder='Enter your email'/>
                <label>Password</label>
                <input type='password' placeholder='Enter your password'/>
            </form>

            <button>Sign in</button>
            <a>Forget your password?</a>

            <button>Sign in with Google</button>
            <button>Sign in with Apple</button>
        </div>
    </div>
  )
}

export default signIn
