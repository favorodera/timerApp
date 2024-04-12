import React from "react";
import "/assets/css/webpage.css";

function Webpage() {

    const startTimer = () => {

        let hoursInput = document.getElementById("hours");
        let minutesInput = document.getElementById("minutes");
        let secondsInput = document.getElementById("seconds");
        let startButton = document.querySelector(".startButton");
        let inputs = document.querySelectorAll("input")
        let pauseButton = document.querySelector(".pauseButton")
        let resetButton = document.querySelector(".resetButton")
        let errorMessage = document.querySelector(".errorMessage");

        for (const input of inputs) {

            input.addEventListener("click", function clearErrorMessage() {

                errorMessage.innerHTML = "";
                errorMessage.style.visibility = "hidden";

            });

        };

        if (secondsInput.value === "" && minutesInput.value === "" && hoursInput.value === "") {

            errorMessage.innerHTML = "Please Input A Value";
            errorMessage.style.visibility = "visible";

            return
        };

        let startTimerSetInterval = setInterval(() => {

            if (parseFloat(secondsInput.value) > 0 && minutesInput.value === "" && parseFloat(hoursInput.value) > 0) {

                minutesInput.value = "60";
                hoursInput.value--;

            }

            if (secondsInput.value === "") {

                if (secondsInput.value === "" && minutesInput.value === "" && parseFloat(hoursInput.value) !== 0) {

                    hoursInput.value--;
                    minutesInput.value = "60";

                }

                minutesInput.value--
                secondsInput.value = "60"

            }

            secondsInput.value--

            startButton.disabled = true

            for (const input of inputs) {

                input.readOnly = true

            }

            if (secondsInput.value === "0" && minutesInput.value === "" && hoursInput.value === "") {

                clearInterval(startTimerSetInterval)

                secondsInput.value = ""
                minutesInput.value = ""
                hoursInput.value = ""

                startButton.disabled = false

                for (const input of inputs) {

                    input.readOnly = false

                }

            } else if (secondsInput.value === "0" && minutesInput.value === "0" & hoursInput.value === "0") {

                clearInterval(startTimerSetInterval)

                secondsInput.value = ""
                minutesInput.value = ""
                hoursInput.value = ""

                startButton.disabled = false

                for (const input of inputs) {

                    input.readOnly = false

                }

            }

            if (secondsInput.value === "0") {

                if (minutesInput.value === "0" && parseFloat(hoursInput.value) > 0) {

                    hoursInput.value--;
                    minutesInput.value = "60"

                };

                minutesInput.value--;
                secondsInput.value = "59";

                if (minutesInput.value === "0") {

                    hoursInput.value--;
                    minutesInput.value = "59";

                }

            }

        }, 1000);

        pauseButton.addEventListener("click", function pauseTimer() {

            clearInterval(startTimerSetInterval);

            secondsInput.innerHTML = secondsInput.value;

            minutesInput.innerHTML = minutesInput.value;

            hoursInput.innerHTML = hoursInput.value;

            startButton.disabled = false;

        });


        resetButton.addEventListener("click", function resetTimer() {

            clearInterval(startTimerSetInterval)

            secondsInput.value = "";
            
            minutesInput.value = "";
            
            hoursInput.value = "";
            

            startButton.disabled = false;

            for (const input of inputs) {

                input.readOnly = false;

            };

        });

    };
 

    return (
        <>

            <div className="timerContainer">

                <h1 className="timerHeader">TIMER</h1>
                <p className="errorMessage"></p>

                <form action="submit" className="timerInputsContainer">

                    <div className="hours">

                        <label htmlFor="hours">Hours</label>
                        <input type="number" id="hours" placeholder="00" name="hours" maxLength={2} max={24} />

                    </div>

                    <div className="minutes">

                        <label htmlFor="minutes">Minutes</label>
                        <input type="number" id="minutes" placeholder="00" name="minutes" maxLength={2} max={60} />

                    </div>

                    <div className="seconds">

                        <label htmlFor="seconds">Seconds</label>
                        <input type="number" id="seconds" placeholder="00" name="seconds" maxLength={2} max={60} />

                    </div>

                </form>

                <div className="controlButtonsContainer">

                    <button type="button" className="startButton" style={{ backgroundColor: "rgba(3, 174, 133, 1)", border: "1px solid rgba(3, 174, 133, 1)" }} onClick={startTimer}>START</button>

                    <button type="button" className="pauseButton" style={{ border: "1px solid rgba(209, 209, 209, 1)", backgroundColor: "rgba(234, 234, 234, 0)" }} >PAUSE</button>

                    <button type="button" className="resetButton" style={{ backgroundColor: "rgba(253, 98, 89, 1)", border: "1px solid rgba(253, 98, 89, 1)" }}>RESET</button>

                </div>

            </div>

            <a href="https://github.com/favorodera" style={{color:"white", fontSize:"25px", marginBottom:"50px"}}>Codes By favorodera</a>

        </>
    )
}

export default Webpage