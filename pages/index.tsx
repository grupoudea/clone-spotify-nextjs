
import PlaylistCard from "@/components/PlaylistCard";
import {Layout} from "@/layouts/Layout";

const IndexPage = () => {
    return (
    <div className="contenedor-principal">
        <Layout>
            
            <section>
                <div className="contenedor-playlist">
                    <div className="playlist-header">
                        <span>Focus</span>
                        <span>Show all</span>
                    </div>
                    <div className="playlist">
                       <PlaylistCard  
                        title='Peaceful Piano'
                        description="Relax and indulge with beatiful piano pieces"
                        image="/media/pictures/peacful-piano.png"
                       />
                    </div>
                </div>
                <div className="contenedor-playlist">
                    <div className="playlist-header">
                        <span>Spotify playlist</span>
                        <span>Show all</span>
                    </div>
                    <div className="playlist">
                        <PlaylistCard
                            title='22 Peaceful Piano'
                            description="2 Relax and indulge with beatiful piano pieces"
                            image='/media/pictures/peacful-piano.png'
                        />
                    </div>
                </div>
            </section>
        </Layout>

    </div>
    );
  
};

export default IndexPage;