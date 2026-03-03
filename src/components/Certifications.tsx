import styled from "styled-components";


const StyledOverview = styled.div`
    display:flex;
    flex-direction: column;
`

const StyledOverviewTitle = styled.div`
    display: flex;
    margin: 1% 4%;
    justify-content: center;
`

const StyledH3 = styled.h3`
    width: max-content;
    margin: 0 2%;
`

const StyledHr = styled.hr`
    width: 60%;
    margin: auto 0;
    color: rgb(55, 97, 189);
    background-color: rgb(55, 97, 189);
    height: 5px;
    border: none;
    border-radius: 5px;
`

const StyledOneProject = styled.div`
    display: flex;
    width:90%;
    padding: 2%;
    margin: auto;
`

const StyledOneProjectImg = styled.img`
    margin: 0 2%;
    border-radius: 0;
    width: 20vw;
    height: auto;
    object-fit: contain;
`

const StyledOneProjectP = styled.p`
    width: 60%;
    text-align: justify;
    padding: 2%;
    margin: auto;
`

const StyledIntroText = styled.p`
    margin:auto;
    text-align: justify;
    width: 80%;    
`

const OneSpecificCertif = styled.img`
    margin: 0 2%;
    border-radius: 0;
    width: 10vw;
    height: auto;
    object-fit: contain;
`

export default function Certifications(){
    return(
        <>
            <StyledOverview>
                <StyledOverviewTitle>
                    <StyledH3>Linguistic Certifications</StyledH3>
                    <StyledHr/> 
                </StyledOverviewTitle>
                <StyledIntroText>
                    I speak French as it is my mother tongue. However, opening myself to
                    other cultures is also really important to me. That is why I like to
                    learn new languages.
                </StyledIntroText>
                <StyledOneProject>
                    <StyledOneProjectImg src = "./dualdiploma logo.png" alt = "Logo Dual Diploma"/>
                    <StyledOneProjectP>
                        I am fluent in English. As previously
                        mentioned, I obtained the American
                        High school diploma of the state of
                        Florida. During these classes, I followed
                        C1/C2 CEFR level classes, in which both
                        my ability in English and my deep
                        understanding of this language were
                        tested.
                    </StyledOneProjectP>
                </StyledOneProject>
                <StyledOneProject>
                    <StyledOneProjectP>
                        I obtained the IELTS certificate in May 2025 
                        with an overall score of 7.5 out of 9.
                        My CEFR level was evaluated at C1.
                    </StyledOneProjectP>
                    <StyledOneProjectImg src = "./IELTS logo.png" alt = "Logo IELTS"/>
                </StyledOneProject>
                <StyledOneProject>
                    <OneSpecificCertif src = "./cambridge logo.png" alt = "Logo Cambridge"/>
                    <StyledOneProjectP>
                        I also have the FIRST certificate of Cambridge, as well
                        as the PET certificate of Cambridge to
                        demonstrate my English proficiency.
                    </StyledOneProjectP>
                </StyledOneProject>
                <StyledOneProject>
                    <StyledOneProjectP>
                        Moreover, I speak Spanish at an
                        intermediate level. I got the DELE
                        from the Cervantes Institute of
                        Madrid. In high school, I was also
                        enrolled in an additional Spanish
                        class to practice this language
                        more often.
                    </StyledOneProjectP>
                    <OneSpecificCertif src = "./instituto-cervantes.png" alt = "Logo Instituto Cervantes"/>
                </StyledOneProject>
            </StyledOverview>
            <StyledOverview>
                <StyledOverviewTitle>
                        <StyledHr/>
                        <StyledH3>Other Certifications</StyledH3>
                </StyledOverviewTitle>
                <StyledOneProject>
                    <StyledOneProjectImg src = "./CERN Solvay.png" alt = "Logo CERN"/>
                    <StyledOneProjectP>
                        I followed the online program of the CERN-Solvay Education Programme.
                        It helped me discover my interest in STEM (Science, Technology, Engineering and Mathematics).
                    </StyledOneProjectP>
                </StyledOneProject>
                <StyledOneProject>
                    <StyledOneProjectP>
                        Being able to intervene if needed to administer 
                        first aid to those who need it was very important to me. Hence, I did a
                        training to learn how to react effectively in the event of accidents.
                        I obtained the certification of the Prevention and Civic Relief of level 1 (PSC1 in French).
                    </StyledOneProjectP>
                    <OneSpecificCertif src = "./psc1 logo.png" alt = "Logo PSC1"/>
                </StyledOneProject>
            </StyledOverview>
        </>
    )
}