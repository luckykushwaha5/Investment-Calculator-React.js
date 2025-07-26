import { useState } from "react"

export default function UserInput({userInput, changeHandler}){
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" 
                    required
                    value={userInput.initialInvestment}
                    onChange={(event) => changeHandler("initialInvestment",event.target.value)} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" 
                    required
                    value={userInput.annualInvestment}
                    onChange={(event) => changeHandler("annualInvestment",event.target.value)}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" 
                    required
                    value={userInput.expectedReturn}
                    onChange={(event) => changeHandler("expectedReturn",event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" 
                    required
                    value={userInput.duration}
                    onChange={(event) => changeHandler("duration",event.target.value)}/>
                </p>
            </div>
        </section>
    )
}