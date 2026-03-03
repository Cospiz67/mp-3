import styled from "styled-components";

const StyledGrid = styled.div`
    display:grid;
    grid-template-columns: auto auto auto auto auto;
    margin: 2% 0;
`

export default function Experience(){
    return(
        <>
            <h3>I gained experience by using those tools:</h3>
                    <div class = "grid">
                        <div class = "grid-element">
                            <img src = "../resources/logo angular.png" alt = "Angular">
                            <p>Angular</p>
                        </div>
                        <div class = "grid-element">
                            <img src = "../resources/logo blender.png" alt = "Blender">
                            <p>Blender</p>
                        </div>
                        <div class = "grid-element">
                            <img src = "../resources/logo c.png" alt = "C">
                            <p>C</p>
                        </div>
                        <div class = "grid-element">
                            <img src = "../resources/logo cSharp.png" alt = "C#">
                            <p>C#</p>
                        </div>
                        <div class = "grid-element">
                            <img src = "../resources/logo css.png" alt = "CSS">
                            <p>CSS</p>
                        </div>
                        <div class = "grid-element">
                            <img src = "../resources/logo devExpress.png" alt = "DevExpress">
                            <p>DevExpress</p>
                        </div>
                        <div class = "grid-element">
                            <img src = "../resources/logo git.png" alt = "Git">
                            <p>Git</p>
                        </div>
                        <div class = "grid-element">
                            <img src = "../resources/logo github.png" alt = "GitHub">
                            <p>GitHub</p>
                        </div>
                        <div class = "grid-element">
                            <img src = "../resources/logo js.png" alt = "JavaScript">
                            <p>JavaScript</p>
                        </div>
                        <div class = "grid-element">
                            <img src = "../resources/logo html.png" alt = "HTML">
                            <p>HTML</p>
                        </div>
                        <div class = "grid-element">
                            <img src = "../resources/logo ocaml.png" alt = "Ocaml">
                            <p>Ocaml</p>
                        </div>
                        <div class = "grid-element">
                            <img src = "../resources/logo mySQL.png" alt = "MySQL">
                            <p>MySQL</p>
                        </div>
                        <div class = "grid-element">
                            <img src = "../resources/logo python.png" alt = "Python">
                            <p>Python</p>
                        </div>
                        <div class = "grid-element">
                            <img src = "../resources/logo typescript.png" alt = "TypeScript">
                            <p>TypeScript</p>
                        </div>
                        <div class = "grid-element">
                            <img src = "../resources/logo unity.png" alt = "Unity">
                            <p>Unity</p>
                        </div>
                    </div>
                    <div class = "overview">
                        <div class = "overview-title">
                            <h3>Internships</h3>
                            <hr> 
                        </div>
                    </div>
                    <div class = "one-project">
                        <div class="text-section">
                            <img src = "../resources/sncf logo.png" alt = "Logo SNCF">
                            <p>2 months in 2025</p>
                        </div>
                        <p>At SNCF, I learnt how to use new programming
                            languages such as HTML, CSS, JavaScript. I also
                            discovered how to cooperate in a large company,
                            as I was participating in the IT meetings.
                        </p>
                    </div>
                    <div class = "one-project">
                        <p>At Beaupeyrat, renewing the computer
                            park of the high school was my main
                            task. I was making the network
                            connections between the computers and
                            the computer servers of the school.
                        </p>
                        <div class="text-section">
                            <img src = "../resources/beaupeyrat logo.png" alt = "Logo beaupeyrat">
                            <p>1 month in 2022</p>
                        </div>
                    </div>
                    <div class = "one-project">
                        <div class="text-section">
                            <img src = "../resources/winston logo.png" alt = "Logo Winston & Strawn">
                            <p>2 weeks in 2021</p>
                        </div>
                        <p>
                            At Winston & Strawn, I was in charge of the
                            inventory management of computer
                            equipments. I was directly linked to
                            customers. Therefore, I had to learn to
                            satisfy them in the shortest possible time
                        </p>
                    </div>
        </>
    )
}