
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
                       <PlaylistCard/>
                    </div>
                </div>
                <div className="contenedor-playlist">
                    <div className="playlist-header">
                        <span>Spotify playlist</span>
                        <span>Show all</span>
                    </div>
                    <div className="playlist">
                        <PlaylistCard/>
                    </div>
                </div>
            </section>
        </Layout>

    </div>
    );
  
};

export default IndexPage;