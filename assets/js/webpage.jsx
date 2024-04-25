import React, { useState } from "react";
import "/assets/css/webpage.css";
import darkGithub from "/assets/media/icons/darkThemeGithubIcon.svg"
import sun from "/assets/media/icons/sun.svg"
import moon from "/assets/media/icons/moon.svg"
import lightGithub from "/assets/media/icons/lightThemeGithubIcon.svg"

function Webpage() {

    let [darkMode, setMode] = useState(true)

    const setTheme = (event) => {
        let inputs = document.querySelectorAll("input")
        let pauseButton = document.querySelector(".pauseButton")
        let webpageContainer = document.querySelector(".webpageContainer")
        let body = document.body
        let githubIconContainer = document.querySelector(".githubIconContainer")
        let githubIcon = document.querySelector(".githubIcon")
        let themeChangerIconContainer = document.querySelector(".themeChangerIconContainer")
        let themeChangerIcon = document.querySelector(".themeChangerIcon")
        let timerContainer = document.querySelector(".timerContainer")
        let timerHeader = document.querySelector(".timerHeader")
        let labels = document.querySelectorAll("label")


        event.preventDefault()

        if (darkMode === true) {

            setMode(darkMode = false)

            body.style.backgroundColor = "rgba(255, 255, 255, 1)"
            webpageContainer.style.backgroundColor = "rgba(255, 255, 255, 1)"
            themeChangerIcon.src = moon
            themeChangerIconContainer.style.cssText = "background-color:rgba(233, 233, 233, 1)"
            githubIcon.src = lightGithub
            githubIconContainer.style.cssText = "background-color:rgba(233, 233, 233, 1)"
            timerContainer.style.cssText = "background-color: rgba(249, 249, 249, 1);"
            timerHeader.style.cssText = "color:rgba(0, 0, 0, 1)"


            for (const input of inputs) {

                input.setAttribute("class", "lightModeInput")
            }

            for (const label of labels) {
                label.style.cssText = "color:rgba(0, 0, 0, 1);"
            }

            pauseButton.style.cssText = "color:rgba(50, 50, 50, 1); background-color:rgba(249, 249, 249, 1); border: 1px solid rgba(209, 209, 209, 1)"


        } else {

            setMode(darkMode = true)

            body.style.backgroundColor = "rgba(1, 19, 30, 1)"
            webpageContainer.style.backgroundColor = "rgba(1, 19, 30, 1)"
            themeChangerIcon.src = sun
            themeChangerIconContainer.style.cssText = "background-color: rgba(0, 39, 63, 1)"
            githubIcon.src = darkGithub
            githubIconContainer.style.cssText = "background-color: rgba(0, 39, 63, 1)"
            timerContainer.style.cssText = "background-color: rgba(1, 28, 44, 1);"
            timerHeader.style.cssText = "color: rgba(255, 255, 255, 1)"

            for (const input of inputs) {

                input.setAttribute("class", "darkModeInput")
            }

            for (const label of labels) {
                label.style.cssText = "rgba(255, 255, 255, 1);"
            }

            pauseButton.style.cssText = "rgba(255, 255, 255, 1); background-color:rgba(234, 234, 234, 0); border: 1px solid rgba(209, 209, 209, 1)"

        }
    }

    const inputFontSizeHandler = () => {

        let inputs = document.querySelectorAll("input")

        for (const input of inputs) {

            if (input.value.length === 3) {

                input.style.cssText = "font-size: 30px;"

                if (darkMode === false) {
                    input.classList.toggle("lightModeThreeValueInput")
                } else {
                    input.classList.toggle("darkModeThreeValueInput")
                }


            } else if (input.value.length === 4) {

                input.style.cssText = "font-size: 20px;"

                if (darkMode === false) {
                    input.classList.toggle("lightModeFourValueInput")
                } else {
                    input.classList.toggle("darkModeFourValueInput")
                }

            } else if (input.value.length >= 5) {

                input.style.cssText = "font-size: 15px;"

                if (darkMode === false) {
                    input.classList.toggle("darkModeFiveOrMoreThanFiveValueInput")
                } else {
                    input.classList.toggle("darkModeFiveOrMoreThanFiveValueInput")
                }

            } else if (input.value.length < 3) {

                input.style.cssText = "font-size: 45px;"
                input.classList.remove("darkModeFiveOrMoreThanFiveValueInput")

            }

        }
    }

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

        }

        if (secondsInput.value === "" && minutesInput.value === "" && hoursInput.value === "") {

            errorMessage.innerHTML = "Please Input A Value";
            errorMessage.style.visibility = "visible";

            return
        }

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

            if (secondsInput.value.length === 3 || minutesInput.value.length === 3 || hoursInput.value.length === 3) {

                for (const input of inputs) {

                    input.style.cssText = "font-size: 30px;"

                    if (darkMode === false) {
                        input.classList.add("lightModeThreeValueInput")
                    } else {
                        input.classList.add("darkModeThreeValueInput")
                    }

                }
            } else if (secondsInput.value.length === 4 || minutesInput.value.length === 4 || hoursInput.value.length === 4) {

                for (const input of inputs) {

                    input.style.cssText = "font-size: 20px;"

                    if (darkMode === false) {
                        input.classList.add("lightModeFourValueInput")
                    } else {
                        input.classList.add("darkModeFourValueInput")
                    }

                }

            } else if (secondsInput.value.length >= 5 || minutesInput.value.length >= 5 || hoursInput.value.length >= 5) {

                for (const input of inputs) {

                    input.style.cssText = "font-size: 15px;"

                    if (darkMode === false) {
                        input.classList.add("darkModeFiveOrMoreThanFiveValueInput")
                    } else {
                        input.classList.add("darkModeFiveOrMoreThanFiveValueInput")
                    }

                }

            } else if (secondsInput.value.length < 3 || minutesInput.value.length < 3 || hoursInput.value.length < 3) {

                for (const input of inputs) {

                    input.style.cssText = "font-size: 45px;"

                    if (darkMode === false) {
                        input.classList.remove("lightModeThreeValueInput")
                    } else {
                        input.classList.remove("darkModeThreeValueInput")
                    }
                }

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

                }

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
            secondsInput.innerHTML = "";

            minutesInput.value = "";
            minutesInput.innerHTML = "";

            hoursInput.value = "";
            hoursInput.innerHTML = "";


            startButton.disabled = false;

            for (const input of inputs) {

                input.readOnly = false;


            }

        });

    };



    return (
        <>

            <div className="themeChangerAndGithubIconsContainer">

                <a className="githubIconContainer" href="https://github.com/favorodera" target="_blank"><img className="githubIcon" src={darkGithub} alt="" /></a>

                <button className="themeChangerIconContainer" onClick={setTheme}><img className="themeChangerIcon" src={sun} alt="" /></button>

            </div>

            <div className="timerContainer">

                <h1 className="timerHeader">TIMER</h1>
                <p className="errorMessage"></p>

                <form action="submit" className="timerInputsContainer">

                    <div className="hours">

                        <label htmlFor="hours">Hours</label>
                        <input type="number" id="hours" placeholder="00" name="hours" onChange={inputFontSizeHandler} className="darkModeInput" />

                    </div>

                    <div className="minutes">

                        <label htmlFor="minutes">Minutes</label>
                        <input type="number" id="minutes" placeholder="00" name="minutes" onChange={inputFontSizeHandler} className="darkModeInput" />

                    </div>

                    <div className="seconds">

                        <label htmlFor="seconds">Seconds</label>
                        <input type="number" id="seconds" placeholder="00" name="seconds" onChange={inputFontSizeHandler} className="darkModeInput" />

                    </div>

                </form>

                <div className="controlButtonsContainer">

                    <button type="submit" className="startButton" style={{ backgroundColor: "rgba(3, 174, 133, 1)", border: "1px solid rgba(3, 174, 133, 1)" }} onClick={startTimer} >START</button>

                    <button type="button" className="pauseButton" style={{ border: "1px solid rgba(209, 209, 209, 1)", backgroundColor: "rgba(234, 234, 234, 0)" }} >PAUSE</button>

                    <button type="reset" className="resetButton" style={{ backgroundColor: "rgba(253, 98, 89, 1)", border: "1px solid rgba(253, 98, 89, 1)" }}>RESET</button>

                </div>

            </div>

        </>
    )
}

export default Webpage