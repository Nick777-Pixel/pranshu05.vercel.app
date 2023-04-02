const ProjectCard = ({
    imgSrc,
    projectName,
    projectLangs,
    projectDescription,
}) => {
    return (
        <div className="project-card">
            <div className="project-card-img">
                <img src={imgSrc} alt={projectName} />
            </div>
            <div className="project-card-text">
                <h2>{projectName}</h2>
                <div className="project-lang">
                    <p>{projectLangs}</p>
                </div>
                <p>{projectDescription}</p>
            </div>
        </div>
    )
}

export const Projects = () => {
    return (
        <div className="projects" id="projects">
            <h1>Projects 🛠️</h1>
            <p>I've listed some of my projects below 👇</p>
            <div className="project-cards-container">
                <ProjectCard
                    imgSrc="https://avatars.githubusercontent.com/u/95647824?s=280&v=4"
                    projectName="Elpha"
                    projectLangs="Node, discord.js, MongoDB"
                    projectDescription="Elpha is an open-source bot made with discord.js and hosted on Railway. It is developed with aim to make server moderation easier."
                />
                <ProjectCard
                    imgSrc="https://img.itch.zone/aW1nLzY1OTc2NDAucG5n/original/MjFBYb.png"
                    projectName="Dark Forest"
                    projectLangs="C#, Unity Engine"
                    projectDescription="Dark Forest is a fps game made with C# and Unity Engine."
                />
                <ProjectCard
                    imgSrc="https://images-ext-1.discordapp.net/external/onODAhJidPfekpmsRhD2NuUVhGwLvMVOOCk0HRAK8Go/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/1079000764204204052/637bfc2c6f484c9d9e753a0a0243541b.webp?width=616&height=616"
                    projectName="Anti Ghost Ping"
                    projectLangs="Node, discord.js, MongoDB"
                    projectDescription="Powerful and open-source ghist ping setection bot. It can detect ghost pings in each and every channel of a server with a redirect message system!"
                />
            </div>
        </div>
    )
}
