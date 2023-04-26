import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className="home-wrapper">
            <Header/>
            <div className="title-text">
                Visual Memories of Tippecanoe Communities
            </div>
            <div className="center-column">
                <div className="column">
                    <img src="/VisualMemories.jpg" width={500} className="cover-image" />
                    <img src="/VisualMemories.jpg" width={500} className="cover-image" />
                    <img src="/VisualMemories.jpg" width={500} className="cover-image" />
                </div>

                <div className="column">
                    <h1>
                        Abstract
                    </h1>
                    <p>
                        This project is intended to connect Purdue University with the community of Tippecanoe County through photographic memories and a co-creation process.
                        We understand the power of images and specifically of photos that are part of our personal history.
                        Collective conversation about these pictures can allow us to think about the past, the present,
                        and to imagine possible futures by sharing and talking about the differences and similarities that enrich our culture and communities.
                    </p>
                    <h1>
                        Introduction
                    </h1>
                    <p>
                        Collective memory is vital to community building and preservation, and for understanding the self in relation to community (Halbwachs, 2011).
                        Photography shapes our relationship with history and memory (Bate, 2010).
                        The intent of the Visual Memories of Tippecanoe Count Project is to strengthen the intergenerational bonds between young people and adults in
                        Greater Lafayette through shared conversations focused on the collective memory of their communities.
                        Ourstarting point will be photo albums or family photographs, photographic collections in County archives.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}