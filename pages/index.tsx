
import PlaylistCard from "@/components/PlaylistCard";
import {Layout} from "@/layouts/Layout";

const playlistInfo = {
    focus: [
      {
        title: 'Peaceful Piano',
        description: 'Relax and indulge with beautiful piano pieces',
        image: '/media/pictures/peaceful-piano.png',
      },
      {
        title: 'Deep Focus',
        description: 'Keep calm and focus with ambient music.',
        image: '/media/pictures/deep-focus.png',
      },
      {
        title: 'Instrumental Study',
        description: 'Focus with soft study music in the background.',
        image: '/media/pictures/instrumental-study.png',
      },
      {
        title: 'Jazz Vibes',
        description: 'The original chill instrumental beats playlist.',
        image: '/media/pictures/jazz-vibes.png',
      },
      {
        title: 'Focus Flow',
        description: 'Uptempo instrumental hip hop beats.',
        image: '/media/pictures/focus-flow.png',
      },
      {
        title: 'Workday Lounge',
        description: 'Lounge and chill out music for your workday.',
        image: '/media/pictures/workday-lounge.png',
      },
    ],
    playlists: [
      {
        title: 'Today`s Top Hits',
        description: 'PinkPantheress & Ice Spice are on top of the Hottest 50!',
        image: '/media/pictures/todays-top-hits.png',
      },
      {
        title: 'RapCaviar',
        description: 'New music from Polo G, Don Toliver and A Boogie Wit da Hoodie.',
        image: '/media/pictures/rap-caviar.png',
      },
    ],
  };

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
                       {
                        playlistInfo.focus.map((playlist, index) => {
                            return (
                                <PlaylistCard
                                  key={`playlist-info-${index}`}
                                  title={playlist.title}
                                  description={playlist.description}
                                  image={playlist.image}
                                />
                              );
                        })
                       }
                    </div>
                </div>
                <div className="contenedor-playlist">
                    <div className="playlist-header">
                        <span>Spotify playlist</span>
                        <span>Show all</span>
                    </div>
                    <div className="playlist">
                    {
                        playlistInfo.playlists.map((playlist, index) => {
                            return (
                            <PlaylistCard
                                key={`playlist-info-${index}`}
                                title={playlist.title}
                                description={playlist.description}
                                image={playlist.image}
                            />
                            );
                        })
                    }
                    </div>
                </div>
            </section>
        </Layout>

    </div>
    );
  
};

export default IndexPage;